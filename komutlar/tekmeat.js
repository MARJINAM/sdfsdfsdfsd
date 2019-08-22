const Discord = require('discord.js');
const ayarlar = require('../ayar.json');

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  let girdi = args.join(' ')
  if (!girdi) return message.channel.send(`⚠ **|** Üyenin ismini/idsini gir veya üyeyi etiketle.`)
  let uye = message.guild.members.get(girdi) || message.guild.member(message.mentions.users.first()) || message.guild.members.find(e => e.user.tag.toLowerCase().includes(girdi.toLowerCase()))
  if (!uye) return message.channel.send(`⚠ **|** Bu üyeyi bulamadım, lütfen tekrar dene.`)
  if (uye.id === message.author.id) return message.channel.send(`⚠ **|** Kendine tekme atamazsın.`)
  message.channel.send(`:anger: <@${message.author.id}> **üyesi** <@${uye.id}> **üyesine uçan tekme attı.**`)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tekmeat',
  description: 'Anlık ping değerlerini gösterir.',
  usage: "ping"
};;