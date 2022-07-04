module.exports = {

name:"mute-rol-ayarla",
  
alises:["m-rol-ayarla","mrol-ayarla ",""],
  
code:`

✅ Mute Rolü $roleName[$mentionedRoles[1]] olarak ayarlandı

$setServerVar[mrol;$mentionedRoles[1]]

$suppressErrors[Lütfen Bir Rol Etiketle]

$onlyPerms[admin;⚠️ Bunun için **Yönetici** iznin olmalı]

`}