const Discord = require(`discord.js`);
const { Client, Collection, MessageEmbed,MessageAttachment } = require(`discord.js`);
const { readdirSync } = require(`fs`);
const { join } = require(`path`);
const db = require('quick.db');
const { TOKEN, PREFIX, AVATARURL, BOTNAME, } = require(`./config.json`);
const figlet = require("figlet");
const client = new Client({ disableMentions: `` , partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login("ODgxMDA1MDY4MDMwMjEwMTA5.YSmh6A.bcmiGiAZEX7DpHDWGI9_GIk2gOw");
client.commands = new Collection();
client.setMaxListeners(0);
client.prefix = PREFIX(-);
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);

//this fires when the BOT STARTS DO NOT TOUCH

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "boy")) {
    let man = [
      "https://media.discordapp.net/attachments/786897044483604490/803870769313480714/Enes_Acar_GIF_70.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870793716858880/a_57a7f6c875e3a329b170edf177392911.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870817351368734/5-2.gif",
      "https://media.discordapp.net/attachments/721044386217197699/799354023324155974/a_7a979c79c2ea562424102c7a568cc414.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829010513966/image1.gif",
      "https://media.discordapp.net/attachments/694693923486171177/800424696499535932/hit_gif_17.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829483552838/image3.gif",
      "https://media.discordapp.net/attachments/694693923486171177/806970254621802576/35.gif",
      "https://media.discordapp.net/attachments/694693923486171177/806970237726883891/33.gif",
      "https://images-ext-1.discordapp.net/external/P5uNnqSxhGI3teuGGQImRV2rmlLEbbv-EL_rq1coXnQ/https/media.discordapp.net/attachments/711468906451304449/803236761794510869/a_845de78a829b75eb3e225e9ea7967b75.gif",
      "https://images-ext-1.discordapp.net/external/z45wVs7BqTPCOWr74xzVePHQF6QgljYD3egnyKPuRRk/https/media.discordapp.net/attachments/736281826141798402/736312944177971260/5.gif",
      "https://media.discordapp.net/attachments/737803513052266622/793385269180629002/image0.gif",
      "https://media.discordapp.net/attachments/630159060162838568/804791195377074216/a_c1cb5f987d38d8716a8a014b00f072d2.gif",
      "https://media.discordapp.net/attachments/721044386217197699/798459008489881620/chermie-32.gif",
      "https://media.discordapp.net/attachments/811847868821667861/814952491674370078/6356546.gif",
      "https://media.discordapp.net/attachments/694693923486171177/806971488229130321/efe_gif_35.gif",
      "https://media.discordapp.net/attachments/694693923486171177/800432445308010516/hit_gif_23.gif",
      "https://media.discordapp.net/attachments/737803513052266622/798099721985851432/image0.gif",
      "https://images-ext-2.discordapp.net/external/nBwcGAokNyU61mdCjSZJWDnC8KlcY978JrE2CTIqJOw/https/media.discordapp.net/attachments/761565276243623937/786556038605701160/a_aa30ade4ea0d65486fc62910e0b97682.gif",
      "https://media.discordapp.net/attachments/737803513052266622/799650053358747658/image0.gif",
      "https://media.discordapp.net/attachments/659108282291585055/805505499848114226/image0.gif",
      "https://media.discordapp.net/attachments/694693923486171177/800425731548774451/gif_265.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804219672513478706/Lenora_36.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220384899498064/Lenora_28.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220394697392158/Lenora_33.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804315371271749662/image0-20.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968359572930580/ALANIS_MAN_GIF_156.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968381816111124/image0-5.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804760463044640808/ALANIS_MAN_GIF_99.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870704999202836/ENES_ACAR_GIF_104.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870737941135421/ENES_ACAR_GIF_15.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870682479067166/ENES_ACAR_GIF_135.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} Boy Gif  `,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});


client.on("message", message => {
  if (message.content.startsWith(PREFIX + "girl")) {
    let girl = [
      "https://media.discordapp.net/attachments/786897045436366849/804968189892755456/image2-1.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968223577604126/gif472.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968231794245642/rexsin_212.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968258859827210/pintrst___luri_4.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804983128527077387/a_177ddfe86ad32b68be6200f007682136.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008600334073866/3WIu.gif",
      "https://media.discordapp.net/attachments/787757651752779826/800849143341514772/a_16743dfad984f574da0b7bc2f9a0b07f.gif",
      "https://images-ext-1.discordapp.net/external/ujA262B7Hy05-od9uoou-aHhiEYGY34Zl75a0JHgfJ8/https/media.discordapp.net/attachments/711468868924604537/803247458871803934/gif-353.gif",
      "https://images-ext-2.discordapp.net/external/yAmdAMaUicaOsMBgZDe9oQoah7lLDjHRzLXsd-wJuA4/https/media.discordapp.net/attachments/711466145764343899/803290982531465246/a_c511e0571366f78eb91e16b7c4736734.gif",
      "https://media.discordapp.net/attachments/742107775475253259/821413314068348988/image0.gif",
      "https://media.discordapp.net/attachments/742107775475253259/818627981580566568/image4.gif",
      "https://media.discordapp.net/attachments/694694493525377035/737021018333249546/Lorie10.gif",
      "https://media.discordapp.net/attachments/742107775475253259/820847199222366228/image1.gif",
      "https://media.discordapp.net/attachments/787757651752779826/800848548798791680/image8-1.gif",
      "https://media.discordapp.net/attachments/742107775475253259/818627965750345748/image4.gif",
      "https://media.discordapp.net/attachments/742107775475253259/766092296235909161/image3.gif",
      "https://media.discordapp.net/attachments/742107775475253259/813880754219122719/image0.gif",
      "https://media.discordapp.net/attachments/742107775475253259/819151727461662720/image0.gif",
      "https://images-ext-2.discordapp.net/external/d3lpB0Bqf-qp6fQnOf4iNn6HMrAOsb-EYXf6lzY9BLw/https/media.discordapp.net/attachments/711468868924604537/802157124594434098/a_2fa3d6b37927ad11fd001ce8d9558cec.gif",
      "https://images-ext-1.discordapp.net/external/REnwN3d9Oz1t8u0ZBav_cgnZtoFxXjZe0-KPEJb_SL8/https/media.discordapp.net/attachments/694695166895849562/797497990763511818/20210109_190245.gif",
      "https://images-ext-2.discordapp.net/external/831_ol2wWVvX1n378qkmkQxAJoUVmnDbOgm-O3nktzo/https/media.discordapp.net/attachments/711466145764343899/803298402498117638/a_99da7a830c2e4a2e09705e9d15d70436.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805370008330436648/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008566439641128/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804681217022099466/a_3c85d4517fbaf4f750d344820b49c076.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804682936615829504/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804314115601596426/ALANIS_WOMAN_GIF_176.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804280612227383316/ALANIS_WOMAN_GIF_138.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} Girl Gif `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "couple")) {
    let loves = [
      "https://media.discordapp.net/attachments/608711480346542102/782233713538498600/hit_gif_5.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782286421020508170/image0_1.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782284851570147358/image0-1-4.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782406047473467422/image0.gif",
      "https://media.discordapp.net/attachments/737807251825360977/805157325647904788/image3.gif",
      "https://images-ext-2.discordapp.net/external/XNfBHzKy7buK63kTXnhneedCZesXjDt4YzXc4aHRyP0/https/media.discordapp.net/attachments/711465242798063706/800617858567634973/image0.gif",
      "https://media.discordapp.net/attachments/608711480346542102/814490854554468352/couple_4.gif",
      "https://media.discordapp.net/attachments/694694675679936585/801547963507802112/a_56138fd67f8998f8a1e77747e6d82541.gif",
      "https://images-ext-1.discordapp.net/external/58Mz8ecPw4jYUViFOE7NaHjYUJmOhFWwbW6YKIWBCt8/https/media.discordapp.net/attachments/761565272942968852/767126026123345960/luisa71.gif",
      "https://media.discordapp.net/attachments/694694675679936585/800010113834156082/image0-10.gif",
      "https://images-ext-1.discordapp.net/external/C-RvC0mBX56TXehO28nY1NcVwENPHDRbhl3SeIbeB_4/https/media.discordapp.net/attachments/711465242798063706/801763419916599326/couples_142._1.gif",
      "https://media.discordapp.net/attachments/787757651752779826/800870670174388244/image2.gif",
      "https://media.discordapp.net/attachments/694694675679936585/800743146614947920/hit_gif_15.gif",
      "https://media.discordapp.net/attachments/672961356412092416/809899257511018566/jaguarcouple_68.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782148760997593098/a_8bc52b6080ce3079988c6e49f84c4b03.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782445443665625128/ezgif-7-2032ed99845d.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782196955488321556/a_637b8e2042d540a1e5e28282e3fe5cc7.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803307812608409600/image0.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869330005688340/a_130ce69bc8c1f06d917ee668f7051b64.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869344266321931/dans4.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869587988152340/gif.13.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869653641854996/20210105_223539.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869660814376960/a_09fbaba0301c6db194af2f0c6d2a6a93.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804188805204410378/2.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804337804179275776/16-10-27-tenor.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759240451424256/Lrows_Gif_25.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759252899594259/ciftler8.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} ❤️  Couple photos  `,
          image: {
            url: loves[Math.floor(Math.random() * loves.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "sad")) {
    let sads = [
      "https://media.discordapp.net/attachments/786897045952790550/798719676795715614/Zeyrox_43.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435191323852820/luisa1-1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435254011920404/a_caf4fdc4f3e516fcabec0022078c38ab.gif",
      "https://media.discordapp.net/attachments/786897045952790550/804040753072439326/038842117446a0c76a922d23727942b1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581071079768074/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581004424544256/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580974975549450/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580943627976704/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802930927784820766/Cedric_Anime_Gif_81.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802722301984243712/a_66f26e072e89a58c1879c6fa27744bd7.gif",
      "https://media.discordapp.net/attachments/786897045952790550/801054305569865778/uzgun-4.gif",
      "https://media.discordapp.net/attachments/786897044483604490/806288916160315422/image0.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} **SAD GIFS**`,
          image: {
            url: sads[Math.floor(Math.random() * sads.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "anime")) {
    let man = [
      "https://media.discordapp.net/attachments/608711485849337856/855998757451989002/image0-2.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856002084461084682/image0-4.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856046302302044190/RAGE.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856064006099959838/sword_in.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856064373285322772/brur.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856078080513671218/main-qimg-9b85288a288ad40533d86370edc2f861.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856082677124038706/243b546d229fecd75d49dfa96fa7d3af.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856083458426273852/1359536E-4B2C-46FD-B4C0-991DEDD90DB6.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856083601376673812/tumblr_n8afdsLdj31tgrxjfo1_400.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855944540519399454/a_ebfe24c4bd0d9ccfdfbb26e9c211616b.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855941510633619496/a_5079b0989b9b5957008426c949ada083.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855934815643762718/SPOILER_bcfd0735832eb9c8908fb09b3bbd76f7.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855924849976541214/a_2b58061e423d0ed65d2e1a3e77ed61f8.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855924705320239114/Anime_PP_Gif_64.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855924615573143582/Anime_PP_Gif_46.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855924558700085248/a_3bf21d37deefcf4cd1dcab780aab846c.gif",
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} ANIME GIFS photos  `,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});


client.on("message", message => {
  if (message.content.startsWith(PREFIX + "cartoon")) {
    let girl = [
      "https://media.discordapp.net/attachments/755169627872428134/855635705242058752/g0yPLFTYpr283dUJBs.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855792117719498752/video0.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855557742349516800/a_b027a915823dbd68a6648b5349421ae6.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855556838929203200/p_22.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855556777230860288/Miraculous_Love_Square.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855556717030014976/Chat_noir_Adrien_one_shots_-_Date_Night_Chat_Noir_X_Reader.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855377737668624384/a_f2755cac40daeae8d10949c7dd36b90e.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855377707852365844/49e7d6354158e18ba31dbc337d5c7e66.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854647156845445140/image0-1.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854446592169082940/1.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854406402884501534/a_6f8657f88ea0baf2cb1535e0e7d1099c.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854249305011257364/21.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854249288825831455/17.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854249260668289044/12.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854249216691535882/6.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854249208872435732/4.gif",
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} CARTOON GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on('message',message => { 

 

if(message.content.startsWith(PREFIX+ 'ban')) { 

let args = message.content.split(" ").slice(1) 

if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('bbura to natwane am frmana anjam bdait') 

 

let Ban = message.mentions.members.first(); 

let hokar = args.slice(1).join(" "); 

if(!args[0]) return message.channel.send('tkaya kasek mention bka bo ban krdn') 

if(!Ban) return message.channel.send(`${args[0]} am kasa bwny niya la server`) 

if(!hokar) return message.channel.send('hokarek dyare bka') 

 

if(!Ban.bannable) { 

return message.channel.send('to natwane am kasa ban bkai') 

 

} 

 

if(Ban.bannable) { 

 

const embed = new Discord.MessageEmbed() 

.setTitle('Ban') 

.setColor('RANDOM') 

.addField('kase ban kraw', Ban) 

.addField('ban kra la layan', message.author) 

.addField('ba hokare', hokar) 

.setFooter('') 

message.channel.send(embed) 

 

Ban.ban(); 

}}})


client.on("guildCreate", guild => {
  let channel = client.channels.cache.get("861399446008102923");
  let embed = new MessageEmbed().setColor("#146DF6")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `✅ Join Server`)
  .addField("🔠 **Server Name**", `${guild.name}`)
  .addField("👑 **Server Owner**", `${guild.owner}`)
  .addField("🆔 **Server Id**", `${guild.id}`)
  .addField("👥 **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});


client.on("guildDelete", guild => {
  let channel = client.channels.cache.get("861399487233654834");
  let embed = new MessageEmbed()
  .setColor("#146DF6")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `❎ Left Server`)
  .addField("❔ **Server Name**", `${guild.name}`)
  .addField("👑 **Server Owner**", `${guild.owner}`)
  .addField("🆔 **Server Id**", `${guild.id}`)
  .addField("👥 **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});

const channelid = "860205351819411456"    //id channele vc
client.on("ready", () => {
    const channel = client.channels.cache.get(channelid);
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("Successfully connected.");
    }).catch(e => {
        console.error(e);
    });
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "neon")) {
    let girl = [
      "https://media.discordapp.net/attachments/755890505681731714/856207944953233439/a_08ca790f778a7ee65184020eb2c85124.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856212748844007454/image4.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856203154143313970/hhhh.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856200984888082472/Comp_105.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856145244059729920/uurekzneon_17.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856138999771693076/a_0163926dade85d15a4c7e9f90bd9905c.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856137212385951744/image0.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856134635972591636/Comp_22.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856094705813422090/a_a46b7692563509a4a7332280f8aed01f-1.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856066337788133377/neon_1-1.gif",
      "https://media.discordapp.net/attachments/767332506101219348/781553930323755068/JustLethia.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856039171788767292/sol._of.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856034861047480320/Nice_gif_pfp.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855995485688954900/a_4f85b11851dd2fd40c275af63e24ca9c.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855901403768029255/Gif8.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855894776896159804/a_622822eb42bf3c49c83f342290a304b6.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855841642979786752/826380519012565012.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855788419716218890/image0.gif",
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} NEON GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on('message',  (message) => {
        if(message.content.startsWith(PREFIX + "hug")) {
  let user = message.mentions.users.first() 
  if (!user) return message.reply('mention someone to Hug')
 
 
  let hugs = [
    "https://media.discordapp.net/attachments/738277612039962688/775010008437096508/image0.gif"
  ,"https://media.discordapp.net/attachments/738277612039962688/775010008676433945/image1.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010008823103508/image2.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010008982224896/image3.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009151045692/image4.gif",
  "https://images-ext-1.discordapp.net/external/4enFwioluJ2wUTxGTx3YhHg_hcVxZcSnVDiJk9-48Ps/http/i.imgur.com/cLHRyeB.gif",
  "https://images-ext-2.discordapp.net/external/dI8V6HMg-HD1jC6QuJLrBJe9S5z3uXwXD8epc3lg_m4/http/i.imgur.com/FOdbhav.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009322094602/image5.gif",
  "https://images-ext-2.discordapp.net/external/l2UT2UeLq1KeBWae7c33nm9aKVvnI07iimUxeSkpyL0/http/i.imgur.com/K52NZ36.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009578340382/image6.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009796575262/image7.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009972867082/image8.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010010152566804/image9.gif"
 
 
  ];
 
  const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username} Hugs ${user.username}!`)
 
.setImage(hugs[Math.floor(Math.random() * hugs.length)])
.setFooter('Random Bot ')
message.channel.send(embed)
 
        }})

client.on('message',  (message) => {
        if(message.content.startsWith(PREFIX + "slap")) {
  let user = message.mentions.users.first();
  if (!user) return message.reply('mention someone to Slap')
  let slaps = [
   "https://media.discordapp.net/attachments/738277612039962688/775009108402372608/image0.gif",
    "https://media.discordapp.net/attachments/738277612039962688/775009109166522428/image1.gif"
    ,"https://media.discordapp.net/attachments/738277612039962688/775009109383577621/image2.gif",
    "https://media.discordapp.net/attachments/738277612039962688/775009109585821746/image3.gif",
    "https://media.discordapp.net/attachments/738277612039962688/775009109749006406/image4.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775009110177349692/image6.gif",
    "https://media.discordapp.net/attachments/738277612039962688/775009110373433364/image7.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775009110525345797/image8.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775009110663233576/image9.gif"
  ];
  const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username} Slap ${user.username}!`)
 
.setImage(slaps[Math.floor(Math.random() * slaps.length)])
 
message.channel.send(embed)
        }})

client.on('message',  (message) => {
        if(message.content.startsWith(PREFIX + "kiss")) {
  let user = message.mentions.users.first();
  if (!user) return message.reply('mention someone to Kiss')
  var kiss = [
"https://media.discordapp.net/attachments/738277612039962688/775017819980431360/image0.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820161179648/image1.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820445868032/image2.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820643262465/image3.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820853239808/image4.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017821129932860/image5.gif",       
"https://media.discordapp.net/attachments/738277612039962688/775017821611753472/image7.gif",
"https://media.discordapp.net/attachments/725046590242291763/775020613109678090/image0.gif",  
 
  ];
 
  const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username} kiss ${user.username}!`)
 
.setImage(kiss[Math.floor(Math.random() * kiss.length)])
 
message.channel.send(embed)
        }})

client.on('message', async message=>{
  if(message.content.startsWith(PREFIX +'unban')){
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('bbura to natwane am frmana anjam bdait')
    let args = message.content.split(" ").slice(1)
if(!args[0]) return message.channel.send('tkaya kasek mention bka bo unban krdn')
const reason = args[1] || "be hokar"
let unban = await client.users.fetch(args[0])
 
message.guild.members.unban(unban,reason)
const qala = new Discord.MessageEmbed()
 
  .setTitle('unBan')  
    .addField('kase unban kraw ',unban)
 
.addField('un ban kra la layan',message.author)
 
.addField('ba hokare',reason)
.setFooter('')
message.channel.send(qala)
 
  }})

client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "vkick")) { 
   if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("pewist ba role bo anjamdane amkara");
    }
 
    if (!message.mentions.members.first())
      return message.channel.send(
        `kasek mention bka bo kick voice!`
      );
 
    let { channel} = message.mentions.members.first().voice;
 
    if (!channel)
      return message.channel.send(`am kasa la voice niya`);
 
    message.mentions.members.first().voice.kick();
 
    message.channel.send(`kick kra la voice !`)
  }
})

client.on("message", message => {
if(message.content.startsWith(PREFIX + "setnick")){
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
var user = message.mentions.members.first();
var args = message.content.split(" ").slice(2);
var nick = args.join(" ");
if(!user || !args) return message.channel.send(`
\`\`\`js
Command: setnick
 
Nickname:
+setnick (name)
+setnick (user}) (nick)
 
\`\`\`
 
`);
message.guild.member(user.user).setNickname(`${nick}`);
message.channel.send(`Successfully changed **${user}** nickname to **${nick}** `);
}
});

client.on("message", msg => {
if(msg.content.startsWith(PREFIX +"clear")) {
 let args = msg.content.split(" ").slice(1);
 if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You can't use this command!");
        if(!args[0]) return msg.channel.send("Specify how many messages you want to delete.");
        msg.delete();
        msg.channel.bulkDelete(args[0]).catch(e => { msg.channel.send("You can only delete 100 messages at once.")});
        msg.channel.send(`Successfully deleted \`${args[0]} messages\``).then(m => m.delete({ timeout: 5000 }));
}})

client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "roleadd")) { 
 
if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("pewist ba role bo anjamdane amkara");
    }
    if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("rolem niya tawakw am kara bkam");
    } 
    let qawrma = message.mentions.members.first();
    if(!qawrma) return message.reply(`kasek mention bka !`)
    let shla = message.mentions.roles.first();
    if(!shla) return message.reply(` rolek mention bka `)
 
      const embed = new Discord.MessageEmbed()
 
      .setColor("RANDOM")
      .setDescription(`Done changed role for ${qawrma.user.username} added ${shla}`)
 
      await message.channel.send(embed)
 
      qawrma.roles.add(shla)
 
  }
})

