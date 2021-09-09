module.exports = {
    name: 'clear',
    description: "This command clears messages",
    async execute(message, args, cmd, client, Discord) {
        if(message.member.permissions.has("MANAGE_MESSAGES"))
        if(!args[0]) return message.reply("Please enter the amount of messages you want to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a number!");

        if(args[0] > 100) return message.reply("You cannot clear more than 100 messages at once!");
        if(args[0] < 1) return message.reply("You must delete atleast one message to execute this!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}