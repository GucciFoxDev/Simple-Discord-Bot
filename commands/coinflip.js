module.exports = {
    name: 'coinflip',
    cooldown: 10,
    description: "This is a coinflip command!",
    async execute(message, args, cmd, client, Discord){
        let get_random = function (list) {
            return list[Math.floor((Math.random() * list.length))];
          }
          let list = ['Heads', 'Tails']
          let emb1 = new Discord.MessageEmbed()
            .setTitle("Flipping...")
            .setDescription(`You flipped ${get_random(list)}! Congratulations!`)
            .setColor("RANDOM")
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
      
          message.channel.send(emb1);
    }
}