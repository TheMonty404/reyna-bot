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
> <a:emoji_180:856878164592427028>  **User Commands**
> **__invite - support- about - ping - prefix - uptime - tinvites - sug - roleuser - report__**

> <a:emoji_102:871813008471507004> **Music Commands**
> **__play - skip - skipto - stop - volume - nowplaying  shuffle - search  - loop - lyrics -radio__**

> <a:FBBE600B13DB4F5986B4D0AF89247091:871811080148639794>  **Moderation Commands**
> **__ban - unban - setnick - roleadd - roleremove - vkick - setprefix - clear - close - open - senddm__**

> <a:emoji_11:845102475740577792> **Gif Commands**
> **__boy - girl - couple - sad - cartoon - anime - neon__**

> <a:kass:872897079305986108> **Game Commands**
> **__kiss - slap - hug - slots - weather__**
> <a:emoji_103:871813076964507710> **Links**
> [Support](https://discord.gg/AkYA68Z2gG)
> [Invite](https://discord.com/api/oauth2/authorize?client_id=831212084271644733&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("<a:emoji_182:860935836240314378>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
