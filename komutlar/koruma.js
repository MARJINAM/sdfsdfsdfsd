const Discord = require('discord.js');
const ayarlar = require('../ayar.json');
const db = require('quick.db')

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission(`BAN_MEMBERS`) && !message.member.author.id(`470925276042493972`) && message.author.id !== '482484704004669440') return message.channel.send(`⚠ **|** Üzgünüm, yetkin yok.`)
    let girdi = args[0]
    if (!girdi) return message.channel.send(`⚠ **|** Bir işlem girmelisin. \n**İşlemler:** aç/kapat`)
  
    if (girdi === "sy-aç") {
      message.channel.send(`Sıkı yönetim aktifleştiriliyor...`).then(m => {
      db.set(`siki_${message.guild.id}`, "aktif")
      m.delete(500)
      })
      message.channel.send(`**Sıkı yönetime geçildi, kuş uçurtmayacağız!** a::white_check_mark: :`)
    }
  
    if (girdi === "sy-kapat" || girdi === "sy-kapa") {
      message.channel.send(`Sıkı yönetim aktifleştiriliyor...`).then(m => {
      db.set(`siki_${message.guild.id}`, "pasif")
      m.delete(500)
      })
      message.channel.send(`**Sıkı yönetime bitti, hadi yine iyisiniz.** a::white_check_mark: :`)
    }
  
    if (girdi === "aç") {
      message.channel.send(`Koruma sistemi aktifleştiriliyor...`).then(m => {
      db.set(`bkoruma_${message.guild.id}`, "aktif")
      m.delete(500)
      })
      message.channel.send(`**Koruma sistemi hazır, bırakın gelsin!** :white_check_mark:`)
    }
  
    if (girdi === "kapat" || girdi === "kapa") {
      message.channel.send(`Koruma sistemi pasifleştiriliyor...`).then(m => {
      db.set(`bkoruma_${message.guild.id}`, "pasif")
      m.delete(500)
      })
      message.channel.send(`Koruma sistemi kapalı, büyük tehlikedesiniz.`)
    }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'koruma',
  description: 'Anlık ping değerlerini gösterir.',
  usage: "koruma"
};;