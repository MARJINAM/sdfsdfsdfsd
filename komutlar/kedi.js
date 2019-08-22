const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://iasbh.tmgrup.com.tr/030ee6/0/0/0/0/0/0?u=http://i.sabah.com.tr/sb/galeri/yasam/dunyanin-en-guzel-kedileri/1.jpg", "https://img-s1.onedio.com/id-568ea5a19703063471ad1d66/rev-0/w-635/listing/f-jpg-webp/s-229f854049fdcecc3f218dc47f00d024a78240c5.webp", "https://www.patiliyo.com/wp-content/uploads/2017/11/coby.jpg", "https://img-s2.onedio.com/id-568ea60909d9a1f95fc344b3/rev-0/w-635/listing/f-jpg-webp/s-53466342f39a00585cc20d01ec7964ba5a9c7c13.webp", "https://img-s1.onedio.com/id-5382ff17f45ccaa913a95aea/rev-0/w-635/listing/f-jpg-webp/s-dab8cbeb4f1de5bc6f42d079298460c1dbc4b21a.webp", "https://i.ytimg.com/vi/mPwF-T3UdA8/maxresdefault.jpg", "https://i.ytimg.com/vi/E19iYH2G-2I/hqdefault.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPZDziJD1tvkjfwSn9VpATORLHExSc6CD5sjUfsIhahVFQd9v", "https://www.orjinalsozler.com/wp-content/uploads/2013/09/2121.jpg", "https://i.ytimg.com/vi/xdxMQHihER8/hqdefault.jpg", "https://cdn1.ntv.com.tr/gorsel/yasam/dunyanin-en-guzel-kedileri/,h4_GaGb4cUqpcGUI2e93vQ.jpg?w=960&mode=max&v=20161013110612520", "https://patiliyo.com/wp-content/uploads/2018/07/tatli-kedi.jpg", "http://www.videoizliyorum.com/img/asiri-tatli-yavru-kediler-usi324j.jpg", "https://i.pinimg.com/originals/1e/ca/64/1eca64e84c5bcb120f252e362a1fd40d.jpg", "http://4.bp.blogspot.com/_SU78FXRhHN0/SeHGmnJeetI/AAAAAAAAADQ/pYSydKTbuxg/s400/kedi-resimleri_5.jpg", "http://www.petpatiler.com/wp-content/uploads/2017/04/kedi-dili-3-300x200.jpg", "https://i.ytimg.com/vi/XsQiJG2Gsmk/hqdefault.jpg", "http://ukalahayvan.com/wp-content/uploads/2016/04/munchkin-kedisi.jpg", "http://kedikutusu.com/wp-content/uploads/2016/02/The-cats-meow.jpg"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("MiyaWw :heart_eyes:")
        .setColor("#FF69B4")
        .setFooter(`İsminiz ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pic'],
  permLevel: 0
};

exports.help = {
  name: 'kedi',
  description: 'kedi',
  usage: 'kedi'
}; 