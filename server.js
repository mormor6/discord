const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json")
bot.on('ready', () => {
  
  console.log(`Logged in as ${bot.user.tag}!`);
  
});
bot.on('ready', function() {
      setInterval(async () => {
    const statuslist = [
      `${bot.users.size} users | ${bot.guilds.size} guilds`,
      `MCore By Mor#4638`
    ];
    const random = Math.floor(Math.random() * statuslist.length);

    try {
      await bot.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "PLAYING"
        },
        status: "online"
      });
    } catch (error) {
      console.error(error);
    }
  }, 10000);
});

bot.on('guildMemberAdd', member => {
let logChannel = member.guild.channels.find('name', '「」join-leave');

  let logEmbed = new Discord.RichEmbed()
  .setAuthor("MCore | Welcomer") 
  .setDescription(member.user.username + "``join`` to the server. (" + member.user.id + ")")
  .setColor('#61fc4a')
  .setFooter("MCore | Mor#4638", member.user.displayAvatarURL)
  .setTimestamp()
  logChannel.send(logEmbed);
      let role = member.guild.roles.find("name", "No Rank");
    member.addRole(role).catch(console.error);
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    member.guild.channels.get('556076758760423425').setName(`「👥」Member Count: ${humans}`)
    let bots = member.guild.members.filter(m => m.user.bot).size;
    member.guild.channels.get('556076772140253184').setName(`「🤖」Bot Count: ${bots}`)
  
})
bot.on('guildMemberRemove', member => {
let logChannel = member.guild.channels.find('name', '「」join-leave');

  let logEmbed = new Discord.RichEmbed()
  .setAuthor("MCore | Welcomer") 
    .setDescription(member.user.username + "``leave`` the server. (" + member.user.id + ")")
  .setFooter("MCore | Mor#4638", member.user.displayAvatarURL)
  .setColor('#fc4a4a')
  .setTimestamp()
  logChannel.send(logEmbed);
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    member.guild.channels.get('556076758760423425').setName(`「👥」Member Count: ${humans}`)
    let bots = member.guild.members.filter(m => m.user.bot).size;
    member.guild.channels.get('556076772140253184').setName(`「🤖」Bot Count: ${bots}`)
});
bot.on("guildCreate", guild => {
  //  when the bot joins a guild.

  let Create = bot.channels.get('556033279275565078')

  let logEmbed = new Discord.RichEmbed()
  .setAuthor("MCore | Logs") 
    .setDescription(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`)
  .setFooter("MCore | Mor#4638")
  .setColor('#61fc4a')
  .setTimestamp()
  Create.send(logEmbed);
});

bot.on("guildDelete", guild => {
  // when the bot is removed from a guild.
  
  let Create = bot.channels.get('556033279275565078')

  let logEmbed = new Discord.RichEmbed()
  .setAuthor("MCore | Logs") 
    .setDescription(`I have been removed from: ${guild.name} (id: ${guild.id})`)
  .setFooter("MCore | Mor#4638")
  .setColor('#fc4a4a')
  .setTimestamp()
  Create.send(logEmbed);
});

  bot.login(config.token);