client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "roleremove")) { 
 
if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("pewist ba role bo anjamdane amkara");
    }
    if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("rolem niya tawakw am kara bkam");
    } 
    let qawrma = message.mentions.members.first();
    if(!qawrma) return message.reply(`kasek mention bka !`)
    let shla = message.mentions.roles.first();
    if(!shla) return message.reply(` rolek mention bka `)
 
      const embed = new Discord.MessageEmbed()
 
      .setColor("RANDOM")
      .setDescription(`Done changed role for ${qawrma.user.username} removed ${shla}`)
 
      await message.channel.send(embed)
 
      qawrma.roles.remove(shla)
 
  }
})

client.on("message", async message => {
  if (message.content.startsWith(PREFIX + "tinvites")) {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply(" Error : ` Server Command `");
 
    var invites = await message.guild.fetchInvites();
    invites = invites.array();
    invites, "uses", { reverse: true };
    let possibleInvites = ["User Invited |  Uses "];
    invites.forEach(i => {
      if (i.uses === 0) {
        return;
      }
      possibleInvites.push([
        "\n " + "<@" + i.inviter.id + ">" + "  :  " + i.uses
      ]);
    });
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField("Top Invites.", `${possibleInvites}`);
 
    message.channel.send(embed);
  }
});

client.on('message', function(message) {
    if(message.content.startsWith(PREFIX  + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
   let mUser = message.mentions.members.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.MessageEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("If the reporting was a joke, the person reporting would be subject to penalties")
message.channel.send(Rembed)
message.channel.send("Sended Your report to  report Channel").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

client.on("message", message => {
  if (!message.content.startsWith(PREFIX)) return;
  if (!message.channel.guild)
    return 
  let command = message.content.split(" kill ")[0];
  command = command.slice(PREFIX.length);
  if (command === "Rk") {
    var sabotage = message.mentions.users.first();
    if (sabotage == message.author)
      return message.reply(`**No please menition user**`);
    if (sabotage === client.user) return message.reply(`**Why?**`);
    if (sabotage < 1) {
      message.delete();
      return message.channel.sendMessage(
        "Put something to kill like mention your username or use an emoji"
      );
    }
    if (!sabotage)
      return message.channel.send(`Please Mention A Member to Kill :warning:`);
    message.channel.send("▄︻̷̿┻̿═━一 ${sabotage").then(msg => {
      msg.edit('    **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 1000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 2000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 3000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 4000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <:slots2:421472583347732511> <:slots1:421472583410515969> <:slots3:421472582924238869>                                                                               `|         ||         |` ');
      }, 5000);
      msg.delete(6000);
      message.delete();
    });
    message.channel
      .send("**** The crime has been successfully hidden 🕳 **")
      .then(msg => msg.delete(7000));
  }
});

client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "roleuser")) { 
 
let member_r = message.mentions.members.first() || message.member,
  user = member_r.user;
let bawan= new Discord.MessageEmbed()
  .addField('this member have this Roles:', member_r.roles.cache.map(r => `${r}`).join(', '), true)
 
message.channel.send(bawan)
}})

