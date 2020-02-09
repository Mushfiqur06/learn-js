let bank_balance = 303.91;
const SPENDING_THRESSHOLD = 200;
const PHONE_PRICE = 99.00;
const ACCESSORY_PRICE = 9.00
let amount = 0;
const TEX_RATE = 0.80;

function calculateTexRate(amount){
    return amount * TEX_RATE;
}


while(amount < bank_balance){
    amount = amount + PHONE_PRICE;
    console.log(amount)

    if(amount < SPENDING_THRESSHOLD){
        amount  = amount + ACCESSORY_PRICE;
        console.log(amount)
    }
}

if(amount > bank_balance){
    console.log('You can not affort this purchase')
}