module.exports = {
	name: 'kick',
	description: 'This command kicks a member!',
	async execute(message, args, cmd, client, Discord) {
		const member = message.mentions.users.first();
		const reason = args.slice(1).join(' ');
		const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
		if (message.member.permissions.has('ADMINISTRATOR'))
			if (member) {
				const memberTarget = message.guild.members.cache.get(member.id);
				
				const newEmbed = new Discord.MessageEmbed()
					.setColor('#07c900')
					.setTitle(`${member.tag} has been kicked for: ${reason}.`);

				message.channel.send(newEmbed);

				const dmEmbed = new Discord.MessageEmbed()
					.setColor('#e70000')
					.setTitle(`You have been kicked from ${message.guild.name}! Reason: ${reason}`);

                    member.send(dmEmbed).catch(error => {
                        message.channel.send(`Something went wrong while I tried to send the user a DM`).catch(console.error)
                    })
					
                    await delay(100);

					memberTarget.kick();

			} else {
				const newEmbed = new Discord.MessageEmbed()
					.setColor('#e70000')
					.setTitle('You could not kick that member. This could be due to not mentioning a user/member to kick.');

				message.channel.send(newEmbed);
			}
	}
};