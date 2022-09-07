let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
*𝐇𝐚𝐥𝐨 𝐁𝐚𝐧𝐡 𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐉𝐨𝐢𝐧 && 𝐁𝐚𝐜𝐚 𝐑𝐮𝐥𝐞𝐬❗*
╔═══════════════════
║ _*Group All VEN-BOTZ*_   
╠═══════════════════
║➸ 𝐆𝐫𝐨𝐮𝐩 𝐀𝐧𝐢𝐦𝐞 1
║ https://tinyurl.com/2h736o3z
║
╚════════════════════
╔════════════════════
║ *Group Random Bot*
╠════════════════════
║https://tinyurl.com/2mbs2te4
╚════════════════════
╔════════════════════
║ *RULES GROUP Anime*
╠════════════════════
║𝐌𝐞𝐦𝐛𝐞𝐫 𝐛𝐚𝐫𝐮 𝐰𝐚𝐣𝐢𝐛 𝐢𝐧𝐭𝐫𝐨
║𝐃𝐢𝐥𝐚𝐫𝐚𝐧𝐠 𝐬𝐩𝐚𝐦! 
║𝐍𝐨 𝐧𝐠𝐞𝐦𝐢𝐬 𝐣𝐚𝐝𝐢 𝐚𝐝𝐦𝐢𝐧
║𝐔𝐦𝐮𝐫 𝐦𝐚𝐤𝐬𝐢𝐦𝐚𝐥 𝟏𝟏/𝟏𝟐/𝟏𝟑/𝟏𝟕/𝟐𝟑
║𝐊𝐢𝐫𝐢𝐦 𝐥𝐢𝐧𝐤 𝐠𝐜 𝐥𝐚𝐢𝐧 𝐤𝐢𝐜𝐤/𝐛𝐚𝐜𝐤
║𝐃𝐢𝐥𝐚𝐫𝐚𝐧𝐠 𝐦𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐡𝐚𝐥 𝟏𝟖+
║𝐓𝐨𝐱𝐢𝐜 𝐢𝐧𝐠𝐚𝐭 𝐛𝐚𝐭𝐚𝐬𝐚𝐧
║𝐍𝐨 𝐤𝐢𝐫𝐢𝐦 𝐯𝐢𝐫𝐭𝐞𝐱/𝐛𝐮𝐠𝐰𝐚
╚════════════════════
╔════════════════════
║ *Rules Group Random Bot*
╠════════════════════
║Dilarang spam bot
║Admin cukup 4
║No ngemis jadi admin
║Umur maksimal 11/12/13/17
║Kirim link gc lain kick/back
║Dilarang mengirim hal 18+
║Toxic ingat batasan
║No kirim virtex/bugwa
║𝐉𝐀𝐍𝐆𝐀𝐍 𝐋𝐔𝐏𝐀 𝐁𝐀𝐍𝐓𝐔 𝐒𝐇𝐀𝐑𝐄
╚═════════════════════
`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
