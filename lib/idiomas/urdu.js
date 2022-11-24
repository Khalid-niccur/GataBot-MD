const lenguaje = () => { return 'pt' } //Português

//AVISOS DE MENSAGEM
const smsAvisoRG = () => { return `╰⊱✅⊱ *نتیجہ* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *خبردار* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *معلومات* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *غلطی* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *اس کا غلط استعمال کیا۔* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *رپورٹ* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *کامیابی* ⊱💚⊱╮\n\n` }

//PARÂMETROS EM COMANDOS
const smsRowner = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡یہ حکم صرف بوٹ تخلیق کار کے لیے ہے۔!!\`\`\`` }
const smsOwner = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡اس کمانڈ کو میرے مالک کے ذریعہ استعمال کیا جاسکتا ہے۔!!\`\`\`` }
const smsMods = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡صرف ماڈریٹر اور میرا تخلیق کار اس کمانڈ کو استعمال کر سکتے ہیں!!\`\`\`` }
const smsPremium = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡یہ کمان صرف پریمیم صارفین اور میرے تخلیق کار کے لیے دستیاب ہے!!\`\`\`` }
const smsGroup = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡اس کمانڈ کو صرف گروپس میں استعمال کیا جا سکتا ہے۔!!\`\`\`` }
const smsPrivate = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡اس کمانڈ کو صرف پرائیویٹ چیٹس کے لیے استعمال کیا جا سکتا ہے۔!!\`\`\`` }
const smsAdmin = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡یہ حکم صرف منتظمین (ایڈمنز) کے لیے ہے۔!!\`\`\`` }
const smsBotAdmin = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡مجھے ایڈمن بننے کی ضرورت ہے لہذا آپ اس کمانڈ کو استعمال کر سکتے ہیں۔!!\`\`\`` }
const smsUnreg = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡اس کمانڈ کو استعمال کرنے کے لیے آپ کا رجسٹر ہونا ضروری ہے، رجسٹر کرنے کے لیے #verify ٹائپ کریں!!\`\`\`` }
const smsRestrict = () => { return `${global.lenguajeGB['smsAvisoAG']()}\`\`\`¡¡یہ حکم میرے خالق کی طرف سے محدود ہے۔!!\`\`\`` }

//LISTA DE MENUS
const smsTime = () => { return `موجودہ وقت`}
const smsUptime = () => { return `کے دوران چل رہا ہے`}
const smsVersion = () => { return `کا ورژن ${global.packname}`}
const smsTotalUsers = () => { return `کل صارفین`}
const smsMode = () => { return `موڈ میں ہے`}
const smsModePublic = () => { return `عوام`}
const smsModePrivate = () => { return `نجی`}
const smsBanChats = () => { return `ممنوعہ چیٹس`}
const smsBanUsers = () => { return `ممنوعہ صارف`}
const smsPareja = () => { return `ساتھی`}
const smsResultPareja = () => { return `کوئی ساتھی نہیں ہے`}
const smsSaludo = () => { return `👋 !ہائی! خوش آمدید 👋`}
const smsDia = () => { return `🌇 صبح بخیر ⛅`}
const smsTarde = () => { return `🏙️ صبح بخیر 🌤️`}
const smsTarde2 = () => { return `🌆 صبح بخیر 🌥️`}
const smsNoche = () => { return `🌃 شب بخیر 💫`}
const smsListaMenu = () => { return `⊹ مینوز کی فہرست ⊹`}
const smsLista1 = () => { return `🌟 BOT معلومات 🌟`}
const smsLista2 = () => { return `💖 خالق 💖`}
const smsLista3 = () => { return `🎁 عطیہ 🎁`}
const smsLista4 = () => { return `🚀 رفتار 🚀`}
const smsLista5 = () => { return `💡 مینو کی معلومات 💡`}
const smsLista6 = () => { return `🌀 مکمل مینو 🌀`}
const smsLista7 = () => { return `🐈 IKRATOS-BOT انسٹال کریں۔ 🐈`}
const smsLista8 = () => { return `🍄 سب بوٹ بنیں۔ 🍄`}
const smsLista9 = () => { return `📄 شرائط، ضوابط اور رازداری 📄\n`}
const smsLista10 = () => { return `🌟 ایڈونچر اور ٹاپ 🌟`}
const smsLista11 = () => { return `🏆 ورلڈ ٹاپ 🏆`}
const smsLista12 = () => { return `🏅 پریمیم صارفین 🏅`}
const smsLista13 = () => { return `🎟️ ایک پریمیم صارف بنیں۔ 🎟️`}
const smsLista14 = () => { return `🛣️ مشنز 🛣️`}
const smsLista15 = () => { return `⚗️ آر پی جی مینو ⚗️`}
const smsLista16 = () => { return `🏪 دکان کی خریداری 🏪`}
const smsLista17 = () => { return `🎒 انوینٹری 🎒\n`}
const smsLista18 = () => { return `🌟 ملٹی میڈیا 🌟`}
const smsLista19 = () => { return `📲 ڈاؤن لوڈ مینو 📲`}
const smsLista20 = () => { return `🔍 تلاش کا مینو 🔍`}
const smsLista21 = () => { return `🛰️ کنورٹر مینو 🛰️`}
const smsLista22 = () => { return `🧰 آڈیو موڈیفائر مینو 🧰\n`}
const smsLista23 = () => { return `🌟 مزہ 🌟`}
const smsLista24 = () => { return `🎡 ڈائنامک گیمز 🎡`}
const smsLista25 = () => { return `🔊 آڈیو مینو 🔊`}
const smsLista26 = () => { return `🎈 اسٹیکرز اور فلٹرز مینو 🎈`}
const smsLista27 = () => { return `✨ اثرات اور لوگوز کا مینو ✨`}
const smsLista28 = () => { return `🌅 لوگوز مینو 2 🌅`}
const smsLista29 = () => { return `⛩️ بے ترتیب میمز اور اینیمز ⛩️`}
const smsLista30 = () => { return `🔞 بالغوں کے لیے کنٹرول +18 🔞\n`}
const smsLista31 = () => { return `🌟 تعریفیں 🌟`}
const smsLista32 = () => { return `🔰 گروپس کے لیے مینو 🔰`}
const smsLista33 = () => { return `📑 فہرستوں کی اقسام 📑`}
const smsLista34 = () => { return `⚙️ کنفیگریشن سینٹر ⚙️`}
const smsLista35 = () => { return `💎 مالک کا مینو 💎`}

