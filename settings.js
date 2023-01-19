
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ["6285655620413","6281348560680"] //ur owner number
global.ownername = "TOBOT V4" //ur owner name
global.ytname = "YT: Lenttobs" //ur yt chanel name
global.socialm = "Ngapa Bro? Donate La bro etdah" //ur github or insta name
global.location = "Indonesia, Jatim, Lmh" //ur location

//bot bomdy 
global.ownernomer = ["6285655620413","6281348560680"]//ur number
global.premium = ['6285655620413'] //ur premium number
global.botname = 'TOBOT                 ><                LENTOBS'
global.linkz = "https://chat.whatsapp.com/LRCGXKpjpznInErL9t3sAC" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtu.be/BwTSHvgjB7w" //ur website to be displayed
global.botscript = 'https://github.com/DGXeon/Adakadbra' //script link
global.themeemoji = "♥️" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "TOBOT WA\n\n\nMenerima Jasa pembuatan Sticker Gratis\n\n\n\n\n\n\n\nKamu Nanya? Cara Buat sticker Gratis?\n\n\n\n\n\n\n\nNih Nomor Bot:6285791762177" //ur sticker watermark author
global.wm = "TOBOT AI" //ur watermark


global.snk = "hallo\n\n sebelum Menggunakan Bot Whatsaap Di Wajibkan Join Grub Official Bot Whatsaap Kamu Berikut link nya https://chat.whatsapp.com/FEJwHDkXPlgK68V5kq Jika Tidak Join Group Kamu Tidak Akan Mendapatkan akses Menggunakan Bot kami"
global.paymentowner = "08xxxxx"
global.dana = "628xxx"
global.pulsa ="628xxx"
global.gopay = "628xx"


// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Nih Kak Hehehe ><',
    admin: '< ! > Mohon Maaf Fitur Hanya Bisa Di gunakan Oleh Admin',
    botAdmin: '< ! > Mohon Maaf Fitur Ini Bisa Di gunakan Apabila Bot telah Di Angkat Menjadi Admin',
    premime: '< ! > Mohon Maaf Fitur Ini Hanya Bisa Di Gunakan Oleh User Premium',
    owner: '< ! > [Anda Bukan Owner Saya -_-] jangan Menggunakan Fitur ini !!!!!!',
    group: '< ! > Mohon Maaf Fitur Hanya Bisa Di Gunakan Di dalam Group!!',
    private: '< ! > Mohon Maaf Fitur Ini Hanya Bisa di Gunakan di Dalam Private Chat',
    bot: '< ! > Fitur Khusus Bot',
    wait: '⋘ 𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎... ⋙',
    linkm: '< ! > Mana Link Nya?',
    endLimit: '< ! > Limit Kamu Telah Habis!! Tunggu jam 12 malam Atau bisa membeli paket Limit',
    nsfw: '< ! > Fitur Paket Premium Mohon Beli Paket Premium Terlebih dahulu!!',
}

//media target
global.thum = fs.readFileSync("./gambar/maslent.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./gambar/maslent.jpg") //ur logo pic
global.err4r = fs.readFileSync("./gambar/maslent.jpg") //ur error pic
global.thumb = fs.readFileSync("./gambar/maslent.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
