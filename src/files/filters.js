
module.exports = {

    protocolRegex : /(https?:\/\/)/g,
    //linkRegex : /https:\/\/[^/]*\//g,
    domainRegex : /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g,
    discordDomain : /discord.com/g,

    //keyBannedWords : /(n[il1]tr[o0]?)|(d[il1]?[sc][sc]?[o0]?r[db])|(g[il1]?ve?[wv]a[yu])|(g[il1]?ft)|(fr[e3][e3])|(st[ae3][ae3]m)|(b[il1]?rth)/g,
    //keyBannedWords : /(g[il]?ve?[wv]a[yu])|(g[il]?ft)|(ni[il]?tro?)|(d[il]?[sc]?[sc]?o?r?[db]?)|(fre?e?)|(st[ae]?[ae]?m)|(b[il]?rth)/g,
    //keyBannedWords : /(giveway)|(gi?ft)|(ni?tro?)|(di?s?c?o?r?d?)|(free)|(steam)/g,
    //keyBannedWords : (giveway)|(gift)|(nitro)|(discord)|(free)|(steam)|(birth)|(premium)

    mainBannedWords : /(n[il1]tr[oо0]?)|(d[il1]?[sc][sc]?[oо0]?r[db])/g,
    mainBannedWordsRus : /(н[иi]]тр[oо0])|(д[иi][сc]к[oо0]рд)/g,

    secondaryBannedWords : /(g[il1]?ve?[wv][аa][yuу])|(g[il1]?ft)|(fr[e3е][e3е])|(st[ae3еа][ae3еа]m)|(b[il1]?rth)|([pр]r[ae3еа][mn]{1,2}[il1]?[yuу][mn]{1,2})/g,  
    secondaryBannedWordsRus : /(р[aoао0][з3]д[aoао0]ч[aoао0])|(б[еe3]сп?л[aoао0]тн)|(п[oо0]д[aoао0]р[oо0]?)/g,

    allBannedWords : /(n[il1]tr[oо0]?)|(d[il1]?[sc][sc]?[oо0]?r[db])|(g[il1]?ve?[wv][аa][yuу])|(g[il1]?ft)|(fr[e3е][e3е])|(st[ae3еа][ae3еа]m)|(b[il1]?rth)|([pр]r[ae3еа][mn]{1,2}[il1]?[yuу][mn]{1,2})/g,
    
    notLetters : /\W*[24-9]*_*/g,
    spacedLinksFix : /(\.\s+)|(\s+\.)/g,
    //notLetters : /\W*\d*_*/g,

    discordEveryones : /@(everyone|here)/g
}
