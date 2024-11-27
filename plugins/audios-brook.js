let handler = async (m, { conn, usedPrefix, command }) => {
let audio = fs.readFileSync('./brook/brook.mp3') // Cambia el directorio segun el audio
await conn.sendFile(m.chat, audio, 'brook.mp3', '', m)
}

handler.help = ['brook']
handler.tags = ['audios']
handler.command = ['brook']
export default handler