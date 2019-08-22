const Discord = require('discord.js');
const ayarlar = require('../ayar.json');

var prefix = ayarlar.prefix;

exports.run = async (client, message) => {
 const m = await message.channel.send(`Ölçülüyor...`)
 m.delete()
 await message.channel.send(`<a:591998511407563004:599315646584717361>  İşlem **${m.createdTimestamp - message.createdTimestamp} ms** sürede gerçekleştirildi!`) 
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Anlık ping değerlerini gösterir.',
  usage: "ping"
};;