let Prefix = "+"; 

client.on("message", async message => {
let prefix2 = await db.fetch(`prefix_${message.guild.id}`);
if (prefix2 === null) prefix2 = Prefix;
const prefix = prefix2;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();
if (cmd === "prefix" || cmd === "setprefix") {
if (!message.guild) return;
if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
return message.reply("**- You Don't Have `ADMINISTRATOR` Permission.**");
if (!args[0]) return message.channel.send(`**- Please tell me what a prefix !!**`);
if (args[0].length > 3) {
  return message.channel.send("**Please tell me prefix under 3 numbers!!**")
}
db.set(`prefix_${message.guild.id}`, args[0]);
message.channel.send(`**✅ Done, Set New Prefix \`[${args[0]}]\` From Your Server.**`);
}
if (cmd === "test") { // كود test للتجربة
message.reply("**Set Prefix Working ✅**")
}
});

 client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "sug")) {
  let args = message.content.split(" ").slice(1)
 
    if(!args.length) {
      return message.channel.send("Please Give the Suggestion")
    }
 
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"))
 
    if(!channel) {
      return message.channel.send("there is no channel with name - suggestions")
    }
 
 
    let embed = new Discord.MessageEmbed()
    .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
 
 
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
 
 
 
    message.channel.send("Sended Your Suggestion to  Suggestions Channel")
 
  }
})

