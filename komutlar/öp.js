const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.tenor.com/images/84900d5c4088c08cac576f241bfe5d1a/tenor.gif", "https://media.giphy.com/media/nzDez5n4biPGE/giphy.gif",]
    let result = Math.floor((Math.random() * replies.length));

    let user = message.mentions.members.first() 

  if (!user) return message.reply(':warning: Lütfen Öpüceğin Kişiyi Etiketleyin.').catch(console.error);
  
    let gifembed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} Birisini Öptü! :kiss: `)
        .setColor("#000000")
        .setFooter(`${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gif'],
  permLevel: 0
};

exports.help = {
  name: 'öp',
  description: 'Birisini Öper',
  usage: 'öp'
}; 