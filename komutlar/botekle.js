module.exports={
	name:'uptime',
	aliases:["monitor"],
	cooldown:0,
	execute(message,args){
    const Discord=require("discord.js");
		const db=require("quick.db")
    if(!args[0])return message.channel.send(new Discord.MessageEmbed().setColor('#00BFFF').setDescription("Please give website link to moniter"));
    if(args[0].startsWith("http://")||args[0].startsWith("https://")||args[0].includes(".")||args[0].includes("/"))return message.channel.send(new Discord.MessageEmbed().setDescription("You must type the project name").addField("Example:",`!monitor MeCodes.glitch.me`));
    if(db.get("uptime").includes(args[0]+" "+message.author.id))return message.channel.send(new Discord.MessageEmbed().setDescription("This Project already uptimed"))
    db.push("uptime",args[0]+" "+message.author.id);
    message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription("Just Wait `30 Seconds` For The Uptime Your Project"))
    message.client.channels.cache.get("747245657190039583").send(`${message.client.guilds.cache.get("589156112448749589").member(message.author)||message.author.tag} `+args[0]+" تمت إضافة المشروع!!.");
	}
};
