const burak = require("aoi.js")
var fs = require('fs')
const bot = new burak.Bot({
    token: process.env.token,//.env dosyasında token yazan variablenin değerine tokeninizi yazın
    prefix:"$getServerVar[prefix]"//ayarlamalı prefix 
})
bot.onJoined()
bot.onLeave()
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
    bot.command({
        name: command.name,
        code: command.code
    })
}

bot.command({
  name:"ping",
  code:`
  Pingim: **$ping**
  `
})

bot.status({
    text: "Bear Developmen Kayıt botu",//buraya durum yazısı
    type: "PLAYING",//buraya oynuyor bölümü PLAYING LISTENING WATCHING STREAMING şeklindede yapabilirsiniz
    status: "dnd",//buraya status kısmı dnd idle online şeklinde yapabilirsiniz
    time: 12
})

bot.variables({
  variableismi:"variable değeri",
  prefix:"!",
  kizrol:"",
  erkekrol:"",
  kayitsizrol:"",
  yetkilirol:"",
  kayitkanal:"",
  mrol:"",
  tag:"🌟",//her zaman "" den sonra , koyun
  })

bot.joinCommand({

  channel:"$getServerVar[kayitkanal]",

  code:`

**🎉 Aramıza hoşgeldin <@$authorID>.

  
Seninle beraber \`$membersCount\` üyeyiz.

Kayıt olmak için <@&$getServerVar[yetkilirol]> rolündeki üyeleri bekleyin.

Hesabın \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$authorID;time];and;ve;-1];seconds;Saniye;-1];minutes;Dakika;-1];hours;Saat;-1];days;Gün;-1];months;Ay;-1];weeks;Hafta;-1];years;Yıl;-1];second;Saniye;-1];minute;Dakika;-1];hour;Saat;-1];month;Ay;-1];year;Yıl;-1];week;Hafta;-1]\` önce kurulmuş.**

$giveRoles[$authorID;$getServerVar[kayitsizrol]]

$changeNickname[$authorID;$getServerVar[tag] İsim | Yaş]

  `

})