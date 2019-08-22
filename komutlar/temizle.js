const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
if (!message.member.roles.has(`595488735970328586`) &&  message.author.id !== '482484704004669440' && !message.member.roles.has(`594547872570146882`)) return message.channel.send(`⚠ **|** Üzgünüm, yetkin yok.`)
  let mesajsayisi = parseInt(args.join(' '));
  if (!mesajsayisi) return message.channel.send('⚠ **|** Kaç mesaj sileceğimi belirtmedin.');
  if (mesajsayisi > 101) return message.channel.send('⚠ **|** En fazla **100** mesaj silebilirim.');
  message.channel.bulkDelete(mesajsayisi + 1, true)
  await message.channel.send(' Başarıyla **' + mesajsayisi + ' Adet** Mesajı Sildim. <a:tikk:602808887933927424>').then(msg => msg.delete(5000))
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};