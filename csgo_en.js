const Discord = require('discord.js');
const { Server } = require('steam-query');
const server = new Server('server_ip_address', server_port); // IP address and port of the CS:GO server

const client = new Discord.Client();
const prefix = "!"; // The prefix that triggers the bot

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  if (message.content === prefix + 'csgo') {
    try {
      const data = await server.getPlayers(); // Get data about the players on the server
      const playerCount = data.players.length; // Get the number of players
      message.channel.send(`There are ${playerCount} players on the CS:GO server.`); // Send the player count to the channel
    } catch (error) {
      message.channel.send('An error occurred while connecting to the CS:GO server.');
      console.error(error);
    }
  }
});

client.login('BOT_TOKEN'); // Replace BOT_TOKEN with your Discord bot token.
