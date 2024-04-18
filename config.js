const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://malikmd:malikmd@cluster0.bfc7ce9.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'akk728492@gmail.com'
global.github = 'https://github.com/arkhan998/MALIK-MD'
global.location = 'Pakistan'
global.gurl = 'king-md.db' // add your username
global.sudo = process.env.SUDO || '254712143384'
global.devs = '254712143384';
global.website = 'https://github.com/arkhan998/MALIK-MD' //wa.me/+254712143384
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/dce77f7538019d05afe65.jpg'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "MALIK-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0JCaUE5anp2anVjUFBCaVR1VGxpME9hQmpDbHorTldoMGhsZ3ZJc0RIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0lYZUJPYlFpMStGQ3BOOGpnTXhZTjNFbm1qbHlBL2JqaUdSSlQ3MFAwUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQmRzUzhvOFMzZ3dCeDBTb1ZmQitzWncyUjVvUHUwazlkSXZDZnl5d1V3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnR0l1MEpBOUc1aGVrdzJ4TlFCRXJWbkxqQUsyK0RZYllMRDBmUSsvQkMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNPWHlFREFRamtvRjBJVUxFdUZxNUZJUjhrbXU5bW5WRWU3eGltNnVmbUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFzQjVpNmNVV0x6Ylh3TzhrMVE3YlNiMHFSVTZmVHB1a212R1BGTlcyUUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU91N3JBWTRLZ1ZKS3BvWjhta0ptRjc3NjJaZmVyM0tEcVNUQWg2MzBGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkxmblZmZC9LbERlV1pvVW1OQnhhNVdSc0s3Sm5UMzlHZ0RoSzNUQmtFZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjMwd0tkRE00L0NhaWltNFN6QWp2SnNGRUIrbEFWcWJxTXRhL2F3ZFk5OUxtclEyZWx3SGQrSmc1c0Z2TDVHL2FHZm42S1p1UW9ET1lUZzZxRjZJTERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE0LCJhZHZTZWNyZXRLZXkiOiJXYjdlTWQydWRzV25WYmVlRlNrblhLMjM4VWVQSEw4SUl5b0prdlkreVNVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSelNoWVJ6aVNYZTA4SjhHc2pNeWdBIiwicGhvbmVJZCI6IjE1MjJlOGNkLWEwZWMtNGQyMi1hODVjLTYyOWViY2NjNGEwNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnL1FpMFBydi9FaTI0Vkx1SXJnUkVtWTI5blE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhyZ0xDamV3SUhqSWdWWGxCUnpBcmYzbmVFZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x2Z3llWUNFTm1EaHJFR0dCUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imw5dnRYRmdHc3hJM0JTQzZOK0dWNmRBbWszWUVZa05iTUxLQjdtTm92aDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdNZEdacTNQc1J6amdJWll4ckVLOFUxa2toRnY5SFBHbGh5UEExZjY5eC9rQUhNb3V0ek5OUEp3Q3F4KytVRVY3bFRJNUFQZnVXUC9LMmorT1BiTERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUUmFjSFhabnBFRFhHY0k3ZFoweEF4aHBRWHUrbVlxK3Nza0NUdzR5TjlWWi9uUGlpblhsM1AyMldJZGhaZlp2dUNMeGJsWG9aQUx3WmExZU5zMDBEQT09In0sIm1lIjp7ImlkIjoiMjU0NzEyMTQzMzg0OjE4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkphY2tpbSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MTIxNDMzODQ6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWmZiN1Z4WUJyTVNOd1VndWpmaGxlblFKcE4yQkdKRFd6Q3lnZTVqYUw0ZCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxMzQ3MTk3NH0=",
  botname:   process.env.BOT_NAME === undefined ? 'MALIK-BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'arkhan' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'bot' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'malik-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'MALIK',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
