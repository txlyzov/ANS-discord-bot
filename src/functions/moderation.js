const Filters = require('../files/filters')

let lastMessage = null

module.exports = (client) => {
    client.on('message',async(message) => {

        // if (filters.linkRegex.match(message.content.toString()) && (message.author.id!=client.user.id)){
        //     message.channel.send(`**WARNING!** 
        //     Could be a scammer link from ${message.author}!! __Be careful,dont trust third party resources if you not sure what are you doing!__
        //     Original message:
        //     || ${message.content} ||`)

        //     message.delete()
        // }


        let links = message.content.match(Filters.linkRegex)
        if (links!=null 
            && (message.author.id!=client.user.id)){
                let editedLinks = []
                let banned = false

                // links.forEach(element => {
                //     if(element.match(Filters.discordDomain)!= null){
                //         message.channel.send(`${element.match(Filters.discordDomain)}`)
                //     }
                // })

                links.forEach(link => {
                    if(link.match(Filters.discordDomain)!=null){
                        return
                    }
                    editedLinks.push(link.replace('https://','').replace(Filters.notLetters,'').toLowerCase());
                    let s = link.replace('https://','').replace(Filters.notLetters,'').toLowerCase().match(Filters.keyBannedWords)
                    if (link.replace('https://','').replace(Filters.notLetters,'').toLowerCase().match(Filters.keyBannedWords)!=null){
                        banned = true  
                    }

                })

                if(banned){
                    if (message.content != lastMessage){
                        //lastMessage = message.content.toString()
                        
                        message.channel.send(`**WARNING!**` 
                        + `\nCould be a scammer link from ${message.author}!! __Be careful,dont trust third party resources if you not sure what are you doing!__`
                        + `\nOriginal message:`
                        + `\n${editedLinks}`
                        //+ `\n${message.content.match(Filters.linkRegex)}`
                        + `\n|| ${message.content} ||`)
                    }

                    message.delete()  
               }

        }
    })
}