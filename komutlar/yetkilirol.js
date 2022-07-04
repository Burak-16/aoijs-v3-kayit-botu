module.exports = {

name:"yetkili-rol-ayarla",

alises:"yetkilirol-ayarla",

code:`

✅ Kayıt Yetkilisi Rolü $roleName[$mentionedRoles[1]] olarak ayarlandı

$setServerVar[yetkilirol;$mentionedRoles[1]]

$onlyIf[$getServerVar[yetkilirol]==;⚠️ Yetkili rol zaten ayarlanmış]

$suppressErrors[Lütfen Bir Rol Etiketle]

$onlyPerms[admin;⚠️ Bunun için **Yönetici** iznin olmalı]

`}