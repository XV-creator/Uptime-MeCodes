module.exports={
	name:'projects',
	aliases:[],
	execute(message,args){
    const Discord=require("discord.js");
    const db=require("quick.db");
    var projects=db.fetch("uptime").filter(a=>a.split(" ")[1]==message.author.id).map(a=>a.split(" ")[0]).join("\n");
message.channel.send(new Discord.MessageEmbed().setTitle('Your Projects').setAuthor(message.author.username,message.author.displayAvatarURL({dynamic:true})).setDescription(projects==""?"Error 404":projects).setColor('RANDOM'))
	}
};