//main.js
const smsWelcome = () => { return '*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ خوش آمدید!!*\n┊💖 @user\n┊📄 *گروپ کی تفصیل پڑھیں*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n\n@desc'}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *اس نے گروپ چھوڑ دیا، جلد واپس آجاؤ* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user اب آپ اس گروپ کے ایڈمنسٹریٹر ہیں۔!!*'}
const smsSdemote = () => { return '*@user اس گروپ میں اب ایڈمنسٹریٹر نہیں ہے۔!!*'}
const smsSdesc = () => { return '*نئا گروپ کی تفصیل یہ ہے۔:*\n\n@desc'}
const smsSsubject = () => { return '*نئا گروپ کا نام ہے۔:*\n\n@subject'}
const smsSicon = () => { return '*اس گروپ فوٹو کو تبدیل کر دیا گیا ہے۔!!*'}
const smsSrevoke = () => { return '*اب یہ اس گروپ کا نیا لنک ہے۔!!*\n\n*@revoke*'}
const smsConexion = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 🟢 کنکشن ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ واٹس ایپ پر کامیاب کنکشن  😺\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsClearTmp = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ خودکار صفائی TMP ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ TMP فولڈر میں فائلوں کو کامیابی سے حذف کر دیا گیا ہے 😼✨\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsCargando = () => { return `😸 لوڈ ہو رہا ہے۔...\n`}

//_allantilink.js
const smsTextoYT = () => { return '😻 Super ikratos-MD - WhatsApp '}
const smsApagar = () => { return '❌ غیر فعال کریں۔'}
const smsEncender = () => { return '✅ محرک کریں'}
const smsEnlaceTik = () => { return `*اس گروپ میں ایک ممنوعہ ٹک ٹاک لنک کا پتہ چلا*\n\n*میں اب بھی آپ کو حذف کر رہا ہوں*`}
const smsEnlaceYt = () => { return `*اس گروپ میں ایک ممنوعہ یوٹیوب لنک کا پتہ چلا*\n\n*میں اب بھی آپ کو حذف کر رہا ہوں*`}
const smsEnlaceTel = () => { return `*اس گروپ میں ایک ممنوعہ ٹیلیگرام لنک کا پتہ چلا*\n\n*میں اب بھی آپ کو حذف کر رہا ہوں*`}
const smsEnlaceFb = () => { return `*اس گروپ میں ایک ممنوعہ فیس بک لنک کا پتہ چلا*\n\n*میں اب بھی آپ کو حذف کر رہا ہوں*`}
const smsEnlaceIg = () => { return `*اس گروپ میں ایک ممنوعہ انسٹاگرام لنک کا پتہ چلا*\n\n*میں اب بھی آپ کو حذف کر رہا ہوں*`}
const smsEnlaceTw = () => { return `*اس گروپ میں ایک ممنوعہ ٹویٹر لنک کا پتہ چلا*\n\n*میں اب بھی آپ کو حذف کر رہا ہوں*`}
const smsAllAdmin = () => { return `*دخل اندازی کرنے والوں کو ہٹانے کے لیے مجھے ایک ایڈمنسٹریٹر بننے کی ضرورت ہے*`}
const smsSoloOwner = () => { return `*میرے خالق کو فنکشن کو چالو کرنا چاہیے۔*`}