client.on('message', msg => {
 if (msg.content.startsWith(PREFIX + 'senddm')) {
 
   if(!msg.member.hasPermission('ADMINISTRATOR')) return
   let args = msg.content.split(' ').slice(1)
 
 
      if (!args[0]) return msg.channel.send(``)
      if (!args[1]) return msg.channel.send(``)
      let alpha = msg.mentions.members.first()
      if (!alpha) return msg.channel.send()
      let alphaEmbed = new Discord.MessageEmbed()
      .setTitle('bawan is here')
      .setDescription(args.join(" "))
 
      client.users.cache.get(`${alpha.id}`).send(alphaEmbed)
      msg.channel.send('```DONE```')
    }
});


  
  client.on("message", message => {
  if (message.content === PREFIX + "open") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You dont have Perms `MANAGE CHANNELS`:x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: true
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Channel unhided**")
      .addField("Guild name", message.guild.name)
      .addField("Channel", message.channel.name)
      .addField("Moderation", `<@${message.author.id}>`, true)
      .setColor("RANDOM");
    message.channel.send(embed).then(bj => {
      bj.react("🔓");
    });
  }
});

client.on("message", message => {
  if (message.content === PREFIX + "close") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You Dont Have Perms `MANAGE CHANNELS` :x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: false
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Channel hided**")
      .addField("Guild name", message.guild.name)
      .addField("Channel", message.channel.name)
      .addField("Moderation", `<@${message.author.id}>`, true)
      .setColor("RANDOM");
    message.channel.send(embed).then(bj => {
      bj.react("🔒");
    });
  }
});


