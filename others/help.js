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
    .setThumbnail(`https://media.discordapp.net/attachments/861399487233654834/872561176456884224/image0.png `)
    .setTitle(`**Random Help**`)
    .setDescription(`
*** <a:emoji_50:872142301789564969>  | Prefix bot ***
***__*__***
<a:emoji_180:856878164592427028> **User Commands**
\`invite\` - \`support\` - \`about\`
\`ping\` - \`prefix\` - \`uptime\`
\`tinvites\` - \`sug\` - \`roleuser\`
\`report\`

<a:emoji_181:860644268900220938> **Music Commands**
\`play\` - \`skip\` - \`skipto\`
\`stop\` - \`volume\` - \`nowplaying\`
\`shuffle\` - \`search\` - \`resume\`
\`remove\` - \`queue\` - \`loop\`
\`lyrics\` - \`radio\`

<a:9FAF7C0CF0104A2F979F1263DF55D91A:855230044258828328> **Moderation Commands**
\`ban\` - \`unban\` - \`setnick\`
\`roleadd\` - \`roleremove\` - \`vkick\`
\`setprefix\` - \`clear\` - \`close\`
\`open\` - \`senddm\`

<a:2716AA835D3841B89F82E038EEB22E82:832234494849187850> **Gif Commands**
\`boy\` - \`girl\` - \`couple\`
\`sad\` - \`cartoon\` - \`anime\`
\`neon\`

<a:806D997882224ABDBC3552C77CF6EE3C:853287594003923014> **Game Commands**
\`kiss\` - \`slap\` - \`hug\` - \`slots\`- \`weather\`

<:AddBack:829334354610225182> **Links**
[Support](https://discord.gg/AkYA68Z2gG)
[Invite](https://discord.com/api/oauth2/authorize?client_id=831212084271644733&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("<a:emoji_182:860935836240314378>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