//handler.js
const smsCont1 = () => { return `*🔴 کمانڈ کی ناکامی۔ 🔴*`}
const smsCont2 = () => { return `*⚠️ PLUGIN:*`}
const smsCont3 = () => { return `*⚠️ صارف:*`}
const smsCont4 = () => { return `*⚠️ کمانڈ:*`}
const smsCont5 = () => { return `*⚠️ غلطی:*`}
const smsCont6 = () => { return `*❗ حل کرنے کے لیے #reporte کمانڈ کا استعمال کرتے ہوئے اس پیغام کی اطلاع دیں*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*کوئی ہیرے نہیں!! 💎 آپ ریموٹ کے ساتھ دکان پر جا سکتے ہیں*`}
const smsCont8 = () => { return ` *ہیرا 💎 استعمال شدہ*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*مجھے سطح کی ضرورت ہے۔ ➡️*`}
const smsCont10 = () => { return `*اس کمانڈ کو استعمال کرنے کے لیے۔ آپ کی موجودہ سطح ہے۔ ➡️*`}
const smsCont11 = () => { return `*کمانڈ کے ساتھ اپ ڈیٹ کریں۔*`}
const smsCont12 = () => { return `ایک بڑا گروپ!! 😼`}
const smsCont13 = () => { return `کسی نے شرکت کی۔!! 🥳`}
const smsCont14 = () => { return `کوئی رہ گیا۔!! 🧐`}
const smsCont15 = () => { return `*ہائی*`}
const smsCont16 = () => { return `*ویڈیو کالز* 📲`}
const smsCont17 = () => { return `*کالز* 📞`}
const smsCont18 = () => { return `*وہ مجاز نہیں ہیں لہذا میں آپ کو بلاک کردوں گا*\n\n*اگر حادثاتی طور پر اس شخص سے رابطہ کریں جس نے یہ بوٹ بنایا ہے*`}
const smsCont19 = () => { return `مخالف اخراج`}
const smsCont20 = () => { return `*┃✤ نام:*`}
const smsCont21 = () => { return `*┃✤ حذف شدہ پیغام بھیجنا...*`}

