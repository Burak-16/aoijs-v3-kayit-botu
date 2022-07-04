module.exports = {

name:"kayıtsız-rol-ayarla",

alises:"kayıtsıtsızrol-ayarla",

code:`

✅ Kayıtsız rolü $roleName[$mentionedRoles[1]] olarak ayarlandı

$setServerVar[kayitsizrol;$mentionedRoles[1]]

$suppressErrors[Lütfen Bir Rol Etiketle]

$onlyPerms[admin;⚠️ Bunun için **Yönetici** iznin olmalı]

`}