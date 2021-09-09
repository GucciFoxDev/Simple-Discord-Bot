module.exports = {
    name: 'roll',
    cooldown: 10,
    description: "Roll a dice and receive a number between 1 and 6!",
    async execute(message, args, cmd, client, Discord){
        let number = Math.ceil(Math.random() * 6);
        const newEmbed = new Discord.MessageEmbed()

        .setTitle('Rolling the die...')
        .setDescription(`The number you rolled was ${number}! Wow you're lucky.`)
        .setColor('RANDOM')
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        message.channel.send(newEmbed);
    }
}