//_anti-internacional.js
const smsInt1 = () => { return `*یہ نمبر*`}
const smsInt2 = () => { return `*اس گروپ میں اجازت نہیں ہے۔!!*`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}*چونکہ آپ اس گروپ میں ایڈمنسٹریٹر ہیں، آپ کو نہیں ہٹایا جائے گا*`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}*اس گروپ میں ایک ممنوعہ واٹس ایپ لنک کا پتہ چلا ہے*\n\n*میں اب بھی آپ کو حذف کر رہا ہوں*`}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}اس گروپ میں HTTPS پر مشتمل ایک ممنوعہ لنک کا پتہ چلا ہے\n\nمیں اب بھی آپ کو حذف کر رہا ہوں`}

//_antispam.js
const smsNoSpam = () => { return `🤨 سپیم نہ کریں، آپ ${global.packname} استعمال نہیں کر سکتے  کو منٹ تک ${60000 / 1000 - 59} `}

//_antispam_.js
const smsNoSpam2 = () => { return `${60000 / 1000 - 59} منٹ کے بعد پابندی لگا دی گئی۔ براہ کرم سپیم نہ کریں۔!!`}

//Texto
const smsConMenu = () => { return `☘️ MENU`}

//Erro
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ایک غیر متوقع خرابی واقع ہوئی ہے.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ایک تکلیف پیدا ہوئی۔ دوبارہ کوشش کریں.\`\`\``}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`کچھ غلط ہو گیا، اس کمانڈ کے استعمال کی اطلاع دیں۔:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `نہیں!!! 🤬 یہ لفظ کہیں۔`}
const smsToxic2 = () => { return `یہ منع ہے زہریلا نہ ہو۔`}
const smsToxic3 = () => { return `*انتباہ*\n⚠️`}
const smsToxic4 = () => { return `😭 میں معافی چاہتا ہوں۔`}
const smsToxic5 = () => { return `☢️ اینٹی ٹاکسک کو غیر فعال کریں۔`}
const smsToxic6 = () => { return `میں نے آپ کو کئی بار خبردار کیا!!`}
const smsToxic7 = () => { return `آپ نے تمام 4 وارننگز کو پاس کر لیا ہے اب آپ کو ختم کر دیا جائے گا 🙄`}

//fazer compras
const eExp = () => { return '⚡ تجربہ' } 
const eDiamante = () => { return '💎 ہیرا' } 
const eDiamantePlus = () => { return '💎 + ہیرا' }
const eToken = () => { return '🪙 ٹوکن' } 
const eEsmeralda = () => { return '💚 زمرد' } 
const eJoya = () => { return '♦️ زیور' }
const eMagia = () => { return '🌀 جادو' } 
const eOro = () => { return '👑 سونا' } 
const eGataCoins = () => { return '🐱 گیٹا کوائن' }
const eGataTickers = () => { return '🎫 بلی ٹکرز' } 
const eEnergia = () => { return '✨ توانائی' }

const ePocion = () => { return '🥤 دوائیاں' }
const eAgua = () => { return '💧 پانی' }
const eBasura = () => { return '🗑 ردی کی ٹوکری' }
const eMadera = () => { return '🪵 لکڑی' }
const eRoca = () => { return '🪨 پتھر' }
const ePiedra = () => { return '🥌 پتھر' }
const eCuerda = () => { return '🕸️ تار' }
const eHierro = () => { return '⛓️ Iron' }
const eCarbon = () => { return '⚱️ Coal' }
const eBotella = () => { return '🍶 Bottle' }
const eLata = () => { return '🥫 Can' }
const eCarton = () => { return '🪧 Paperboard' } 

const eEletric = () => { return '💡 Electricity' }
const eBarraOro = () => { return '〽️ Gold bar' }
const eOroComun = () => { return '🧭 Common Gold' }
const eZorroG = () => { return '🦊🌫️ Big Fox' }
const eBasuraG = () => { return '🗑🌫️ Super Trash' }
const eLoboG = () => { return '🐺🌫️ Super Wolf' }
const eMaderaG = () => { return '🛷🌫️ Super Wood' }
const eEspada = () => { return '⚔️ Sword' }
const eCarnada = () => { return '🪱 Bait' }
const eBillete = () => { return '💵 Banknotes' }
const ePinata = () => { return '🪅 Pinata' }
const eGancho = () => { return '🪝 Hook' }
const eCanaPescar = () => { return '🎣 Fishing Rod' } 

const eCComun = () => { return '📦 Common Box' }
const ePComun = () => { return '🥡 Uncommon Box' }
const eCMistica = () => { return '🗳️ Mythic Box' }
const eCMascota = () => { return '📫 Pet Box' }
const eCJardineria = () => { return '💐 Gardening Box' }
const eClegendaria = () => { return '🎁 Legendary Box' } 

const eUva = () => { return '🍇 Grape' }
const eManzana = () => { return '🍎 Apple' }
const eNaranja = () => { return '🍊 Orange' }
const eMango = () => { return '🥭 Mango' }
const ePlatano = () => { return '🍌 Banana' } 

const eSUva = () => { return '🌾🍇 Grape seeds' }
const eSManzana = () => { return '🌾🍎 Apple seeds' }
const eSNaranja = () => { return '🌾🍊 Orange seeds' }
const eSMango = () => { return '🌾🥭 Mango Seeds' }
const eSPlatano = () => { return '🌾🍌 Banana seeds' } 

const eCentauro = () => { return '🐐 Centaur' }
const eAve = () => { return '🦅 Bird' }
const eGato = () => { return '🐈 Cat' }
const eDragon = () => { return '🐉 Dragon' }
const eZorro = () => { return '🦊 Fox' }
const eCaballo = () => { return '🐎 Horse' }
const eFenix = () => { return '🕊️ Phoenix' }
const eLobo = () => { return '🐺 Wolf' }
const ePerro = () => { return '🐶 Dog' } 

const eAMascots = () => { return '🍖 Pet Food' }
const eCCentauro = () => { return '🐐🥩 Centaur Food' }
const eCAve = () => { return '🦅🥩 Bird Food' }
const eCMagica = () => { return '🌀🥩 Magic Food' }
const eCDragon = () => { return '🐉🥩 Dragon Food' }
const eACaballo = () => { return '🐎🥩 Horse Food' }
const eCFenix = () => { return '🕊️🥩 Phoenix Food' } 


//config-on y off.js
const smsWel1 = () => { return `🎉 BEM-VINDO`}
const smsWel2 = () => { return `Mensagem de boas-vindas para novos membros em grupos`}
const smsDete1 = () => { return `🔔 AVISOS`}
const smsDete2 = () => { return `Avisos de ações dentro do Grupo`}
const smsANivel1 = () => { return `🆙 NÍVEL AUTOMÁTICO`}
const smsANivel2 = () => { return `Suba de nível todos automaticamente; (Aplica recompensas por subir de nível)`}
const smsRestri1 = () => { return `⛔ RESTRINGIR`}
const smsRestri2 = () => { return `Ativar função para adicionar ou remover pessoas em Grupos`}
const smsLlamar1 = () => { return `🚫 ANTI CHAMADAS`}
const smsLlamar2 = () => { return `Bloquear pessoas que fazem chamadas`}
const smsAntiSp1 = () => { return `🚯 ANTI SPAM`}
const smsAntiSp2 = () => { return `Proibir o Uso de Comandos quando alguém realizar algum tipo de Spam`}
const smsModP1 = () => { return `🌐 MODO PÚBLICO`}
const smsModP2 = () => { return `Ativar função para que todos possam usar o GataBot`}
const smsModAd1 = () => { return `🛂 MODO ADMINISTRADOR`}
const smsModAd2 = () => { return `Apenas Admins poderão usar o GataBot em Grupos`}
const smsLect1 = () => { return `✅ LEITURA AUTOMÁTICA`}
const smsLect2 = () => { return `Deixar mensagens ou chats como lidos`}
const smsTempo1 = () => { return `🐈 BOT TEMPORÁRIO`}
const smsTempo2 = () => { return `Função que permite permanência temporária em Grupos`}
const smsStik1 = () => { return `🎠 ADESIVOS`}
const smsStik2 = () => { return `Ative o envio automático de Stickers para todos`}
const smsStickA1 = () => { return `🪄 ADESIVOS AUTOMÁTICOS`}
const smsStickA2 = () => { return `Vídeos, Gifs, imagens, links jpg ou jpeg; Eles serão convertidos em adesivos automaticamente`}
const smsReacc1 = () => { return `🤡 REAÇÃO `}
const smsReacc2 = () => { return `Habilitar o envio automático de Reações às mensagens`}
const smsAudi1 = () => { return `🔊 ÁUDIO`}
const smsAudi2 = () => { return `Habilite o envio automático de áudios para todos`}
const smsModHor1 = () => { return `🔞 MODO QUENTE`}
const smsModHor2 = () => { return `Mostrar conteúdo adulto nos bate-papos`}
const smsAntitoc1 = () => { return `☢️ ANTI TÓXICO`}
const smsAntitoc2 = () => { return `Envie Avisos para as pessoas que insultam`}
const smsModOb1 = () => { return `👀 MODO DE OBSERVAÇÃO`}
const smsModOb2 = () => { return `Torne imagens, gifs e vídeos visíveis para todos`}
const smsAntiEli1 = () => { return `🗑️ ANTI EXCLUSÃO`}
const smsAntiEli2 = () => { return `Todas as mensagens excluídas serão encaminhadas para o Chat ou Grupo`}
const smsAntiInt1 = () => { return `🌏 ANTI INTERNACIONAL`}
const smsAntiInt2 = () => { return `Elimine Números Internacionais considerados falsos`}
const smsAntiE1 = () => { return `🔗 ANTI-LINKS`}
const smsAntiE2 = () => { return `Excluir pessoas que enviam links de grupos do WhatsApp`}
const smsAntiEE1 = () => { return `🔗 ANTI-LINKS 2`}
const smsAntiEE2 = () => { return `Eliminar Personas que envíen enlaces que contengan https`}
const smsAntiTT1 = () => { return `🔗 ANTI TIK TOK`}
const smsAntiTT2 = () => { return `Remover pessoas que enviam links do TikTok`}
const smsAntiYT1 = () => { return `🔗 ANTI YOUTUBE`}
const smsAntiYT2 = () => { return `Remover pessoas que enviam links do YouTube`}
const smsAntiTEL1 = () => { return `🔗 ANTI TELEGRAM`}
const smsAntiTEL2 = () => { return `Remover pessoas que enviam links de Telegram`}
const smsAntiFB1 = () => { return `🔗 ANTI FACEBOOK`}
const smsAntiFB2 = () => { return `Remover pessoas que enviam links do Facebook`}
const smsAntiIG1 = () => { return `🔗 ANTI INSTAGRAM`}
const smsAntiIG2 = () => { return `Remover pessoas que enviam links do Instagram`}
const smsAntiTW1 = () => { return `🔗 ANTI TWITTER `}
const smsAntiTW2 = () => { return `Remover pessoas que enviam links do Twitter`}
const smsSOLOP1 = () => { return `⚜️ APENAS PRIVADO`}
const smsSOLOP2 = () => { return `Permitir que seja usado apenas em bate-papos privados`}
const smsSOLOG1 = () => { return `⚜️ APENAS GRUPOS`}
const smsSOLOG2 = () => { return `Permitir que seja usado apenas em bate-papos em grupo`}
const smsConfi1 = () => { return `DEFINIÇÕES`}
const smsConfi2 = () => { return `*Olá!*`}
const smsConfi3 = () => { return `┃ *Selecione uma opção da lista*`}
const smsConfi4 = () => { return `┃ *Para começar a configurar*`}
const smsConfi5 = () => { return `┃● *Avisos de configuração:*`}
const smsConfi6 = () => { return `┃ ✅ ⇢ *Função ativada*`}
const smsConfi7 = () => { return `┃ ❌ ⇢ *Função desabilitada*`}
const smsConfi8 = () => { return `┃ ⚠️ ⇢ *Este bate-papo não é um grupo*`}
const smsConfi9 = () => { return `┃ *Recomendação: Para ver a configuração*\n┃ *Complete use este Menu de Grupo*\n┃`}
const smsConfi10 = () => { return `*~ CENTRO DE CONFIGURAÇÃO*`}
const smsParaAdmins = () => { return `PARA ADMINISTRADORES E CRIADOR: GRUPOS`}
const smsParaAdYOw = () => { return `PARA ADMINISTRADORES E CRIADORES: CHATS`}
const smsParaOw = () => { return `PARA CRIADOR: CHATS`}
const smsNoGg = () => { return ` | ⚠️`}
const smsMens1 = () => { return `COMANDO`} 
const smsMens2 = () => { return `ATUALMENTE`} 
const smsMens3 = () => { return `NESTE`} 
const smsMens4 = () => { return `BOT`} 
const smsMens5 = () => { return `Bate-papo`} 

//Error2
const smsMensError1 = () => { return `❕COMANDO DE RELATÓRIO ❕`} 
const smsMensError2 = () => { return `O seguinte comando está falhando`} 

//_antiviewonce.js
const smsAntiView = () => { return `*NADA PODE SER ESCONDIDO* 😎`} 

//_autolevelup.js
const smsAutoLv1 = () => { return `🎖️ NOVO NÍVEL 🎖️`} 
const smsAutoLv2 = () => { return `NÍVEL ANTERIOR:`} 
const smsAutoLv3 = () => { return `NÍVEL ATUAL:`} 
const smsAutoLv4 = () => { return `ALCANCE:`} 
const smsAutoLv5 = () => { return `DATA:`} 
const smsAutoLv6 = () => { return `Você atingiu um novo nível!!!`} 
const smsAutoLv7 = () => { return `🥳 RECOMPENSA PELO SEU NOVO NÍVEL`} 

//_autosticker.js
const smsAutoStik = () => { return `${lenguajeGB['smsAvisoFG']()}*O VÍDEO NÃO DEVE DURAR MAIS DE 7 SEGUNDOS.*`} 

//_expired.js
const smsBottem1 = () => { return `*SAIR DO GRUPO!!! 🤝 SE VOCÊ QUER VOLTAR, USE O COMANDO _#bottemporal_ PARA VOLTAR AO GRUPO!!*`} 
const smsBottem2 = () => { return `*💕 ASSISTÊNCIA AO USUÁRIO*\n*_${global.ig}_*\n`} 
const smsBottem3 = () => { return `VEJO VOCÊ EM BREVE 💖`} 

