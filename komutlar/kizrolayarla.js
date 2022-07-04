module.exports = {

name:"kız-rol-ayarla",
  
alises:"kızrol-ayarla",
  
code:`

✅ Kız Rolü $roleName[$mentionedRoles[1]] olarak ayarlandı

$setServerVar[kizrol;$mentionedRoles[1]]

$onlyIf[$getServerVar[kizrol]==;⚠️ Kız rol zaten ayarlanmış]

$suppressErrors[Lütfen Bir Rol Etiketle]

$onlyPerms[admin;⚠️ Bunun için **Yönetici** iznin olmalı]

`}