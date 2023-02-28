const Discord = require('discord.js');
const { Server } = require('steam-query');
const server = new Server('sunucu_ip_adresi', sunucu_portu); // CS:GO sunucusu IP adresi ve bağlantı noktası

const client = new Discord.Client();
const prefix = "!"; // Değiştirebileceğiniz önek

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  if (message.content === prefix + 'csgo') {
    try {
      const data = await server.getPlayers(); // Sunucudaki oyuncuların verilerini alın
      const playerCount = data.players.length; // Oyuncu sayısını alın
      message.channel.send(`CS:GO sunucusunda ${playerCount} oyuncu var.`); // Oyuncu sayısını kanala gönderin
    } catch (error) {
      message.channel.send('CS:GO sunucusuna bağlanırken bir hata oluştu.');
      console.error(error);
    }
  }
});

client.login('BOT_TOKEN'); // Discord botunuzun token'ını buraya yerleştirin.
