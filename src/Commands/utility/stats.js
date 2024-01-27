const languages = [
  { name: "English, US", key: "en-US", flag: "🇺🇸" },
  { name: "Hindi", key: "hi", flag: "🇮🇳" },
  { name: "English, UK", key: "en-GB", flag: "🇬🇧" },
  { name: "Portuguese", key: "pt-BR", flag: "🇵🇹" },
  { name: "Romanian", key: "ro", flag: "🇷🇴" },
  { name: "Turkish", key: "tr", flag: "🇹🇷" },
  { name: "French", key: "fr", flag: "🇫🇷" },
  { name: "Spanish", key: "es-ES", flag: "🇪🇸" },
  { name: "Russian", key: "ru", flag: "🇷🇺" },
  { name: "Ukrainian", key: "uk", flag: "🇺🇦" },
  { name: "German", key: "de", flag: "🇩🇪" },
  { name: "Vietnamese", key: "vi", flag: "🇻🇳" },
  { name: "Finnish", key: "fi", flag: "🇫🇮" },
];

module.exports = {
  name: 'stats',
  category: 'Utility',
  botOwner: true,
  run: (client, message, args, users, botData) => {


    if (users.size == 0) return message.reply('Pas encore pret')

    function getCount(str) {
      return users.filter(u => u.flags && u.flags.includes(str)).length
      
    }

    const langMsg = languages.map(l => {
      return {
        flag: l.flag,
        name: l.name,
        count: users.filter(u => u.lang && u.lang === l.key).length,
        key: l.key
      }
    });

    let embed =
    {
      //title: `${client.emoji.arrow} Nombre d'utilisateurs : \`${users.size == 0 ? "En cours de chargement..." : users.length.toLocaleString('en-US')}\``,
      //      title: `${client.emoji.arrow} Nombre d'utilisateurs : \`${client.config.ez}${users.size == 0 ? "En cours de chargement..." : users.length.toLocaleString('en-US')}\``,
title: `Nombre d'utilisateurs : \`${users.size == 0 ? "En cours de chargement..." : users.length.toLocaleString('en-US')}\``,
      color: client.color.default,
      fields: [],
      description: `** **`,
      thumbnail: {
        url: client.user.displayAvatarURL({ dynamic: true, size: 4096, format: 'png' })
      }
      
    }

      embed.fields.push({
        name: `**__Badges__**: `,
        value: `** **`,
        inline: false
                        },
  { name: `Partner`, 
   value: `\`\`\`${getCount('PARTENERED_SERVER_OWNER')}\`\`\``,
  inline: true },
  { name: `Certified Moderator`, 
   value: `\`\`\`${getCount('DISCORD_CERTIFIED_MODERATOR')}\`\`\``,
  inline: true },
  { name: `Hypesquad Events`, 
   value: `\`\`\`${getCount('HYPESQUAD_EVENTS')}\`\`\``,
  inline: true },
  { name: `Bug Hunter`, 
   value: `\`\`\`${getCount('BUGHUNTER_LEVEL_2') + getCount('BUGHUNTER_LEVEL_1')}\`\`\``,
  inline: true },
  { name: `Bravery`, 
   value: `\`\`\`${getCount('HOUSE_BRAVERY')}\`\`\``,
  inline: true },
  { name: `Brilliance`, 
   value: `\`\`\`${getCount('HOUSE_BRILLIANCE')}\`\`\``,
  inline: true },
  { name: `Balance`, 
   value: `\`\`\`${getCount('HOUSE_BALANCE')}\`\`\``,
  inline: true },
  { name: `Early Developer`, 
   value: `\`\`\`${getCount('EARLY_VERIFIED_BOT_DEBELOPER')}\`\`\``,
  inline: true },
  { name: `Early Supporter `, 
   value: `\`\`\`${getCount('EARLY_SUPPORTER')}\`\`\``,
        inline: true },
                        {
        name: `**__Locales__**: `,
        value: `** **`,
        inline: false
                        })
    langMsg.sort((a, b) => b.count - a.count).map(l => {
      embed.fields.push({
        name: `${l.flag} ${l.name}`,
        value: `\`\`\`${l.count}\`\`\``,
        inline: true
      })
    })


    message.channel.send({
      embeds: [
        embed
      ]
    })

  }
}