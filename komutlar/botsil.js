module.exports={
	name:'delete',
	aliases:[],
	cooldown:0,
	execute(message,args){
    const Discord=require("discord.js");
		const db=require("quick.db")
      if(!args[0])return message.channel.send(new Discord.MessageEmbed().setAuthor('تحذير').setDescription("أدخل اسم المشروع :skull_crossbones:").setColor('RANDOM'));
    if(!db.get("uptime").includes(args[0]+" "+message.author.id))return message.reply("هذا المشروع غير موجود :confused:")
    db.set("uptime",db.get("uptime").filter(a=>a!=args[0]+" "+message.author.id));
    message.reply(args[0]+" :skull: تم حذف المشروع");
   }
};