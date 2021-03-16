const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "invite",
  aliases: ["i"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setDescription(`

821460631239786516 [Click here](https://discord.com/api/oauth2/authorize?client_id=811298712348262470&permissions=8&scope=bot) **to invite the bot.**
`)

  
   .setColor("YELLOW");
   message.react("<:emoji_12: 821459760402399294>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
