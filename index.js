const dataPhrases = require("./dataPhrases") 

const Twit = require('twit')

var T = new Twit({
    consumer_key:         'wE4gaR6vXoAPMfS5Rf1uN0VGD',
    consumer_secret:      'H6ptH4RvFSjA1R7pE1JCjC3aUjh8IBUPmPd4q5bGAWbDrqIZqJ',
    access_token:         '1401592550922858497-YuMDNABAEOKg5rhmBjukGFo2iDrMxo',
    access_token_secret:  'skFbOesomxn9fFviQeUzlM50uzB1K188NwCoXeelXCTH5',
    timeout_ms:           60*1000,  
})

function retornarTweet(){
    return dataPhrases.map(frase => console.log(`Ingles: ${frase.en} \nEspañol: ${frase.es}`))
}


T.post('statuses/update', 
    { status: retornarTweet() }, (err, data, response) => {
    console.log(data)
})

// T.post('statuses/update', 
//     { status: `Frases En & Es` }, (err, data, response) => {
//     console.log(data)
// })