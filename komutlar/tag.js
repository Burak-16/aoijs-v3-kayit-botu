module.exports = {

name:"tag-ayarla",

code:`

✅ Tag Sistemi açıldı artık kullanıcıların isimlerinin başına $message[1] koyucam.

$setServerVar[tag;$message[1]]

$onlyIf[$message[1]!=;⚠️**Kullanım** !tag-ayarla tag ]

$onlyPerms[admin;⚠️Bunun İçin \`Yönetici\` İznin Olmalı]

`

}