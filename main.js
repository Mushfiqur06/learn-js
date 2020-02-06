const TEX_RATE = 0.80

function calculateFinalPurchaseAmount(amt){
    amt = amt + (amt * TEX_RATE)

    return amt
}

var amount = 99.99
amount = calculateFinalPurchaseAmount(amount)
amount