//_premium.js
const smsPremI = () => { return `*¡SEU TEMPO PREMIUM ACABOU!* 🎟️\n*PARA OBTER UM NOVO PASSE PREMIUM USE O COMANDO:*\n*#pass prem*`} 

//afk-_afk.js
const smsAfkM1 = () => { return `${lenguajeGB['smsAvisoEG']()}*VOCÊ DEIXOU DE SER OCIOSO AFK*`} 
const smsAfkM2 = () => { return `*O MOTIVO DA INATIVIDADE FOI:*`} 
const smsAfkM3 = () => { return `*TEMPO INATIVO:*`} 
const smsAfkM4 = () => { return `${lenguajeGB['smsAvisoAG']()}*NÃO MARQUE ESSE USUÁRIO!! ESTÁ INATIVO*`} 
const smsAfkM5 = () => { return `*MOTIVO DA INATIVIDADE AFK:*`} 
const smsAfkM6 = () => { return `*MOTIVO DA INATIVIDADE AFK: NÃO ESPECIFICAR O MOTIVO DA INATIVIDADE*`} 

//afk-afk.js
const smsAfkM1A = () => { return `${lenguajeGB['smsAvisoAG']()}*NÃO MARQUE*`} 
const smsAfkM1B = () => { return `*ESTARÁ INATIVO AFK*\n\n*MOTIVO DA INATIVIDADE AFK*`} 

