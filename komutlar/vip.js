 const Discord = require('discord.js');
const ayarlar = require('../ayar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
if (!message.member.roles.has(`602821408216580097`) && !message.member.roles.has(`603688658654068736`)) return message.channel.send(`⚠ **|** Üzgünüm, yetkin yok.`)
    if (!args[0]) return message.channel.send(`⚠ **|** Üyenin ismini/idsini gir veya üyeyi etiketle.`)
    if (!args[0]) return message.channel.send(`⚠ **|** Üyenin ismini/idsini gir veya üyeyi etiketle.`)
    let uye = message.mentions.members.first() || message.guild.member(args[0]) || message.guild.members.find(e => e.displayName.toLowerCase().includes(args[0].toLowerCase()))
    if (!uye) return message.channel.send(`⚠ **|** Bu üyeyi bulamadım, lütfen tekrar dene`)
    if (uye.roles.has(`598937123915169802`)) {
    let rol = message.guild.roles.find(e => e.id === '598937123915169802')
    let embed = new Discord.RichEmbed()
    .setColor(rol.hexColor)
    .setFooter(`${message.author.tag}`)
    .setTimestamp()
    .setDescription(`<@${uye.id}> üyesinden ${rol} rolü alındı. <a:tik:605024713034563585>`)
    uye.removeRole(``)
    uye.addRole(`598937123915169802`)
    message.delete()
    message.channel.send(embed)
    } else {
    let rol = message.guild.roles.find(e => e.id === '598937123915169802')
    let embed = new Discord.RichEmbed()
    .setColor(rol.hexColor)
    .setDescription(`<a:tik:605024713034563585> <@${uye.id}> üyesine ${rol} rolü verildi. `)
    .setFooter(`${message.author.tag}`)
   .setTimestamp()
    uye.addRole(`598937123915169802`)
    uye.removeRole(``)
    message.delete()
    message.channel.send(embed)
    }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'vip',
  description: 'Anlık ping değerlerini gösterir.',
  usage: 'vip',
};;