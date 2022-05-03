const Discord = require('discord.js');
const request = require('request');
const fetch = require('node-fetch');
require('dotenv-flow').config();

const client = new Discord.Client();

var prefix = !!;

const aboutembed = {
  title: "About",
  description: "Ping For Toast. You **Ping**... I **DM** toast. I am possibly the most useless discord bot... but who the fuck ever wanted a useful discord bot? psssh. Amateurs. ",
  color: 0xc49016,
  footer: {
    icon_url: 'https://cdn.discordapp.com/app-assets/743109027831218176/743114454115418222.png',
    text: "This message was approved and paid for by the Ping For Toast administration lol"
  },
  thumbnail: {
    url: 'https://cdn.discordapp.com/app-icons/743109027831218176/3806aab678834c0e8bd3daf037b7364a.png'
  },
  author: {
    name: "By Ping For Toast (the dev... NOT the bot lol)",
    icon_url: 'https://cdn.discordapp.com/avatars/543828521844342790/b3943bb9252490b8179b829976de7893.png?size=128'
  },
  fields: [
    {
      name: "Invite me!",
      value: "invite me using https://discord.com/oauth2/authorize?client_id=743109027831218176&scope=bot&permissions=67488832"
    },
    {
      name: "Complaints?",
      value: "DM **Ping for toast#7910**... OR make a issue at the link below!"
    },
    {
      name: "The bot is open source!",
      value: "Contribute or make a issue at https://github.com/Scaledi/useless-toast-bot"
    },
    {
      name: "Commands",
      value: "Summon me in dms or any server I am on using `Toast`, `!!Toast`, or by pinging me. get this message again by typing `!!about`"
    }
  ]
};

const config = {
  token: process.env.TOKEN,
}

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity('you ask for toast', {type: "WATCHING"})
 });

client.on('message', msg => {
  if(msg.content.toLowerCase() == '${prefix}toast' || msg.content == '<@!743109027831218176>') {
    fetch(`https://source.unsplash.com/1600x900/?toast`).then((response) => {
      msg.author.send(response.url).then(sentMessage => sentMessage.react('743504813492273183'))
      console.log("Toast Requested By " + msg.author.tag);
     });
    if(msg.content.toLowerCase() == '<@!743109027831218176>') {
      msg.react('743509805217611898');
    }
    if(msg.content.toLowerCase() == "${prefix}toast")
    msg.react('🇹')
      .then(() => msg.react('🇴'))
      .then(() => msg.react('🇦'))
      .then(() => msg.react('🇸'))
      .then(() => msg.react('743541134692974704')); // might try and grab the discord emoji and upload it directly to a server for dupe T's. but this is kinda funny tbh.
    }
 });

client.on('message', msg => {
  if(msg.content.toLowerCase() === '${prefix}about') {
    msg.reply({ embed: aboutembed });
    }
 });

client.on('message', msg => {
  if (msg.content === '${prefix}admincontrol') {
    console.log(client.guilds.cache);
    msg.reply('hi! if you are a importaint person... you can see a list of all the servers the bot is in by visiting the command prompt!');
  }
})

client.on('message', msg => {
  if (msg.content.toLowerCase() == '${prefix} noise') {
    console.log("Toast Noise Requested by " + msg.author.tag + "... ew!");
    msg.reply('https://raw.githubusercontent.com/Scaledi/useless-toast-bot/master/Files/Toastyyy.mp3' + ' You gross fuck')
    .then(sentMessage => sentMessage.react('743504813492273183'))
    .then(() => msg.react('743862090162241567'))
  }
})

client.login(config.token);
