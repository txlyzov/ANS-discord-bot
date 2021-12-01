module.exports = {
    name: 'link',
    callback: ({message}) => {
        message.channel.send('https://discord.com/api/oauth2/authorize?client_id=915645935361613895&permissions=139586825280&scope=bot')
    }
}