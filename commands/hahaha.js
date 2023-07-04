const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("hahaha").setDescription("reply with good word"),
    async execute(client, interaction) {
        await interaction.reply("hahahahahahahahahahahahaha!!!!");
    },
};
