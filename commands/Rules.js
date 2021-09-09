module.exports = {
    name: 'Rules',
    description: "Rules command for the Rules channel",
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        
        .setColor('#A521C1')
        .setTitle('Rules')
        .setDescription('This is the server rules')
        .addFields(
            {name: 'No. 1', value: 'Do not on any circumstance be offensive in a homophobic or racist level.'},
            {name: 'No. 2', value: 'Always follow discord ToS e.g you HAVE to be 13+.'},
            {name: 'No. 3', value: 'Do not harass anyone, if they are annoying/harassing you report them through @ModMail instead of retaliating.'},
            {name: 'No. 4', value: 'Please use chats correctly, we have them organised for a reason. Use #suggestions to suggest new channels to help keep it tidy.'},
            {name: 'No. 5', value: 'Listen to staff if they request you to follow an instruction as ignoring them could lead to a warn/mute or worse. If you feel that they misunderstood or took it too far then use @ModMail to talk to a different member off staff.'},
            {name: 'No. 6', value: 'keep it relevantly pg for 13+ people so mild swearing is allowed but some might be banned.'},
            {name: 'No. 7', value: 'Please respect all members even if they are not respecting you if so use @ModMail.'},
            {name: 'No. 8', value: 'Do not use more than 75% caps in a sentence.'},
            {name: 'No. 9', value: 'If your application gets denied do not beg or retake for 30 days.'},
            {name: 'No. 10', value: 'Do not self promote without full permission.'},
            {name: 'No. 11', value: 'Do not post NSFW content as this is a 13+ discord server.'},
            {name: 'No. 12', value: 'Do not scream/play loud stuff down the mic in VCs.'},
            {name: 'No. 13', value: 'Do not mic spam e.g like keep on repeating something or ASMR.'},
            {name: 'No. 14', value: 'Try and keep VCs and Chats in english as it is hard to moderate other languages.'},
            {name: 'No. 15', value: 'Even if you are staff please follow all of these rules, if you see a staff or any member breaking these rules do not hesitate to DM @ModMail.'},
            {name: 'No. 16', value: 'If you apply for anything do not prompt us to review it or ask to be accepted as it will be an instant deny.'},
            {name: 'No. 17', value: 'Do not beg/ask for staff.'},
            {name: 'No. 18', value: 'Do not advertise or try and sell stuff to people.'},
            {name: 'No. 19', value: 'Do not mini mod.'},
            {name: 'No. 20', value: 'Do not spam chat as it clogs it up and makes it look bad.'},
            {name: 'No. 21', value: 'Do not discuss religion or politics please as it might go in the wrong direction.'}
        )
        .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Wv_Tokyo_banner.jpg/800px-Wv_Tokyo_banner.jpg')
        .setFooter('Please follow these rules as there will be punishments from mutes to permanent bans');

        message.channel.send(newEmbed);
    }


}