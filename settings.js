//Recuerda registrarte en https://dash.swallox.com
import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código  de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 5732000000

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [ 
 ['50231882808','50256037776'] 
 ];
global.mods = []
global.suittag = ["50244765267"]
global.prems = [""]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.vs = '1.0.0'
global.nameqr = 'Yaemiko-MD'
global.namebot = 'Yae miko'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.mitaJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '⪛✰ shiroko -MD ✰⪜'
global.botname = '𖤐 𝗦𝗵𝗶𝗿𝗼𝗸𝗼 • 𝗠𝗗'
global.wm = ''
global.author = 'Made With By 𓆩✧𓆪 𝐍𝐚𝐯𝐢'
global.dev = 'Made With By 𓆩✧𓆪 𝐍𝐚𝐯𝐢'
global.textbot =  'Mitabot • Made With By 𖤐 𝗦𝗵𝗶𝗿𝗼𝗸𝗼 • 𝗠𝗗'
global.etiqueta = 'Sunaookami Shiroko'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.moneda = 'money'
global.welcom1 = '☟︎︎︎ Edita Con El Comando setwelcome'
global.welcom2 = '☟︎︎︎ Edita Con El Comando setbye'
global.banner = 'https://files.catbox.moe/xr1spw.jpg'
global.avatar = 'https://tinyurl.com/258ghupn'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cn ='https://whatsapp.com/channel/0029Vb88DAM0G0XiQes3K42c';

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   


//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
