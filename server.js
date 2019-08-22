 const Discord = require('discord.js');
const client = new Discord.Client();
const ayar = require('./ayar.json');
const util = require('util');
const Enmap = require("enmap");
const fs = require("fs");
const chalk = require('chalk');
const Jimp = require('jimp');
const db = require('quick.db')  
const moment = require('moment');
const snekfetch = require('snekfetch');
require('./util/eventLoader')(client);

//////////////////////////////////////////////////////////////////////////////////////////////

var prefix = ayar.prefix;

//////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', async message => {
  if (message.author.bot) return;
  if (message.author.id === '482484704004669440' || message.author.id === '601130468124917760') return;
  if (message.content.toLowerCase().includes('.gg/ch9xmjm') && message.content.toLowerCase().includes('.gg/QRhSkp3')) return;
  if (message.member.roles.has('583296162313011224') && message.author.roles.has('568808010294755330') && message.author.roles.has('533373536840974336')) return;
  let i = await db.fetch(`bkoruma_${message.guild.id}`)
  
  if (i === "pasif") {
    return
  } else {
   let reklam = [".com", ".cf", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".rf.gd", ".az", ".party"];
   if (reklam.some(word => message.content.toLowerCase().includes(word))) {
           
     message.delete();
     let rklmyapma = new Discord.RichEmbed()
     .setColor("#FFFFFF")
     .setAuthor(`${message.author.tag} hoop biladerim!`)
     .setDescription(':white_check_mark: Bu sunucu Crescent Empire Bot tarafından **TANK SİSTEMİYLE** korunuyor karşim, reklam falan olmuyor yaani.')
     .setFooter('Created by Lord MARJINA')
     .setTimestamp()
     message.channel.send(rklmyapma)
     let rklmyapti = new Discord.RichEmbed()
     .setColor('#FFFFFF')
     .setFooter('Created by MARJINA')
     .setAuthor('Yine mükemmel bir botum, engelliyorum.')
     .setTimestamp()
     .setDescription(`<a:devil:596760149990047746> Bir tontiş reklam yapmaya çalışırken **tank sistemine** yakalandı! \n**Üye:** <@${message.author.id}> \`${message.author.id}\` \n**İçerik:** ${message.content}`)
     return message.guild.owner.send(rklmyapti)
            }
    }
});

  client.on('messageUpdate', async (oldMessage, newMessage) => {
  if (newMessage.author.bot) return;
  if (newMessage.author.id === '482484704004669440' || newMessage.author.id === '358262932791885824') return;
  if (newMessage.member.roles.has('583296162313011224') || newMessage.author.roles.has('568808010294755330') || newMessage.author.roles.has('533373536840974336') || newMessage.author.id === '358262932791885824') return;
  let i = await db.fetch(`bkoruma_${newMessage.guild.id}`)
  if (oldMessage.content !== newMessage.content) {
  if (i === "pasif") {
    return
  } else {
   let reklam = [".com", ".cf", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".rf.gd", ".az", ".party"];
   if (reklam.some(word => newMessage.content.toLowerCase().includes(word))) {
           
     newMessage.delete();
     let rklmyapma = new Discord.RichEmbed()
     .setColor("#FFFFFF")
     .setAuthor(`${newMessage.author.tag} hoop biladerim!`)
     .setDescription(':white_check_mark: Bu sunucu Crescent Empire Bot tarafından **TANK SİSTEMİYLE** korunuyor karşim, mesajı düzenleyerek de reklam yapamıyon yaani.')
     .setFooter('Created by Lord MARJINA')
     .setTimestamp()
     newMessage.channel.send(rklmyapma)
     let rklmyapti = new Discord.RichEmbed()
     .setColor('#FFFFFF')
     .setFooter('Created by marjina')
     .setAuthor('Yine mükemmel bir botum, engelliyorum.')
     .setTimestamp()
     .setDescription(`<a:devil:596760149990047746> Bir tontiş reklam yapmaya çalışırken **tank sistemine** yakalandı! \n**Üye:** <@${newMessage.author.id}> \`${newMessage.author.id}\` \n**İçerik:** ${newMessage.content}`)
     return newMessage.guild.owner.send(rklmyapti)
            }
    }
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

//////////////////////////////////////////////////////////////////////////////////////////////

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} adet komut yükleniyor...`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
    return; }
  let permlvl = 0;
  if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayar.grkm) permlvl = 4;
  return permlvl;
};

//////////////////////////////////////////////////////////////////////////////////////////////

const http = require('http');
const express = require('express');
const app = express();

app.listen(process.env.PORT);
app.get("/", (request, response) => {
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 5000);

//////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.react('🇦')
    await msg.react('🇸')
    msg.reply('Aleyküm selam, Hoş Geldin 🍀')
  }
  });

client.on("message", async msg => {
  if (msg.content.toLowerCase() === 'selam') {
msg.react('🇦')
await msg.react('🇸')
    msg.reply('Aleyküm selam, Hoş Geldin ^^')
  }
  });

client.on("message", async msg => {
  if (msg.content.toLowerCase() === 'sea') {
msg.react('🇦')
await msg.react('🇸')
    msg.reply('Aleyküm selam, Hoş Geldin ^^')
  }
  });

client.on("message", async msg => {
  if (msg.content.toLowerCase() === 'slm') {
msg.react('🇦')
await msg.react('🇸')
    msg.reply('Aleyküm selam, Hoş Geldin ^^')
  }
  });

client.on("message", async msg => {
  if (msg.content.toLowerCase() === 's.a') {
msg.react('🇦')
await msg.react('🇸')
    msg.reply('Aleyküm selam, Hoş Geldin ^^')
  }
  });

client.on('userUpdate', async (oldUser, newUser) => {
  if (newUser.bot) return;
  const guild = client.guilds.get(`598591440511303681`)
  let yuye = guild.members.get(newUser.id)
  if (oldUser.username !== newUser.username) {
  if (newUser.username.includes(ayar.tag1)) {
    yuye.addRole(`598937127442448384`)
    client.channels.get(`598842986565992450`).send(`<@${oldUser.id}> **ismine **${ayar.tag1}** tagını eklediği için** <@&598937127442448384>  **rolü verildi! <a:tik:605024713034563585>**`) // <<<< Burayı düzenle
  } else {
    yuye.removeRole(`598937127442448384`)
  }
  }
})

client.on('guildMemberAdd', member => {
  if (member.user.bot) {
  let za = db.fetch(`bkoruma_${member.guild.id}`)
  if (!za || za === "pasif") return;
  if (za === "aktif") {
    const guild = client.guilds.get(`598843563274534923`)
    guild.ban(member, { days: 7, reason: "Bot koruması aktif."})
    client.channels.get(`598842986565992450`).send(`⚠ **|** Bayanlar baylar, sevgili botunuz yine sizi koruyor! Korumaya takılan bir tontiş **(${member.user.tag})** başarıyla yasaklandı.`)
  } 
  } else {
    const guild = client.guilds.get(`598842986565992450`)
    let siki = db.fetch(`siki_${guild.id}`)
    if (!siki || siki === `pasif`) {
    member.addRole(`599204569402048522`)
    member.setNickname(`${ayar.tag2} ${member.user.username}`)
    client.channels.get(`598842986565992450`).send(`<a:cuddleDipper:546023647488376832> Sunucumuza Hoşgeldin, <@${member.id}> Seninle Birlikte **${guild.memberCount} Kişi** olduk.  \n\n<a:emoji_47:591998700524666891> Kaydolmak için ** Ses Teyit ** odalarından herhangi birine girin. \n\n<a:white:599527807436980225> <@&595488735970328586> Sizinle İlgilenecektir. <a:emoji_32:591998029251215361>`)
    } else {
    let kanal = client.channels.get(`598842986565992450`)
    let guild = client.guilds.get(`490774087699005440`)
    let embed = new Discord.RichEmbed()
    .setColor(`#FFFFFF`)
    .setAuthor(member.user.tag)
    .setThumbnail(member.user.avatarURL)
    .setFooter(`Tarih ve saat`)
    .setTimestamp()
    .setDescription(`Sıkı yönetim aktif, kuş uçurtmuyorum. \n\n**Profil:** <@${member.id}> \n**ID:** ${member.id} \n**Sebep:** Sıkı yönetim karşiim.`)
    kanal.send(embed)
    guild.ban(member, { days: 7, reason: `Sıkı yönetim`});
  }
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////
client.login(ayar.token)
//////////////////////////////////////////////////////////////////////////////////////////////



