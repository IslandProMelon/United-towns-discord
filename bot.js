//Bot Imports\\
const staff = require("./staff");

//Bot requirments\\
const discord = require('discord.js');
const client = new discord.Client();
const prefix = "!"



client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`)
    var embed = new discord.RichEmbed()
    .setColor(0x39d823)
    .addField("**Status:** ", " Online! :white_check_mark:")
    .addField("**Enabled Features** ", "Player Commands, & Staff Commands")
    client.channels.get('388484389480431617').send(embed)
    //client.user.setGame("In 1 Server", "https://www.twitch.tv/islandpro_ninja")
});
client.on('guildMemberAdd', member  => {
    let user = member
    const embed = new discord.RichEmbed()
    .setColor(0x7d00fb)
    .addField("Welcome! ", `Welcome ${user} to United Towns enjoy your time here!`)
    .addField("More Info ", "make sure to check #role-request to get you town role!")
    member.sendEmbed(embed)
    
 });
    
client.login(process.env.BOT_TOCKET);
