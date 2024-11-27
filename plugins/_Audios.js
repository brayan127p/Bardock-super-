let handler = asycn (m, { conn, usedPrefix, command }) => {
let audio = fs.readFileSync('./brook/brook.mp3') // Cambia el directorio segun el audio
await conn.sendFile(m.chat, audio, 'brook.mp3', '', m)
}

handler.command = ['audio']
export default handler