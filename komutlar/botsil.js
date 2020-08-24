module.exports={
	name:'delete',
	aliases:[],
	cooldown:0,
	execute(message,args){
    const Discord=require("discord.js");
		const db=require("quick.db")
       if(!args[0])return message.channel.send(new Discord.MessageEmbed().setColor('#00BFFF').setDescription("Please give website link to delete"));
   if(!args[0])return message.channel.send(new Discord.MessageEmbed().setDescription("You must type tye project name").setColor('#00BFFF'));
    if(!db.get("uptime").includes(args[0]+" "+message.author.id))return message.channel.send(new Discord.MessageEmbed().setDescription("I Didnt Find This Project"))
    db.set("uptime",db.get("uptime").filter(a=>a!=args[0]+" "+message.author.id));
    message.channel.send(new Discord.MessageEmbed("Your Project Has Been Deleted!"));
   }
};
