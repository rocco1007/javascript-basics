var SPENDING_THRESHOLD = 500;
var PHONE_PRICE = 199.99;
var ACCESSORY_PRICE = 19.99;
var TAX_RATE = 0.0735;

var bank_account_balance = 3458.54;
var purchaseAmount = 0;

function calculateTax(amount) {
  return amount * TAX_RATE;
}

function formatAmount(amount) {
  return "$" + amount.toFixed(2);
}

while (purchaseAmount < bank_account_balance) {
  purchaseAmount += PHONE_PRICE;

  if (purchaseAmount < SPENDING_THRESHOLD) {
      purchaseAmount += ACCESSORY_PRICE;
  }
}

purchaseAmount += calculateTax(purchaseAmount);

console.log("Total Purchase is: ", formatAmount(purchaseAmount));
if(purchaseAmount > bank_account_balance) {
  console.log("You can not afford this purchase!");
}
