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
    .setThumbnail(`https://cdn.discordapp.com/attachments/811334922786177035/821692647096713216/PicsArt_03-14-11.44.59.png `)
    .setTitle(`**Rayal Help**`)
    .setDescription(`

**User Commands**
>>>>>>>>>>>>>
\`!invite\` -- \`!support\` -- \`!about\`
\`!ping\` -- \`!prefix\` -- \`!uptime\`
<a:music:813460704031145986>**Music Commands**<a:music:813460704031145986>
>>>>>>>>>>>>>>
<a:dark:813714900777959444>\`!play\` -- \`!skip\` -- \`!skipto\`
<a:dark:813714900777959444>\`!stop\` -- \`!volume\` -- \`!nowplaying\`
<a:dark:813714900777959444>\`!shuffle\` -- \`!search\` -- \`!resume\`
<a:dark:813714900777959444>\`!remove\` -- \`!queue\` 
<a:dark:813714900777959444>\`!loop\` -- \`!lyrics\` -- \`!radio\`
**Filter Commands**
>>>>>>>>>>>>>
\`!filter bassboost\` -- \`!filter 8D\`
\`!filter vaporwave\` -- \`!filter tremolo\`
\`!filter phaser\` -- \`!filter subboost\`
\`!filter nightcote\` -- \`!filter pulsator\`
\`!filter vibrato\` -- \`!filter clear\`
\`!filter surrounding\`
**{[<a:links:813729922643263558>[Links}**
>>>>>>>>>
[{Support}](https://discord.gg/mwJmT7wkwn)
[{Invite}](https://discord.com/api/oauth2/authorize?client_id=811298712348262470&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("PURPLE");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
