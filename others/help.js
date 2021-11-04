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
    .setThumbnail(` `)
    .setTitle(`**Only Bot ✨**`)
    .setDescription(`
 **|** **User Commands**
> \`invite\` - \`support\` - \`about\`
> \`ping\` - \`uptime\`


**|** **Music Commands**
> \`play\` . \`skip\` . \`skipto\`
> \`stop\` . \`volume\` . \`nowplaying\`
> \`shuffle\` . \`search\` . \`resume\`
> \`remove\` . \`queue\` . \`loop\`
> \`lyrics\` . \`radio\`


**|** **Gif Commands**
> \`boy\` . \`girl\` . \`couple\`
> \`sad\` . \`cartoon\` . \`anime\`
> \`neon\`


**|** **Links**
[Support]()
[Invite](https://discord.com/api/oauth2/authorize?client_id=727556655818080457&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
