syncFullHistory: true,
markOnlineOnConnect: true,
}
 // VERSI PAIRING ( DARWIN BIKIN ANJG )
// GAUSAH DELETE NAMA GW, LU CUMAN PAKE DASAR KROCO
"use strict";
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
require("./settings.js")
const {
  default: makeWaSocket,
  useSingleFileAuthState,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  PHONENUMBER_MCC,
  jidDecode,
  proto,
  makeCacheableSignalKeyStore,
} = global.baileys

//const { state, saveCreds } = await useSingleFileAuthState("session.json")


//const { state, saveCreds } = await useSingleFileAuthState("session.json")
//const { state, saveCreds } = useSingleFileAuthState(`./${sessionName}.json`)


const fs = require("fs");
const logg = require('pino')
const qrcode = require('qrcode')
const simple = require('./lib/simple') 
const CFonts = require('cfonts')
const path = require('path')
const { Boom } = require('@hapi/boom')
const _ = require('lodash')
const axios = require ('axios')
const PhoneNumber = require('awesome-phonenumber')
const readline = require('readline');
//const welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
const { color} = require("./lib/color");
const spin = require('spinnies')
const {getRandom, getBuffer,sleep} = require("./lib/myfunc");
if(runWith.includes("eplit")){
}
const connect = require("./server.js")
const PORT = process.env.PORT || 3000 


let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})
process.env.TZ = "Asia/Makassar"
process.on('uncaughtException', console.error)
const pairingCode = process.argv.includes("--pairing")
// Spinner Console
const spinner = { 
  "interval": 120,
  "frames": [
"✖ [░░░░░░░░░░░░░░░]",
"✖ [■░░░░░░░░░░░░░░]",
"✖ [■■░░░░░░░░░░░░░]",
"✖ [■■■░░░░░░░░░░░░]",
"✖ [■■■■░░░░░░░░░░░]",
"✖ [■■■■■░░░░░░░░░░]",
"✖ [■■■■■■░░░░░░░░░]",
"✖ [■■■■■■■░░░░░░░░]",
"✖ [■■■■■■■■░░░░░░░]",
"✖ [■■■■■■■■■░░░░░░]",
"✖ [■■■■■■■■■■░░░░░]",
"✖ [■■■■■■■■■■■░░░░]",
"✖ [■■■■■■■■■■■■░░░]",
"✖ [■■■■■■■■■■■■■░░]",
"✖ [■■■■■■■■■■■■■■░]",
"✖ [■■■■■■■■■■■■■■■]"
  ]}
let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}
let spins = getGlobalSpinner(false)
const start = (id, text) => {
spins.add(id, {text: text})
}
const success = (id, text) => {
spins.succeed(id, {text: text})

}

CFonts.say('fearless', {
  font: 'chrome',
  align: 'left',
  gradient: ['red', 'magenta']
})


const useStore = !process.argv.includes('--no-store')
const doReplies = !process.argv.includes('--no-reply')
const useMobile = process.argv.includes('--mobile')

// Read line interface
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const store = makeInMemoryStore({ logger: logg().child({ level: 'silent', stream: 'store' }) })



const connectToWhatsApp = async () => {

 //Function untuk update runtime di database
setInterval(() => {
let data = global.db.data.others['runtime']
if(data){ 
if((new Date - data.lastTime) > (60000*60)){
data.runtime = + new Date
data.lastTime = + new Date
console.log("Runtime di perbarui")
} else data.lastTime = + new Date
} else{ global.db.data.others['runtime'] = {
runtime: + new Date,
lastTime: + new Date
}}},60_000)
  
const {Low} = (await import("lowdb"))
const chalk =  (await import("chalk"))
const { JSONFile } = (await import("lowdb/node"))
global.db = new Low( new JSONFile(`database/database.json`))
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(alice), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
allcommand: [],
anonymous: [],
blockcmd: [],
banned: [],
premium: [],
claim: [],
data: [],
sewa: [],
antispam: [],
dashboard: [],
listerror: [],
respon: {},
sticker: {},
audio: {},
hittoday: [],
clearchat: [],
users: {},
chats: {},
settings : {},
kickon: {},
others: {},
...(global.db.data || {})
}
global.db.chain = _.chain(global.db.data)
}
loadDatabase()


const { state, saveCreds } = await useMultiFileAuthState(path.resolve('./.session'))
//const store = useStore? makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) }) : undefined
const store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) })
const { version, isLatest } = await fetchLatestBaileysVersion()
if (global.db.data) await global.db.write() 

  
  

  

//Funtion agar pesan bot tidak pending  
const getMessage = async (key) => {
if(store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'hallo'
}
}


//Untuk menyimpan session  
const auth = {
creds: state.creds,
/** caching membuat penyimpanan lebih cepat untuk mengirim/menerima pesan */
keys: makeCacheableSignalKeyStore(state.keys,logg().child({ level: 'fatal', stream: 'store' })),
}
 
const connectionOptions = {
version,
printQRInTerminal: !global.usePairingCode,
logger: logg({ level: 'fatal' }),
auth,
getMessage,
//browser: ['IOS','IOS','2.1.0'],
//browser: ['Chrome (Linux)'],
//browser: ['Chrome (Linux)', '', ''],
//browser: Browsers.macOS('Desktop'),
//Jika ubuntu mengalami gangguan, ganti browser di atas
browser: ["Ubuntu","Chrome","20.0.04"],
connectTimeoutMs: 60_000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,

global.alice = simple.makeWASocket(connectionOptions)
connect(alice, PORT)

store.bind(alice.ev)
alice.waVersion = version



if (global.usePairingCode && !alice.authState.creds.registered) {
if (useMobile) throw new Error('Cannot use pairing code with mobile api')

let phoneNumber
if (!!global.pairingNumber) {
phoneNumber = global.pairingNumber.replace(/[^0-9]/g, '')

if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
console.log(chalk.bgBlack(chalk.redBright("Start with your country's WhatsApp code, Example : 62xxx")))
process.exit(0)
}
} else {
phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number : `)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

// Ask again when entering the wrong number
if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
console.log(chalk.bgBlack(chalk.redBright("Start with your country's WhatsApp code, Example : 62xxx")))