client.on(`ready`, () => {	
//////////////

////////
   
   ///////////////////////////////
    ////////////IFCHEMPTY//////////
        //remove everything in between those 2 big comments if you want to disable that the bot leaves when ch. or queue gets empty!
        setInterval(() => { 
          let member;
        client.guilds.cache.forEach(async guild =>{
        await delay(15);
          member = await client.guilds.cache.get(guild.id).members.cache.get(client.user.id)
        //if not connected
          if(!member.voice.channel)
          return;
        //if alone 
        if (member.voice.channel.members.size === 1) 
        { return member.voice.channel.leave(); }
      });
      
    client.user.setActivity(` ${PREFIX}help - Random Bot Is here for fun`, { type: "WATCHING"});
    client.user.setActivity(` ${PREFIX}help | Users ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)},`, { type: "WATCHING"});
   
  
      }, (5000));
      ////////////////////////////////
      ////////////////////////////////
    figlet.text(`${client.user.username} ready!`, function (err, data) {
      if (err) {
          console.log('Something went wrong');
          console.dir(err);
      }
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
      console.log(data)
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
    })
   
});
//DO NOT TOUCH
//FOLDERS:
//Admin custommsg data FUN General Music NSFW others
commandFiles = readdirSync(join(__dirname, `Music`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `Music`, `${file}`));
  client.commands.set(command.name, command);
}
commandFiles = readdirSync(join(__dirname, `others`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `others`, `${file}`));
  client.commands.set(command.name, command);
}
//COMMANDS //DO NOT TOUCH
client.on(`message`, async (message) => {
  if (message.author.bot) return;
  
  //getting prefix 
  let prefix = await db.get(`prefix_${message.guild.id}`)
  //if not prefix set it to standard prefix in the config.json file
  if(prefix === null) prefix = PREFIX;

  //information message when the bot has been tagged
  if(message.content.includes(client.user.id)) {
    message.reply(new Discord.MessageEmbed().setColor("RANDOM").setAuthor(`${message.author.username}, My Prefix is ${prefix}, to get started; type ${prefix}help`, message.author.displayAvatarURL({dynamic:true})));
  } 


//An about announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}about`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Random Bot About", "https://media.discordapp.net/attachments/851565209743130654/860933971977961481/image0.jpg")
    .setThumbnail(`https://media.discordapp.net/attachments/851565209743130654/860933971977961481/image0.jpg `)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`

[{Support}](https://discord.gg/YMjsqqp8Gw)

[{Invite}](https://discord.com/api/oauth2/authorize?client_id=831212084271644733&permissions=8&scope=bot)

> <a:devv:871813217897316353> **(Owner Bot)** 
> <a:Online:872897515165466764> <@!792754963759235074>

> <a:IconStatus:872908170568290365> **(Status)**
> <:IconStatusOnline:872939264722206731> Online : Plying

> <a:emoji_21:806556915798376497> **(Prefix)**
> <a:FBBE600B13DB4F5986B4D0AF89247091:871811080148639794> ***__R__***


`)

    //send the Message
    message.channel.send(embed)
    message.react("<a:53EC4B02339C41BF9A83F5597463DBEB:853287599720235029>")
  } 

