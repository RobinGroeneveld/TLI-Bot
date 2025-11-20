import { Message, SlashCommandBuilder, TeamMember, Client, ChatInputCommandInteraction, User } from "discord.js";



export const data = new SlashCommandBuilder()
    .setName('Kick player')
    .setDescription('Kicks a player from the server')

    .addUserOption(option =>
        option.setName('player')
        .setDescription('Enter the name of the player who you want to kick')
        .setRequired(true)
    )

    .addStringOption(option =>
        option.setName('reason')
        .setDescription('Enter the reason for kicking the player')
        .setRequired(true)
    )


export async function execute(interaction: ChatInputCommandInteraction ,client: Client) {

const member = interaction.options.getUser('player');
const reason = interaction.options.getString('reason');

const memberTarget = interaction.guild?.members.cache.get(member!.id as string);

if(!memberTarget) {
    return interaction.reply(`User not found`); 
}

if(!memberTarget.kickable) {
    return interaction.reply(`You cannot kick this user`);
}



interaction.reply(`Kicked member ${member} for reason: ${reason}`);

await memberTarget.kick(reason as string);




    
}
