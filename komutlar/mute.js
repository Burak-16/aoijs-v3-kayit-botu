module.exports = ({

name:"mute",

code: `
  
$giveRole[$mentioned[1];$getServerVar[mrol]]

$description[

Susturulan kişi: \`$usertag[$mentioned[1]]\`

Susturan yetkili: \`$usertag\`

Sebebi: $replaceText[\`$noMentionMessage\`;\`\`;\`Hiç bir sebep belirtilmemiş.\`]

]

$color[BLUE]

$argsCheck[>1; | Birini etiketlemelisin.]

$onlyPerms[manageroles;Bu Komutu Kullanmak İçin Rolleri Yönet Yetkisine Sahip Olman Lazım]

$onlyIf[$hasPerms[$clientID;manageroles]!=false; | Rolleri yönet yetkim yok.]

$onlyIf[$getServerVar[mrol]!=; | Mute rol ayarlanmamış.]


`})