//anonymous_chat.js
const smsChatAn1 = () => { return `${lenguajeGB['smsAvisoFG']()}*VOCÊ NÃO ESTÁ NO CHAT ANÔNIMO*`} 
const smsChatAn2 = () => { return `*SE QUISER INICIAR UM CHAT ANÔNIMO USE O COMANDO #start OU ACESSE O BOTÃO ABAIXO*\n`} 
const smsChatAn3 = () => { return `⚡ INICIAR CHAT ANÔNIMO`} 
const smsChatAn4 = () => { return `${lenguajeGB['smsAvisoRG']()}🪐 *VOCÊ SAIU DO CHAT ANÔNIMO*`} 
const smsChatAn5 = () => { return `${lenguajeGB['smsAvisoAG']()}*O OUTRO USUÁRIO SAIU DO CHAT ANÔNIMO*`}  
const smsChatAn6 = () => { return `*SE QUISER IR PARA OUTRO CHAT ANÔNIMO USE O COMANDO #start OU ACESSE O BOTÃO ABAIXO*\n`} 
const smsChatAn7 = () => { return `${lenguajeGB['smsAvisoAG']()}*VOCÊ AINDA ESTÁ EM UM CHAT ANÔNIMO OU ESPERANDO QUE ALGUÉM ENTRE NO CHAT*`} 
const smsChatAn8 = () => { return `*SE QUISER SAIR DO CHAT ANÔNIMO USE O COMANDO #leave OU VOCÊ PODE USAR O BOTÃO ABAIXO*\n`} 
const smsChatAn9 = () => { return `🍁 SAIR DO CHAT ANÔNIMO`} 
const smsChatAn10 = () => { return `${lenguajeGB['smsAvisoEG']()}✨ *ELES PODEM CONVERSAR AGORA*`} 
const smsChatAn11 = () => { return `*ALGUÉM ENTROU NO CHAT ANÔNIMO!!*`} 
const smsChatAn12 = () => { return `❇️ OUTRO USUÁRIO`} 
const smsChatAn13 = () => { return `${lenguajeGB['smsAvisoRG']()}🐈 *ESPERANDO ALGUÉM ENTRAR NO CHAT ANÔNIMO, SEJA PACIENTE*`} 

