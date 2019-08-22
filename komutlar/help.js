const Discord = require('discord.js');
const ayarlar = require('../ayar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message) => {
 let embed = new Discord.RichEmbed()
 .setAuthor(`Royal | Yardım menüsü`)
 .setThumbnail(client.user.avatarURL || client.user.defaultAvatarURL)
 .setFooter(`${message.author.tag} tarafından istendi.`)
 .setTimestamp()
 .setColor('#FFFFFF')
 .setDescription(`⚠ **Bu Komutlar Sadece Yetkililer Tarafından Kullanılmaktadır. c!tag  c!kız  c!erkek  c!vip  c!müzisyen c!koruma c!ceza**'  `)
 message.channel.send(embed)
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Anlık ping değerlerini gösterir.',
  usage: "yardım"
};;