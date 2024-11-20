import fs from 'fs';
import {sticker} from '../lib/sticker.js';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `🚩 ¡Hola! Soy Book-Bot-MD, en que puedo ayudarte hoy?\n\n✰ Usa *!menu* para ver mis comandos.`, m, rcanal, )
}
  if (/^brook$/i.test(m.text) && chat.audios) {  
let vn = 'https://files.catbox.moe/eyv8yl.opus';'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}
}
/*if (/^que|q$/i.test(m.text)) {
conn.reply(m.chat, `*so y arroz* 👌🤌`, m, rcanal, )
}*/
/*if (/^sexo$/i.test(m.text)) {
conn.reply(m.chat, `*pervertido* 🫣`, m, rcanal, )
}*/
/*if (/^a$/i.test(m.text)) {
conn.reply(m.chat, `*rroz y pollo* 😄👌`, m, rcanal, )
}*/
if (!chat.isBanned && m.text.match(/(te amo|teamo|te amo bot|te amo megumin)/gi)) {
  conn.sendMessage(m.chat, {
 stiker:{ url: global.stickeramor}
}, { quoted: fakegif2});
}

/*if (/^bug$/i.test(m.text)) {
conn.reply(m.chat, `*tu mamá we* 😹`, m, rcanal, )
}
if (/^pene$/i.test(m.text)) {
conn.reply(m.chat, `*comes* 😹`, m, rcanal, )
}*/
return !0;
};
export default handler;
