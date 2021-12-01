
module.exports = {
    linkRegex : /https:\/\/[^/]*\//g,
    domainRegex : /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}/g,
    discordDomain : /https:\/\/discord.com\//g,

    keyBannedWords : /(g[il]?ve?[wv]a[yu])|(g[il]?ft)|(ni[il]?tro?)|(d[il]?[sc]?[sc]?o?r?[db]?)|(fre?e?)|(ste?am)/g,
    //keyBannedWords : /(giveway)|(gi?ft)|(ni?tro?)|(di?s?c?o?r?d?)|(free)|(steam)/g,
    //keyBannedWords : (giveway)|(gift)|(nitro)|(discord)|(free)|(steam)
    
    notLetters : /\W*\d*_*/g
}
