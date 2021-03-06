const Discord = require('discord.js');

exports.run = (client, message, args) => {
    
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
    const avatar = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("» 'İşte Avatarın',")
        .setImage(user.avatarURL)
    message.channel.sendEmbed(avatar)
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["pp"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'pp',
  category: 'kullanıcı',
  description: 'Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.',
  usage: 'c!avatar <@kişi-etiket> veya +avatar'
};