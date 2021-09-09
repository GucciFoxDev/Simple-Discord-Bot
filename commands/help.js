const pagination = require('discord.js-pagination');

module.exports = {
    name: 'help',
    description: "This is a test help command with pages",
    async execute(message, args, cmd, client, Discord) {

        const page1 = new Discord.MessageEmbed()
        .setTitle("List of commands")
        .setColor('RANDOM')
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .addFields(
            {name: '**Fun commands**', value: 'These are commands that are just fun'},
            {name: '**+roll**', value: 'Use this command to roll a 6 sided die! This command will give you a random number between 1 and 6.\n`Aliases: None`'},
            {name: '**+emojify [what you want to emojify]**', value: 'This command is used to turn a sentence and/or symbols into a string of emojis.\n`Aliases: None`'},
            {name: '**+coinflip**', value: 'Use this command to flip a coin! This command will give flip a coin and give you either heads or tails.\n`Aliases: None`'},
            {name: '**+guessthenumber**', value: 'Use this command to play guess the number. Guess the number is a game where you have 1 minute to guess a number between 1 and 10000.\n`Aliases: gtn`'}
        )

        const page2 = new Discord.MessageEmbed()
        .setTitle("List of commands")
        .setColor('RANDOM')
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .addFields(
            {name: '**Useful commands**', value: 'These are commands that are useful'},
            {name: '**+suggest [suggestion]**', value: 'This command is used to suggest things for Ayatoshub. This is useful if you want your voice to be heard when suggesting something.\n`Aliases: None`'},
            {name: '**+acceptsuggestion [suggestion message ID] [acceptance reason]**', value: 'This command is used to accept suggestions. Only people with the MANAGE_MESSAGES permission can use this command!\n`Aliases: None`'},
            {name: '**+denysuggestion [suggestion message ID] [deny reason]**', value: 'This command is used to deny suggestions. Only people with the MANAGE_MESSAGES permission can use this command!\n`Aliases: None`'}
        )

        const page3 = new Discord.MessageEmbed()
        .setTitle("List of commands")
        .setColor('RANDOM')
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .addFields(
            {name: '**Moderation commands**', value: 'These are commands that are used for moderation'},
            {name: '**+slowmode [slowmode time] (channel)**', value: 'This command is used to adjust the slowmode for a mentioned channel or the channel you are in. Mentioning a channel is optional.\n`Aliases: sm`'}
        )

        const page4 = new Discord.MessageEmbed()
        .setTitle("List of commands")
        .setColor('RANDOM')
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .addFields(
            {name: '**Info commands**', value: 'These are commands that can give you info'},
            {name: '**+help**', value: 'This displays/sends this help embed which is full of information on all of the commands such as +roll and +coinflip.\n`Aliases: None`'}
        )


        const pages = [
            page1,
            page2,
            page3,
            page4
        ]

        const emoji = ["⏪", "⏩"]

        const timeout = '10000'

        pagination(message, pages, emoji, timeout)
    }
}