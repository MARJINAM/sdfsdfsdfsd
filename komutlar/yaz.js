const Discord = require('discord.js');
const moment = require('moment');

exports.run = async (client, message, args) => {
    if (message.author.id !== '492784417652342795' && message.author.id !== '358262932791885824') return message.channel.send('⚠ **|** Üzgünüm, yetkin yok.')
    let nediyim = args.join(' ')
    if (!nediyim) return message.channel.send("⚠ **|** Ne yazmamı istiyorsun?")
    message.delete()
    message.channel.send(nediyim)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'Botu yeniden başlatır.',
  usage: 'yaz'
};