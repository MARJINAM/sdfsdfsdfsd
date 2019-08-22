 const Discord = require('discord.js');
const ayarlar = require('../ayar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
if (!message.member.roles.has(`612472483249127428`) && !message.member.roles.has(`603688658654068736`)) return message.channel.send(`⚠ **|** Üzgünüm, yetkin yok.`)
    if (!args[0]) return message.channel.send(`⚠ **|** Üyenin ismini/idsini gir veya üyeyi etiketle.`)
    let uye = message.mentions.members.first() || message.guild.member(args[0]) || message.guild.members.find(e => e.displayName.toLowerCase().includes(args[0].toLowerCase()))
    if (!uye) return message.channel.send(`⚠ **|** Bu üyeyi bulamadım, lütfen tekrar dene`)
    if (uye.roles.has(`612471056321740835`)) {
    let rol = message.guild.roles.find(e => e.id === '612471056321740835')
    let embed = new Discord.RichEmbed()
    .setColor(rol.hexColor)
    .setDescription(`<@${uye.id}> üyesinden rolleri alındı. <a:fire:602808887933927424>`)
    .setFooter(`Yetkili: ${message.author.tag}`)
    .setTimestamp()
    uye.addRole(`612471056321740835`)
    message.delete()
    message.channel.send(embed)
    } else {
    let rol = message.guild.roles.find(e => e.id === '612471056321740835')
    let embed = new Discord.RichEmbed()
    .setColor(rol.hexColor)
    .setDescription(`<@${uye.id}> üyesine ${rol} Cezası verildi. <a:fire:602808887933927424>`)
    .setFooter(`Yetkili: ${message.author.tag}`)
    .setTimestamp()
    uye.addRole(`612471056321740835`)
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
  name: 'ceza',
  description: 'Anlık ping değerlerini gösterir.',
  usage: "ceza"
};; 