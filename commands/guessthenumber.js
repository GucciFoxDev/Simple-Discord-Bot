const { MessageCollector, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'guessthenumber',
    aliases: ['gtn'],
    description: 'Play guess the number',
    
    execute : async(message, args, cmd, client, Discord) => {
        let number = Math.ceil(Math.random() * 10000);
        let finished = false;

        message.channel.send(
            new MessageEmbed()
            .setTitle(`Guess The Number`)
            .setDescription(`Guess a number (1-10000), you have \`1 minute\``)
            .setColor('RANDOM')
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        )

        let collector = new MessageCollector(message.channel, msg => msg.author.id == message.author.id, {
            time: 60000,
        });

        let tries = 0;

        collector.on('collect', async(msg) => {
            if(finished == false) {
                let split = msg.content.split(/ +/);
                let attempt = split.shift();

                if(isNaN(attempt)) return message.reply(`You must choose an actual number`);

                tries++;
    
                if(parseInt(attempt) !== number) return message.reply(`That is incorrect. Please choose again (My number is ${parseInt(msg) < number ? 'higher' : 'lower'} than ${parseInt(msg)})`)
    
                finished = true;
    
                message.channel.send(
                    new MessageEmbed()
                    .setTitle(`Correct`)
                    .setDescription(`${parseInt(msg)} is correct!`)
                    .setFooter(`It took you ${tries} times to get it`)
                    .setTimestamp()
                    .setColor('GREEN')
                )
            }
        });
        
        collector.on('end', async(collected) => {
            if(finished == false) return message.reply(`You timed out!`);
        });
    }
}