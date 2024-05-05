const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const youtubeLink = 'https://youtube.com/@mrakchi26?si=XmXo98E28ibZt9m1';
        const InstagramLink = 'https://www.instagram.com/mrakchi_5?igsh=OGQ5ZDc2ODk2ZA==';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:\n 👑 MRAKCHI. I am a discord bot developer and web developer. I love playing games. Feel free to contact me!\n ❤️ [YouTube](${youtubeLink})\n 💙 [Instagram](${InstagramLink})`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};
