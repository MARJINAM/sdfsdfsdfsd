//https://discord.gg/vNX3VzM
const Discord = require('discord.js');
const ayarlar = require('../ayar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message) => {
 message.channel.send(`  **Sınırsız davet linki:** https://discord.gg/7jpy9wV`  )
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Anlık ping değerlerini gösterir.',
  usage: "davet"
};;