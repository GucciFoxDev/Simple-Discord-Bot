module.exports = {
    name: 'ping',
    cooldown: 10,
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord){
        if (message.member.permissions.has('ADMINISTRATOR'))
        message.channel.send(`Pong! ${client.ws.ping}ms.`);

    }
}