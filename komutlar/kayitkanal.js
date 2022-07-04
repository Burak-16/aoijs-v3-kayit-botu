module.exports = {

name:"kayıt-kanal-ayarla",
  
alises:["kayıtkanal-ayarla","k-kanal-ayarla","kk-ayarla"],
code:`

✔️ Kayıt Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı

$setServerVar[kayitkanal;$mentionedChannels[1]]

$onlyIf[$mentionedChannels[1]!=;⚠️**Kullanım** $getServerVar[prefix]kayıt-kanal-ayarla #kanal]

$onlyPerms[admin;⚠️Bunun İçin \`Yönetici\` İznin Olmalı]

`

}