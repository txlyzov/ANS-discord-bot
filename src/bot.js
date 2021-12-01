// TOKEN1 = ODgzNTMxMjc2OTMyNTEzODIy.YTLSnw.pRPTM4g7yev893nxkRu1_vtMt5k
// TOKEN2 = OTE1NjQ1OTM1MzYxNjEzODk1.Yaenug.oh02WQW_gnDJguh6htvPSLyaRu0

//https://discord.com/api/oauth2/authorize?client_id=915645935361613895&permissions=139586825280&scope=bot

//const DiscordJS = require('discord.js')
const { Client, Intents } = require('discord.js');
const WOKCommands = require('wokcommands')
require('dotenv').config()

const client = new Client({ 
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] 
});
// const client = new DiscordJS.Client({
//     partials: ['MESSAGE','REACTION'],
// })

client.on('ready',() => {
    console.log(`Logged in as ${client.user.tag}!`);
    // client.user.setPresence({
    //     status: 'dnd',  //dnd idle online invisible
    //     game: {
    //         name: 'Searching for scammers',  //The message shown
    //         type: 'WATCHING' //PLAYING: WATCHING: LISTENING: STREAMING:
    //     }
    // })
    client.user.setStatus('idle') //dnd idle online invisible

    new WOKCommands(client,{
        commandsDir: require('path').resolve('src/commands'),
        featureDir: require('path').resolve('src/functions'),
        // messagesPath,
        showWarns: true
    })
    .setDefaultPrefix('`')
})

client.login(process.env.TOKEN2)