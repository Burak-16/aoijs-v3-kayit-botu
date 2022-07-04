module.exports = {

  name:"ayarlar",

  code:`
 
  $title[$serverName Sunucusunun Ayarları ]

  $description[ 
  
  Erkek Rol: <@&$getServerVar[erkekrol]>
  
  Kız Rol <@&$getServerVar[kizrol]>
  
  Kayıtsız Rol: <@&$getServerVar[kayitsizrol]>
  
  Yetkili Rol: <@&$getServerVar[yetkilirol]>
  
  Kayıt Kanalı: <#$getServerVar[kayitkanal]>
  
  Tag: $getServerVar[tag]
  
  Mute Rolü: <@&$getServerVar[mrol]>
  ]
  
  $color[RANDOM]
  
  $suppressErrors[Öncelikle Tüm Sistemleri Ayarlaman lazım]
  `}