module.exports = ({

name:"unmute",

code: `

$takeRole[$mentioned[1];$getServerVar[mrol]]

$description[

Susturulması Kaldırılan kişi: \`$usertag[$mentioned[1]]\`

Susturmayı Kaldıran yetkili: \`$usertag\`]

$color[BLUE]

$argsCheck[>1; | Birini etiketlemelisin.]

$onlyPerms[manageroles;Bu Komutu Kullanmak İçin Rolleri Yönet Yetkisine Sahip Olman Lazım]

$onlyIf[$hasPerms[$clientID;manageroles]!=false; | Rolleri yönet yetkim yok.]

$onlyIf[$getServerVar[mrol]!=; | Mute rol ayarlanmamış.]

`})