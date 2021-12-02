const Filters = require('../files/filters')

let lastMessage = null

module.exports = (client) => {
    client.on('message',async(message) => {
        if (message.author.id!=client.user.id){

            //filter severity
            let warningLevel = 1
            //final decision
            let banned = false

            //context check
            let context = message.content.toLowerCase().replace(Filters.domainRegex,'')
            if(context.match(Filters.mainBannedWords) || context.match(Filters.mainBannedWordsRus)){
                if(context.match(Filters.secondaryBannedWords) || context.match(Filters.secondaryBannedWords) || context.match(Filters.discordEveryones))
                warningLevel = 2
            }


            //link check
            let links = message.content.toLowerCase().match(Filters.domainRegex)
            if (links!=null){

                banned = links.some(link => {
                    if(link.match(Filters.discordDomain)!=null){
                        return
                    }
                    switch(warningLevel){
                        case 1:
                            return link.toLowerCase().replace(Filters.notLetters,'').match(Filters.mainBannedWords) != null
                        case 2:
                            return link.toLowerCase().replace(Filters.notLetters,'').match(Filters.allBannedWords) != null
                    }
                })



                //suspect context without suspect link case
                if(!banned && warningLevel === 1){
                    //new advanced search
                }

            }





            //delete original message and rewrite suspect message under spoiler with warning
            if(banned){
                if (message.content != lastMessage){
                    lastMessage = message.content.toString()
                    
                    message.channel.send(`**WARNING!**` 
                    + `\nCould be a scammer link from ${message.author}!! __Be careful,dont trust third party resources if you not sure what are you doing!__`
                    + `\nOriginal message:`
                    + `\n|| ${message.content.replace(Filters.protocolRegex,'[link disabled]').replace(Filters.discordEveryones,'[everyone disabled]')} ||`)
                }

                message.delete()  
            }


        }

        
    })
}