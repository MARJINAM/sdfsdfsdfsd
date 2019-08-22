const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayar.json');


module.exports = client => {
  client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: '🔨 Crescent Empire ', // <<<< Burası oynuyorda gözüken düzenle bunu
            type: "STREAMING", // <<<< Bu yayında kısmı
            url: "https://www.twitch.tv/thegorkem11"
        }})
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot aktifleşti ve komutlar yüklendi.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${client.user.username} ismi ile giriş yapıldı.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Hizmete başladım!`);
//console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Shard: ${(client.shard.id+1)}/${client.shard.count}`);
};
