const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = 'https://discord.com/invite/NKZY47ZKj8';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle('Support server')
            .setDescription(`Click [here](${supportServerLink}) to join our server.\nWe will be there for you anytime ❤️`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/1236617830846300231/1236788712575340565/standard.gif?ex=663948bf&is=6637f73f&hm=1bba2d5274e4c88c2330f6f40711911b173052973f55a6f07187b48da2ead40b&`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};
