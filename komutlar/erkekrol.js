module.exports = {

name:"erkek-rol-ayarla",

alises:"erkekrol-ayarla",

code:`

✅ Erkek Rolü $roleName[$mentionedRoles[1]] olarak ayarlandı

$setServerVar[erkekrol;$mentionedRoles[1]]

$onlyIf[$getServerVar[erkekrol]==;⚠️ Erkek rol zaten ayarlanmış]

$suppressErrors[Lütfen Bir Rol Etiketle]

$onlyPerms[admin;⚠️ Bunun için **Yönetici** iznin olmalı]

`}