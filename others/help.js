const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://media.discordapp.net/attachments/795711131901493268/815593900588269588/image0.png `)
    .setTitle(`**July Help**`)
    .setDescription(`

**User Commands**
\`m!invite\` - \`m!support\` - \`m!about\`
\`m!ping\` - \`m!prefix\` - \`m!uptime\`

**Music Commands**
\`m!play\` - \`m!skip\` - \`m!skipto\`
\`m!stop\` - \`m!volume\` - \`m!nowplaying\`
\`m!shuffle\` - \`m!search\` - \`m!resume\`
\`m!remove\` - \`m!queue\` - \`m!filter\`
\`m!loop\` - \`m!lyrics\` - \`m!radio\`

**Links**
[Support](https://discord.gg/myQneeTbcz) - [Invite](https://discord.com/api/oauth2/authorize?client_id=793214259932561419&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("YELLOW");
   message.react("<:emoji_74:815251307635015731>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
