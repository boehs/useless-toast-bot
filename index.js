const Discord = require('discord.js');
const request = require('request');
const fetch = require('node-fetch');
require('dotenv-flow').config();
const client = new Discord.Client();
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
      value: "invite me using https://discord.com/oauth2/authorize?client_id=743109027831218176&scope=bot"
    },
    {
      name: "complaints?",
      value: "DM **Ping for toast#7910**... OR make a issue at the link below!"
    },
    {
      name: "The bot is open source!",
      value: "Contribute or make a issue at https://github.com/Scaledi/useless-toast-bot"
    }
  ]
};

const config = {
  token: process.env.TOKEN,
}
// Ready Message
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity('you ask for toast', {type: "WATCHING"})
 });

client.on('message', msg => {
  if(msg.content.toLowerCase() == 'toast' || msg.content.toLowerCase() == '!!toast' || msg.content == '<@!743109027831218176>') {
    fetch(`https://source.unsplash.com/1600x900/?toast`).then((response) => {
      msg.author.send(response.url);
      console.log("Toast Requested!");
     });
    msg.react('🍞');
    }
 });

 client.on('message', msg => {
  if(msg.content.toLowerCase() === '!!about' || msg.content.toLowerCase() === 'about the toast' || msg.content.toLowerCase() === 'toast about') {
    msg.reply({ embed: aboutembed });
    }
 });

 client.on('message', msg => {
  if (msg.content === 'super secret stuff lol') {
    console.log(client.guilds.cache);
    msg.reply('hi! if you are a importaint person... you can see a list of all the servers the bot is in by visiting the command prompt!');
  }
})

client.login(config.token);