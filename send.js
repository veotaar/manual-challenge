import { EmbedBuilder, WebhookClient } from 'discord.js';
import challenge from './challenge.js';

const sendChallengeLinkToDiscord = async (challange) => {

  const { title, url, mapName, gameMode, timeLimit } =  challange;

  const webhookClient = new WebhookClient({ url: process.env.WEBHOOK_URL });
  const pinUrl = 'https://i.imgur.com/rRfBxh2.png';

  const embed = new EmbedBuilder();

  embed.setTitle(title);
  embed.setColor('fcf802');

  embed.addFields(
    // { name: '\u200B', value: '\u200B' },
    { name: 'Map', value: mapName },
    { name: 'Mod', value: gameMode, inline: true },
    { name: 'Süre', value: `${timeLimit}s`, inline: true },
    { name: 'Challenge Link', value: url }

  );

  embed.setThumbnail(pinUrl);
  embed.setTimestamp();

  await webhookClient.send({
    // content: 'Yeni günlük challange!',
    username: 'GeoTürkiye Daily',
    embeds: [embed]
  });
};

await sendChallengeLinkToDiscord(challenge);
