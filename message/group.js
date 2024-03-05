const util = require('util')
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs");
const { color } = require("../lib/color");
const { getBuffer, getRandom, getGroupAdmins,sleep,resize} = require("../lib/myfunc");
const {TelegraPh} = require('../lib/uploader')
const fetch = require('node-fetch');
const chalk = require('chalk')
const bg = "https://tinyurl.com/y23xrfhu"
const kontol = fs.readFileSync('FANDYS.jpg')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tggl = (numer) => {
	            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
				myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum’at','Sabtu']; 
				var tgl = new Date(numer);
				var day = tgl.getDate()
				bulan = tgl.getMonth()
				var thisDay = tgl.getDay(),
				thisDay = myDays[thisDay];
				var yy = tgl.getYear()
				var year = (yy < 1000) ? yy + 1900 : yy; 
				const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				return`${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

//====================================================================================================================
module.exports = async(alice, anu) => {
	//console.log(anu)
var jeda = false
if(jeda) return console.log('spam welcome aktif')
jeda = true
try{
if(anu.action == "remove" && anu.participants[0].split("@")[0].includes(alice.user.id.split(":")[0]) ) return
const { id, participants, action } = anu
const type1 = setwelcome == "type1"
const type2 = setwelcome == "type2"
const type3 = setwelcome == "type3"
const from = anu.id
const botNumber = alice.user.jid 
const groupMetadata = await alice.groupMetadata(from) || (alice.chats[from] || {}).metadata
const groupName =  groupMetadata.subject || []
const groupMet = await alice.groupMetadata(from)
const groupLength = groupMetadata.participants.length
const sender = anu.participants[0];
const senderNumber = sender.split("@")[0];
const groupMembers =  groupMetadata.participants || []
const groupAdmins = getGroupAdmins(groupMembers) || []
const groupDesc =  groupMetadata.desc || []
const groupOwner =  groupMetadata.owner || []
const mem = anu.participants[0];
const memNumber = mem.split("@")[0];
const user = groupMembers.find(u => alice.decodeJid(u.id) === sender)  || {} 
const bot = groupMembers.find(u => alice.decodeJid(u.id) == alice.user.jid) || {} 
const isRAdmin = user && user.admin == 'superadmin' || false
const isAdmin = isRAdmin || user && user.admin == 'admin' || false 
const isBotAdmin = bot && bot.admin == 'admin' || false // Are you Admin?  
const pushname =  await alice.getName(sender)
const oneMem = anu.participants.length === 1
const itsMe = sender === botNumber
const timeWib = moment.tz("Asia/Jakarta").format("HH:mm")
const chat = global.db.data.chats[id] || {}
const add = action == "add" 
const remove = action == "remove"
const memb = groupMet.participants.length
let m = {chat :from,pushname : pushname,sender : sender}

//Group Update Console.log
if (add && oneMem) console.log(chalk.magenta("[GRUP UPDATE]"), chalk.green(`${pushname} telah bergabung di grub`), chalk.magenta(`${groupName}`))
if (remove && oneMem) console.log(chalk.magenta("[GRUP UPDATE]"), chalk.green(`${pushname} telah keluar dari grub`), chalk.magenta(`${groupName}`))

//Auto kick jika itu user yang sudah di tandai
let kickon = db.data.kickon[from]
if(add && kickon && kickon.includes(senderNumber)){
	
let teks = `@${senderNumber} Cie masuk lagi
out aje loe udh gw tandai sebagai user Biadap!!` 
       
await alice.sendMessage(from, {text: teks,contextInfo: {mentionedJid: [sender]}},{quoted: m})
if(!isBotAdmin) return alice.sendMessage(from, {text: `Gagal  mengeluarkan @${senderNumber} dari group karena bot bukan admin`,contextInfo: {mentionedJid: [sender]}},{quoted: m})
if(isBotAdmin) return alice.groupParticipantsUpdate(from, [sender], 'remove')
} 
  
switch (action) {
//_____________BAGIAN WELLCOME DAN LEAVE MESSAGE_________________________
case 'add':{
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': kontol}}}
const canvacard = require("canvacard");
let ppimg = await alice.profilePictureUrl(sender, 'image').catch(_ => 'https://i.ibb.co/sVsHmzs/20240229-221304.png')
let teks =`── ❖ ❍ 「𝐖𝐞𝐥𝐥𝐜𝐨𝐦𝐞 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 」 ❍ ❖ ──
• *_Tanggal_* : ${tggl(new Date)}
• *_Jam_* :  ${barat } WIB
• *_Info Profile_* :
    ╰≻  *_• Name :_* @${senderNumber}
    
╭─────────────────────────
│Selamat datang dan selamat bergabung di Group
│🌇 *_${groupName} _*🌇
│semoga betah dan makin akrab ya. 😊😊
╰─────────────────────────

_*𝑪𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 • 𝟐𝟎𝟐𝟒*_`
let its = await getBuffer (ppimg)
const background = "https://i.ibb.co/2NbmrX0/20240303-222837.png";
let image3 = new canvacard.Welcomer()
    .setAvatar(ppimg)
    .setBackground('IMAGE', background)
    .setTitulo(`${pushname}`)
    .setTypeOverlay("ROUNDED")
    .setSubtitulo("Selamat datang jangan lupa untuk terus bernapas.")
    .setColor("border", "#A6A6A6CC")
    .setColorTitulo("#FFFFFF")
    .setColorSubtitulo("#FF0000")
    .setColorCircle("#A6A6A6CC")
    .setColorOverlay("#A6A6A600")
    .setOpacityOverlay("0.4")
    let pante = await getRandom(".png")
    image3.build()
    .then(async data => {
    await canvacard.write(data,pante);
    let bujang = await fs.readFileSync(pante)
alice.sendMessage(from, { caption: teks, mentions: [mem], image: bujang}, {quoted:fkontak})
    await fs.unlinkSync(pante)
        });
}
break

//__________________________________________________________________________________________________________________
case 'remove':{
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': kontol}}}
const canvacard = require("canvacard");
let ppimg = await alice.profilePictureUrl(sender, 'image').catch(_ => 'https://i.ibb.co/sVsHmzs/20240229-221304.png')
let teks =`── ❖ ❍ 「𝐋𝐞𝐚𝐯𝐞 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 」 ❍ ❖ ──
• *_Tanggal_* : ${tggl(new Date)}
• *_Jam_* :  ${barat } WIB
• *_Info Profile_* :
    ╰≻  *_• Name :_* @${senderNumber}
    
╭─────────────────────────
│Selamat  tinggal dan selamat jalan dari Group
│🌇 *_${groupName} *_🌇
│semoga tenang selalu disisinya. 😊😊
╰─────────────────────────

_*𝑪𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 • 𝟐𝟎𝟐𝟒*_`
let its = await getBuffer (ppimg)
const background = "https://i.ibb.co/pRLQDYF/20240304-075820.png";
let image3 = new canvacard.Welcomer()
    .setAvatar(ppimg)
    .setBackground('IMAGE', background)
    .setTitulo(`${pushname}`)
    .setTypeOverlay("ROUNDED")
    .setSubtitulo("Selamat jalan kawanku,smoga tenang disana.")
    .setColor("border", "#A6A6A6CC")
    .setColorTitulo("#FFFFFF")
    .setColorSubtitulo("#FFFF00")
    .setColorCircle("#A6A6A6CC")
    .setColorOverlay("#A6A6A600")
    .setOpacityOverlay("0.4")
    let pante = await getRandom(".png")
    image3.build()
    .then(async data => {
    await canvacard.write(data,pante);
    let bujang = await fs.readFileSync(pante)
alice.sendMessage(from, { caption: teks, mentions: [mem], image: bujang}, {quoted:fkontak})
    await fs.unlinkSync(pante)
        });
}
break
//__________________________________________________________________________________________________________________
//__________________________________________________________________________________________________________________




}// Akhir dari swith action
await sleep(5000)  
jeda = false

  
} catch (err) {
jeda = false
console.log(err)
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {return}
if (e.includes('connection Closed')){ return }
if (e.includes('Timed Out')){ return }
console.log(chalk.white('GROUP :'), chalk.green(e))
} 
}

//----------------< Batas >--------------\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
