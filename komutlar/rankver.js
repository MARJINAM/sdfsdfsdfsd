const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Sana bir rank veriyorum... ⌨ 🖥').then(message => {
   var ranklar = ['**Rankın :** ``Silver I`` dostum... ✏' ,'**Rankın :** ``Silver II`` dostum... ✏' ,'**Rankın :** ``Silver III`` dostum... ✏' ,'**Rankın :** ``Silver IV`` dostum... ✏' ,'**Rankın :** ``Silver ELITE`` dostum... ✏' ,'**Rankın :** ``Silver ELITE MASTER`` dostum... ✏' ,'**Rankın :** ``NOVA I`` hmm iyi oynuyora benziyorsun :thumbsup: ⛲' ,'**Rankın :** ``NOVA II`` hmm iyi oynuyora benziyorsun :thumbsup: ⛲' ,'**Rankın :** ``NOVA III`` hmm iyi oynuyora benziyorsun :thumbsup: ⛲' ,'**Rankın :** ``GOLD NOVA MASTER`` hmm iyi baya oynuyora benziyorsun :thumbsup: ⛲' ,'**Rankın :** ``✴ MASTER GUARDIAN I  ✴`` abi bi el atalımmı ? , iyi oynuyorsun baya... ' ,'**Rankın :** ``✴ MASTER GUARDIAN II  ✴`` abi bi el atalımmı ? , iyi oynuyorsun baya...' ,'**Rankın :** ``✴ MASTER GUARDIAN ELITE  ✴`` abi bi el atalımmı ? , iyi oynuyorsun baya... ' ,'**Rankın :** ☄`` DISTINGUISHED MASTER GUARDIAN (DMG)  ``☄ **yalnız sen baya olayı aşmıssın.. helal olsun**  ' ,'**Rankın :** ☄``LEGENDARY EAGLE (LE)``☄ **yalnız sen baya olayı aşmıssın.. helal olsun**' ,'**Rankın :** ☄``LEGENDARY EAGLE MASTER (LEM)``☄ **yalnız sen baya olayı aşmıssın.. helal olsun**' , '**Rankın :** 🎮``SUPREME`` 🎮 **ya da düşündümde sen farklı oyunlarda oynamalısın... bu oyunda fazla ilerdesin :grin: ** ' ,'**OHA LAN GLOBAL ÇIKTINNNNN** Kutsandığını bil dostum ..` ``kutsandın``'];
      var rank = ranklar[Math.floor(Math.random() * ranklar.length)];
            message.edit(`${rank}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rankver', 'rank-ver', 'rank-ver', 'rankver'],
  permLevel: 0
};

exports.help = {
  name: 'rankver',
  description: '18 CS:GO Rankından Bir tanesini Rastgele Atar...',
  usage: 'rankver'
};
