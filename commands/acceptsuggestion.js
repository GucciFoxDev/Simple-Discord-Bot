module.exports = {
    name: 'acceptsuggestion',
    description: "This is an accept suggestion command!",
    async execute(message, args, cmd, client, Discord){
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("You do not have the MANAGE_MESSAGE permission so you are not permitted to use this command!");
        const messageID = args[0];
        const acceptQuery = args.slice(1).join(" ");
        try {
            const suggestionChannel = message.guild.channels.cache.find((ch) => ch.name === "suggestions")
            const suggestedEmbed = await suggestionChannel.messages.fetch(messageID);
            console.log(suggestedEmbed);
            const data = suggestedEmbed.embeds[0];
            
            const acceptEmbed = new Discord.MessageEmbed()
            .setTitle("Suggestion Accepted")
            .setAuthor(data.author.name, data.author.iconURL)
            .setDescription(data.description)
            .setColor('#07c900')
            .setTimestamp()
            .addField(`**Accpetance reason from ${message.author.tag}**`, acceptQuery);
            
            suggestedEmbed.edit(acceptEmbed);

            const user = await client.users.cache.find(
                (u) => u.tag === data.author.name
            );
            const userembed = new Discord.MessageEmbed()

            .setTitle(`Your suggestion has been accepted for the reason: ${acceptQuery}`)
            .setColor('#07c900')
            
            user.send(userembed);
        } catch (err) {
          console.log(err);
        }

    },
};