//Botones de Menú 
const smsBotonM1 = () => { return `⚡ MENU INICIAR ⚡`} 
const smsBotonM2 = () => { return `💫 MENU COMPLETO 💫`} 
const smsBotonM3 = () => { return `🎒 INVENTÁRIO 🎒`} 
const smsBotonM4 = () => { return `USUÁRIOS`}
const smsBotonM5 = () => { return `VARIAR`}
const smsBotonM6 = () => { return `NÍVEL`}
const smsBotonM7 = () => { return `PREMIUM`}
const smsTex1 = () => { return '*MENU DE PESQUISA*'}
const smsTex2 = () => { return '*MODIFICADOR DE ÁUDIO*'}
const smsTex3 = () => { return '*MENU +18*'}
const smsTex4 = () => { return '*CONTEÚDO DINÂMICO*'}
const smsTex5 = () => { return '*PESQUISE E BAIXE*'}
const smsTex6 = () => { return '*MENU +18 PREMIUM*'}
const smsTex7 = () => { return '⠇ *Vídeos aleatórios, alta qualidade*\n⠇ *E mais duração*'}
const smsTex8 = () => { return '*MENU DO CONVERSOR*'}
const smsTex9 = () => { return '*MENU DE DOWNLOADS*'}
const smsTex10 = () => { return '*MENU DE JOGOS DINÂMICOS*'}
const smsTex11 = () => { return '*MENU PARA GRUPOS*'}
const smsTex12 = () => { return '*MENU DE FERRAMENTAS*'}
const smsTex13 = () => { return '*MENU DE INFORMAÇÕES*'}
const smsTex14 = () => { return '*MENU DE EFEITOS E LOGOTIPOS*'}
const smsTex15 = () => { return '*MENU DE LOGOTIPOS 2*'}
const smsTex16 = () => { return 'MENU DE ÁUDIO'}
const smsTex17 = () => { return '*NÃO É NECESSÁRIO USAR PREFIXO NOS ÁUDIOS*'}
const smsTex18 = () => { return 'LISTA DE ÁUDIO'}
const smsTex19 = () => { return '*VOCÊ PODE SELECIONAR O ÁUDIO!!*'}
const smsTex20 = () => { return '*MENU DO PROPRIETÁRIO*'}
const smsTex21 = () => { return '*RPG MENU*'}
const smsTex22 = () => { return '*MENU DE ADESIVOS E FILTROS*'}
const smsTex23 = () => { return '*MEMES ALEATÓRIOS E MENU DE ANIME*'}

