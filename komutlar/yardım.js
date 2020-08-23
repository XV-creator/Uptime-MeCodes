module.exports={
	name:'help',
	aliases:[],
	cooldown:0,
	execute(message,args){
    const Discord=require("discord.js");
    
    const embed = new Discord.MessageEmbed()
    .setTitle("قائمة التعليمات")
    .setColor("RANDOM")
    .setDescription("!ume --} تقوم بإضافة الروبوت الخاص بك <-- \n !projects --} سترى مشاريعك المضافه <-- \n !delete --} قم بحذف 1 مشاريعك <--")
    message.channel.send(embed)
  }}