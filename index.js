require('dotenv').config()
const dataPhrases = require("./data/dataPhrases") 


const {consumer_key,consumer_secret,access_token,access_token_secret} = process.env;

const Twit = require('twit')
var T = new Twit({
    consumer_key:consumer_key,
    consumer_secret:consumer_secret,
    access_token:access_token,
    access_token_secret:access_token_secret,
    timeout_ms:60*1000,  
})

function retornarTweet (){
    const tweet =   dataPhrases[2]
    return tweet;
}
const data = retornarTweet()



T.post('statuses/update', 
    { status: `====================\n🇦🇷 ARG: ${data.es}\n====================\n🇺🇸 Ingles: ${data.en}\n====================` }, (err, data, response) => {
    console.log(data)
})

