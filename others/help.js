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
    .setThumbnail(`https://cdn.discordapp.com/attachments/809730564088135704/821648013725925427/output_HEQpRo.gif `)
    .setTitle(`**Rayal Help**`)
    .setDescription(`

**User Commands**
============
\`%invite\` - \`%support\` - \`%about\`
=======================
\`%ping\` - \`%prefix\` - \`%uptime\`
=======================
**Music Commands**
=============
\`%play\` - \`%skip\` - \`%skipto\`
=======================
\`%stop\` - \`%volume\` - \`%nowplaying\`
=======================
\`%shuffle\` - \`%search\` - \`%resume\`
=======================
\`%remove\` - \`%queue\` - \`%filter\`
=======================
\`%loop\` - \`%lyrics\` - \`%radio\`
=======================

**{Links}**
[{Support}](https://discord.gg/mwJmT7wkwn)
[{Invite}](https://discord.com/api/oauth2/authorize?client_id=811298712348262470&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("PURPLE");
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
