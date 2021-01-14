const Discord = require('discord.js');
const { receiveMessageOnPort } = require('worker_threads');
const config = require('./config.json');
const prefix = config.prefix;
const token = config.token;
const client = new Discord.Client()

//quotes array
var quotes = [
"So they beat you this time. But how many grenades did you throw? Did you count them? Really. Ask yourselves 'Did I throw all the grenades I could?' -Lord Shaxx, Destiny 2",
"Where do you want to go next? If you would like to see Liyue tourist spots, I have a few references. -Zhongli, Genshin Impact",
"Creeper, aw man. -Revenge, Minecraft Parody",
"This is the shape and the point of the tooth: nothing has ever lived that will not die. -Fang of Ir Yut, Destiny",
"This world has gotten so much weaker... Festivals! Alliances! Squabbling over trinkets! I judge it unworthy. But know this, pirates. Know this, merfolk. Know this, Sea of Thieves... I have returned, and the fires of my vengeance shall consume you all! -Captain Flameheart, Sea of Thieves",
"All right, partner, this is a Cayde riff in 6, watch me for the changes, and uh... try to keep up. Now lets go to prison! WOOOOOHOOOOOOO! -Cayde-6, Destiny 2",
"I wear a leather jacket, I have Lucille, and my n**sack is made of steel. I am not dying until I am damn good and ready. -Negan, The Walking Dead",
"I'm hungry, let's hunt. -Razor, Genshin Impact",
"I don't even have time to explain why I don't have time to explain. -Exo Stranger, Destiny",
"Nerf this! -D.Va, Overwatch",
"When all you have is a hammer, everyone else is a nail. -Reinhardt, Overwatch", 
"Artificial Intelligence activated. Enjoying yourselves, intruders? It's worth knowing the cataclysmic damage you will be responsible for today. Do not fool yourselves. This facility is not simply the fruitless work of some pathetic scientist. This house was built by the genius Clovis Bray I himself. Within lies humanity's salvation. La fontaine de jouvence. Made possible by Clarity Control. Magnificent, wasn't it? An entity from beyond our own dimension. And the answer to humanity's eternal struggle: mortality. Were it to fall into the wrong hands, humanity, and the universe, would be utterly doomed. I have no reason to believe you are anything other than 'the wrong hands.' You now face godlike judgement. May it extend eternally. -Clovis Bray AI, Destiny 2",
"All right, all right, all right. Let's see what we've got. Hive! Bring a sword. -The Drifter, Destiny 2",
"The numbers, Mason! What do they mean? -Jason Hudson, Call of Duty: Black Ops",
"This city... has seen more than its share of pain. It has been witness to horrors that would make most souls question the very concept of humanity itself. It has been known by many names, but I know it as Stalingrad, city of blood. -Nikolai Belinski, Call of Duty: Black Ops 3",
"E. -Ghost, Phasmophobia"
]



//ready section
client.on('ready', () =>{
console.log("Connected as " + client.user.tag)
client.user.setActivity("with your data")

//get connected servers + channels
client.guilds.cache.forEach((guild) => {
    console.log(guild.name)
    guild.channels.cache.forEach((channel) => {
        console.log(` - ${channel.name} ${channel.type} ${channel.id} `)
        })
    })
})

//receieved messages
client.on('message', message => {
    //prevent bot from replying to itself
    if (message.author == client.user){
        return
    }
    //simple ping pong test command
   if (message.content === `${prefix}ping`){
       message.channel.send('Pong');
   }
   //help command
   else if (message.content === `${prefix}help`){
        message.channel.send('```Full list of commands here'
        +'\n'
        +'\n!github Link to my Github'
        +'\n!help Provides a list of commands' 
        +'\n!ping Test command. Replies with pong'
        +'\n!quote Provides a random quote from an array```')
   }
   //quote command
   else if (message.content === `${prefix}quote`){
       var quote = quotes[Math.floor(Math.random() * quotes.length)]
       message.channel.send(quote)
   }
   //github link
   else if (message.content === `${prefix}github`)
   {
       message.channel.send("https://github.com/JoshuaGuntly?tab=repositories")
   }
})




 //bot login   
client.login("bot token")
