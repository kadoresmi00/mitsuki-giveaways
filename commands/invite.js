const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async(client, message, args) => {
    let prefix = config.prefix;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let invite = new Discord.MessageEmbed()
        .setTitle("Mitsuki Giveway")
        .addField("Invite Link", "[Click here to invite me](BURAYA DAVE LİNKİNİ KOYARSINIZ)")
        .addField("Support Server", "[Click to join support Server](BURAYADA DESTEK SUNUCUNUZUN DAVET LİNKİNİ KOYARSINIZ)")
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
    message.channel.send(invite);
}

module.exports.help = {
    name: "invite"
}