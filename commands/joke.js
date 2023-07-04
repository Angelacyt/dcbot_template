const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("say_a_joke").setDescription("reply with a joke!"),
    async execute(client, interaction) {
        await interaction.reply("為甚麼深海魚一點都不開心?");
    },
};
