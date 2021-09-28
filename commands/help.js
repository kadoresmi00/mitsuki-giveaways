const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async(client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if (!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
        .setAuthor("Mitsuki Giveway | Kado")
        .setTitle("Command List & Guide for the Bot")
        .setDescription("Below are Commands you can do with Bot, Right now there is only 6 commands available, more commands will be added soon.")
        .setDescription("Below are Commands you can do with Bot, Right now there is only 6 commands available more commands will be added soon.")
        .addField("🎁 Giveaway 🎁", "start [channel-name] [Time] [winners] [Prize]\nreroll [prize name]\nend [prize name]")
        .addField("Examples", "m!start #giveaway 5m 1 Testing\nm!end Testing\nm!reroll Testing")
        .setTimestamp()
        .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.react("🎉")

    return message.author.send(help);
}

module.exports.help = {
    name: "help"
}