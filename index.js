const Discord = require('discord.js');
const request = require('request');
const fetch = require('node-fetch');
require('dotenv-flow').config();
const client = new Discord.Client();

const config = {
  token: process.env.TOKEN,
}
// Ready Message
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity('you ask for toast', {type: "WATCHING"})
 });

client.on('message', msg => {
  if(msg.content.toLowerCase() == 'toast' || msg.content == '<@!743109027831218176>') {
    fetch(`https://source.unsplash.com/1600x900/?toast`).then((response) => {
      msg.author.send(response.url);
      console.log("Toast Requested!");
     });
    msg.react('🍞');
    }
 });

 client.on('message', msg => {
 if (msg.content === 'About the toast...') {
 msg.reply('Ping For Toast. You Ping... I DM toast. I am possibly the most useless discord bot... but who the fuck ever wanted a useful discord bot? pssst. Amateurs. invite me using https://discord.com/oauth2/authorize?client_id=743109027831218176&scope=bot');
 }
 });

 client.on('message', msg => {
  if (msg.content === 'super secret stuff lol') {
    console.log(client.guilds.cache);
    msg.reply('hi! if you are a importaint person... you can see a list of all the servers the bot is in by visiting the command prompt!');
  }
})

client.login(config.token);