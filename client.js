'use strict';
const Discord = require('discord.js.old');
const client = new Discord.Client;
const args = require('yargs').argv;
const token = args.token;
const msg = args.msg;
const username = args.user;
const moment = require('moment');
const colors = require('colors')
const play = require('audio-play')
const audioBuffer = require('audio-buffer')
const load = require('audio-loader');
const pingsound = load('./ping.mp3')



client.once('ready', () => {
  console.clear()
  console.log(` =========================`)
  console.log(`         TermCord`)
  console.log(` =========================`)
  console.log(` Connected!`.brightGreen)
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
});

client.on('message', async message => {
  const dateCreated = moment(message.createdAt)
      if (message.author.username == client.username) {
console.log(`\n`, `(Sent in ${message.guild.man} > ${message.channel.name})`, '\n', `You:`.brightGreen + ` ${message.content}`);
} else {
  if (message.author.bot) {
  console.log('\n', `(Sent in ${message.guild.name} > ${message.channel.name})`,'\n', `${message.author.tag}`.brightCyan + `: ${message.content}`);
} else {
  console.log('\n', `(Sent in ${message.guild.name} > ${message.channel.name})`, '\n', `${message.author.tag}`.brightBlue + `: ${message.content}`);
}
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\n > ', msg => {
  const msgargs = msg.slice().trim().split(' ');
message.channel.send(msg)
setTimeout(function () {
  readline.close()
  readline.removeAllListeners()
}, 1000);
  });
});
setTimeout(function () {

}, 3000);
});

client.on('messageReactionAdd', async (reaction, user) => {
console.log(`${user.username} Reacted to ${reaction.message.author.username}\'s message. [${reaction.message.content}]`)
});

client.login(token);