export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10, smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18, smsCont19, smsCont20, smsCont21, smsInt1, smsInt2, smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsNoSpam, smsNoSpam2, smsConMenu, smsMalError, smsMalError2, smsMalError3, smsToxic1, smsToxic2, smsToxic3, smsToxic4, smsToxic5, smsToxic6, smsToxic7, eExp, eDiamante, eDiamantePlus, eToken, eEsmeralda, eJoya, eMagia, eOro, eGataCoins, eGataTickers, eEnergia, ePocion, eAgua, eBasura, eMadera, eRoca, ePiedra, eCuerda, eHierro, eCarbon, eBotella, eLata, eCarton, eEletric, eBarraOro, eOroComun, eZorroG, eBasuraG, eLoboG, eMaderaG, eEspada, eCarnada, eBillete, ePinata, eGancho, eCanaPescar, eCComun, ePComun, eCMistica, eCMascota, eCJardineria, eClegendaria, eUva, eManzana, eNaranja, eMango, ePlatano, eSUva, eSManzana, eSNaranja, eSMango, eSPlatano, eCentauro, eAve, eGato, eDragon, eZorro, eCaballo, eFenix, eLobo, ePerro, eAMascots, eCCentauro, eCAve, eCMagica, eCDragon, eACaballo, eCFenix, smsWel1, smsWel2, smsParaAdmins, smsDete1, smsDete2, smsANivel1, smsANivel2, smsParaAdYOw, smsParaOw, smsRestri1, smsRestri2, smsLlamar1, smsLlamar2, smsModP1, smsModP2, smsModAd1, smsModAd2, smsLect1, smsLect2, smsTempo1, smsTempo2, smsStik1, smsStik2, smsStickA1, smsStickA2, smsReacc1, smsReacc2, smsAudi1, smsAudi2, smsModHor1, smsModHor2, smsAntitoc1, smsAntitoc2, smsModOb1, smsModOb2,
smsAntiEli1, smsAntiEli2, smsAntiInt1, smsAntiInt2, smsAntiE1, smsAntiE2, smsAntiEE1, smsAntiEE2, smsAntiTT1, smsAntiTT2, smsAntiYT1, smsAntiYT2, smsAntiTEL1, smsAntiTEL2, smsAntiFB1, smsAntiFB2, smsAntiIG1, smsAntiIG2, smsAntiTW1, smsAntiTW2, smsSOLOP1, smsSOLOP2, smsSOLOG1, smsSOLOG2, smsNoGg, smsConfi1, smsConfi2, smsConfi3, smsConfi4, smsConfi5, smsConfi6, smsConfi7, smsConfi8, smsConfi9, smsConfi10, smsMens1, smsMens2, smsMens3, smsMens4, smsMens5, smsMensError1, smsMensError2, smsAntiView, smsAutoLv1, smsAutoLv2, smsAutoLv3, smsAutoLv4, smsAutoLv5, smsAutoLv6, smsAutoLv7, smsAntiSp1, smsAntiSp2, smsAutoStik, smsBottem1, smsBottem2, smsBottem3, smsPremI,
smsAfkM1, smsAfkM2, smsAfkM3, smsAfkM4, smsAfkM5, smsAfkM6, smsAfkM1A, smsAfkM1B, smsChatAn1, smsChatAn2, smsChatAn3, smsChatAn4, smsChatAn5, smsChatAn6, smsChatAn7,
smsChatAn8, smsChatAn9, smsChatAn10, smsChatAn11, smsChatAn12, smsChatAn13, smsBotonM1, smsBotonM2, smsBotonM3, smsBotonM4, smsBotonM5, smsBotonM6, smsBotonM7, smsTex1,
smsTex2, smsTex3, smsTex4, smsTex5, smsTex6, smsTex7, smsTex8, smsTex9, smsTex10, smsTex11, smsTex12, smsTex13, smsTex14, smsTex15, smsTex16, smsTex17, smsTex18, smsTex19,
smsTex20, smsTex21, smsTex22, smsTex23};
