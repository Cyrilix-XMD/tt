const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };

        router.get('/', async (req, res) => {
            const sessionPath = './session/creds.json';
            if (!fs.existsSync(sessionPath)) {
                return res.json({ error: "Session file missing. Please pair again." });
            }
        
    let num = req.query.number;
        
    if (sessionData) {
        fs.writeFileSync('./session/creds.json', JSON.stringify(sessionData, null, 2));
    }
    
async function XeonPair() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState(`./session`)
     try {
            let EliteProEmpire = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: [ "Ubuntu", "Chrome", "20.0.04" ],
             });
             if(!EliteProEmpire.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await EliteProEmpire.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            EliteProEmpire.ev.on('creds.update', saveCreds)
            EliteProEmpire.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(10000);
                    const sessionXeon = fs.readFileSync('./session/creds.json');
                    const audioxeon = fs.readFileSync('./kongga.mp3');
                    EliteProEmpire.groupAcceptInvite("Kjm8rnDFcpb04gQNSTbW2d");
				const xeonses = await EliteProEmpire.sendMessage(EliteProEmpire.user.id, { document: sessionXeon, mimetype: `application/json`, fileName: `creds.json` });
				EliteProEmpire.sendMessage(EliteProEmpire.user.id, {
                    audio: audioxeon,
                    mimetype: 'audio/mp4',
                    ptt: true
                }, {
                    quoted: xeonses
                });
await EliteProEmpire.sendMessage(EliteProEmpire.user.id, { text: `*╭❍* *SUCCESSFULLY CONNECTED* *❍*
*┊* Please support our channels
*┊*❶  || *ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ* =
https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g
*┊*❷ || *ᴛᴇʟᴇɢʀᴀᴍ* =
https://t.me/elitepro_md
*┊*➌ || *ʏᴏᴜᴛᴜʙᴇ* =
https://youtube.com/@elitepro-empire
*┊* 📛Don't share code with anyone.
*┊* *ᴠɪꜱɪᴛ ᴏᴜʀ ᴡᴇʙꜱɪᴛᴇ ғᴏʀ ᴍᴏʀᴇ*
https://elite-production.vercel.app
*┊* Upload the file on session folder.
*╰═❍* *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ*` }, {quoted: xeonses});
        await delay(100);
        return await removeFile('./session');
        process.exit(0)
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    XeonPair();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./session');
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await XeonPair()
});

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})

module.exports = router
