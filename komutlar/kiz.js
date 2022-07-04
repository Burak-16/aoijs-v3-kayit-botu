module.exports = {

  name:"kız",

  aliases:"k",

  code:`

  $channelSendMessage[$channelID; <@$mentioned[1]> kişisi <@$authorID> Tarafından Kız Olarak Kaydedildi kayıtsız rolü alındı]

  $onlyIf[$mentioned[1]!=;<@$authorID>, Kimi kayıt etmeliyim?]

  $onlyIf[$noMentionMessage[1]!=; <@$authorID>, Üyenin adını gir.]

  $onlyIf[$isNumber[$noMentionMessage[2]]==true;<@$authorID>, Üyenin yaşını gir.]

  $giveRole[$mentioned[1];$getServerVar[kizrol]]

  $takeRole[$mentioned[1];$getServerVar[kayitsizrol]]

  $onlyIf[$hasRole[$authorID;$getServerVar[yetkilirol]]==true;❌ Bunun için $roleName[$getServerVar[yetkilirol]] Rolüne ihticayin var]

  $suppressErrors[Bir Hata İle Karşılaşıldı etiketlenen kullanıcının rollerinin üstünde bir role sahip olmam lazım yada etiketlemen lazım]

  $onlyBotPerms[manageroles;Rolleri Yönetme Yetkim Yok ❌]

  $changeNickname[$mentioned[1];$getServerVar[tag] $noMentionMessage[1] | $noMentionMessage[2]]
  
  $onlyIf[$getServerVar[kizrol]!=;⚠️ Kız Rol Ayarlanmamış]

  $onlyIf[$getServerVar[erkekrol]!=;⚠️ Erkek Rol Ayarlanmamış]

  $onlyIf[$getServerVar[yetkilirol]!=;⚠️ Yetkili Rolü Ayarlanmamış]

  $onlyIf[$getServerVar[kayitkanal]!=;⚠️ Kayıt Kanalı Ayarlanmamış]

  $onlyIf[$getServerVar[kayitsizrol]!=;⚠️ Kayıtsız Rolü Ayarlanmamış]
  `}