const Discord = require('discord.js');
const ayarlar = require('../ayar.json');
const db = require('quick.db')

var prefix = ayarlar.prefix;

exports.run = async (client, message) => {
  if (message.author.id !== '601130468124917760' && message.author.id !== '601130468124917760' )return message.channel.send('⚠ **|** Üzgünüm, yetkin yok.')
  let kkontrol = db.fetch(`bkoruma_${message.guild.id}`)
  if (kkontrol === `aktif`) {
    var koruma = `Akfif`
  } else if (kkontrol === `pasif` && !kkontrol) {
    var koruma = `Pasif`
  }
  const m = await message.channel.send(`Genel kontrol yapılıyor, lütfen bekleyin...`);
  let embed = new Discord.RichEmbed()
  .setAuthor(`${client.user.tag} genel kontrol sonuçları`)
  .setColor(`#FFFFFF`)
  .setThumbnail(client.user.avatarURL)
  .setFooter(`Tarih ve saat`)
  .setTimestamp()
  .setDescription(`**Mesaj gecikmesi:** ${m.createdTimestamp - message.createdTimestamp} ms \n**API gecikmesi:** ${Math.round(client.ping)} ms \n**Korumalar:** ${koruma}`)
  m.delete()
  await message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'checkup',
  description: 'Anlık ping değerlerini gösterir.',
  usage: "ping"
};;