module.exports = {
    name: 'suggest',
    cooldown: 10,
    description: "This is a suggest command!",
    execute(message, args, cmd, client, Discord){
        const channel = message.guild.channels.cache.find((ch) => ch.name === "suggestions")
        const suggestionQuery = args.join(" ");
        if(!channel) return message.reply("Please make sure to make a channel called **suggestions** before using this command!");
        if(!suggestionQuery) return message.reply("Please specify a suggestion! Example: +suggest Add more roles");

        const embed = new Discord.MessageEmbed()
        .setTitle("New Suggestion!")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setDescription(`**Suggestion**: ${suggestionQuery}`)
        .setColor('#DB3700')
        .setTimestamp()

        const embed2 = new Discord.MessageEmbed()
        .setTitle("Your suggestion has been sent to the suggestions channel!")
        .setColor('RANDOM')

        message.channel.send(embed2);
        message.author.send(embed2)
        channel.send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        });
    }
}