//An suuport announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}support`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription (`
{Links}

[{Support}](https://discord.gg/YMjsqqp8Gw)
-
[{Invite}](https://discord.com/api/oauth2/authorize?client_id=831212084271644733&permissions=8&scope=bot)`)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setImage(`https://media.discordapp.net/attachments/851565209743130654/860938919759446056/image0.gif`)
    .setTitle(`**{Support  Random Bot}**`) 
    .setThumbnail(`https://media.discordapp.net/attachments/851565209743130654/860933971977961481/image0.jpg `)
    .setTimestamp()
    
    //send the Message
    message.channel.send(embed)
    message.react("<:emoji_4:822203026776391711>")
  }

  //An embed announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}embed`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(saymsg)
    //delete the Command
    message.delete({timeout: 300})
    //send the Message
    message.channel.send(embed)
  }


//command Handler DO NOT TOUCH
 const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
 if (!prefixRegex.test(message.content)) return;
 const [, matchedPrefix] = message.content.match(prefixRegex);
 const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
 const commandName = args.shift().toLowerCase();
 const command =
   client.commands.get(commandName) ||
   client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
 if (!command) return;
 if (!cooldowns.has(command.name)) {
   cooldowns.set(command.name, new Collection());
 }
 const now = Date.now();
 const timestamps = cooldowns.get(command.name);
 const cooldownAmount = (command.cooldown || 1) * 1000;
 if (timestamps.has(message.author.id)) {
   const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
   if (now < expirationTime) {
     const timeLeft = (expirationTime - now) / 1000;
     return message.reply(
      new MessageEmbed().setColor("RANDOM")
      .setTitle(`Please wait\` \`${timeLeft.toFixed(1)} seconds\` \`before reusing the\` \`${prefix}${command.name}\` `)    
     );
   }
 }
 timestamps.set(message.author.id, now);
 setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
 try {
   command.execute(message, args, client);
 } catch (error) {
   console.error(error);
   message.reply( new MessageEmbed().setColor("RANDOM")
   .setTitle(`There was an error executing that command.`)).catch(console.error);
 }


});
function delay(delayInms) {
 return new Promise(resolve => {
   setTimeout(() => {
     resolve(2);
   }, delayInms);
 });
}




client.on('message', message => {
if(message.content.startsWith("Rslots")) {
  let slot1 = ['<:emoji_61:872141800482160641>', '<:emoji_61:872141800482160641>', '<:emoji_61:872141800482160641>', '<:emoji_61:872141800482160641>', '<:emoji_60:872141904383455272>', '<:emoji_60:872141904383455272>', '<:emoji_60:872141904383455272>', '<:emoji_60:872141904383455272>'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "you won <a:kass:872897079305986108>"
  } else {
    we = "lost <a:offline:872897321120186399>"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});



const bawan = ["792754963759235074"] //id xot dane
 
const bawanprefix = "R";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
 
 
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!bawan.includes(message.author.id)) return;
 
 
    if (message.content === (bawanprefix + "bro")) {
    message.guild.leave();        
 message.channel.send('```DONE```')
 
 
    } 
 
})
 
 
})



client.on("guildCreate" , DarkMan => {

  if(DarkMan.memberCount < 78 ){

    console.log(`  name ( ${DarkMan.name} ) zhmaray memberakan ( ${DarkMan.memberCount}) created by DarkMan`)//by DarkMan

    DarkMan.leave();

  }

})



//Bot coded by Monty#6985 
