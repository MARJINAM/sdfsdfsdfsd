const Discord = require('discord.js');
const ayarlar = require('../ayar.json');

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  let girdi = args.join(' ')
  let bot = message.guild.member(client.user.id)
  if (girdi === 'null') {
     if (bot.voiceChannelID === undefined) {
      message.channel.send(`⚠ **|** Zaten bir kanalda değilim.`)
    } else {
      let knl = message.guild.channels.find(e => e.id === bot.voiceChannelID)
      knl.leave()
      message.channel.send(`<a:devil:596760149990047746> Başarıyla **${knl.name}** kanalından ayrıldım.`)
    }
    return
  }
  if (bot.voiceChannelID !== undefined) return message.channel.send(`⚠ **|** Zaten bir kanaldayım.`)
  if (!girdi) return message.channel.send('⚠ **|** Kanalın idsini/ismini gir.')
  let kanal = message.guild.channels.find(e => e.id === girdi) || message.guild.channels.find(e => e.name.toLowerCase().includes(girdi.toLowerCase()))
  if (!kanal) return message.channel.send(`⚠ **|** Bu kanalı bulamadım, lütfen tekrar dene.`)
  kanal.join().then(baglanti => {
    message.channel.send(`<a:tik:605024713034563585> Başarıyla **${kanal.name}** kanalına giriş yaptım.`)
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'katıl',
  description: 'Anlık ping değerlerini gösterir.',
  usage: "ping"
};;