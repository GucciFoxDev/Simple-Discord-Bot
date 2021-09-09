module.exports = {
    name: 'denysuggestion',
    description: "This is an deny suggestion command!",
    async execute(message, args, cmd, client, Discord){
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("You do not have the MANAGE_MESSAGE permission so you are not permitted to use this command!");
        const messageID = args[0];
        const denyQuery = args.slice(1).join(" ");
        try {
            const suggestionChannel = message.guild.channels.cache.find((ch) => ch.name === "suggestions")
            const suggestedEmbed = await suggestionChannel.messages.fetch(messageID);
            console.log(suggestedEmbed);
            const data = suggestedEmbed.embeds[0];
            
            const denyEmbed = new Discord.MessageEmbed()
            .setTitle("Suggestion Denied")
            .setAuthor(data.author.name, data.author.iconURL)
            .setDescription(data.description)
            .setColor('#e70000')
            .setTimestamp()
            .addField(`**Deny reason from ${message.author.tag}**`, denyQuery);
            
            suggestedEmbed.edit(denyEmbed);

            const user = await client.users.cache.find(
                (u) => u.tag === data.author.name
            );
            const dmembed = new Discord.MessageEmbed()

            .setTitle(`Your suggestion has been denied for the reason: ${denyQuery}`)
            .setColor('#e70000')
            
            user.send(dmembed);
        } catch (err) {
          console.log(err);
        }

    },
};