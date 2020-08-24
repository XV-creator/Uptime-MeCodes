module.exports={
	name:'help-me',
	aliases:[],
	cooldown:0,
	execute(message,args){
    const Discord=require("discord.js");
    const embed = new Discord.MessageEmbed()
    .setTitle("Help Command")
    .setColor("#00BFFF")
    .addField("Commands:"`!uptime , !delete , !projects , !help-me`)
    message.channel.send(embed)
  }}
