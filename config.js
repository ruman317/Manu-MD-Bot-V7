const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "WiJjVb6B#-PeR7jskNWDq4ODy4LYQ5Uh5FgMF4vXjmJQQikzBdWU",
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/ef48cc8d2d26081f7d46a.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || ".alive",
MENU_IMG : process.env.MENU_IMG || "https://telegra.ph/file/ef48cc8d2d26081f7d46a.jpg",
MODE : process.env.MODE || "public",    
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_BIO: process.env.AUTO_BIO || "true",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
};
