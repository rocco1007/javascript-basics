var TAX_RATE = 0.0735;
var PHONE_PRICE = 100;
var ACCESSORY_PRICE = 20;
var SPENDING_THRESHOLD = 400;
var bankAccountBalance = 3000;
var totalPhonesPurchased = 0;

function calculateTax(amount) {
  return amount * TAX_RATE;
}

function calculateFinalPrice(amount) {
  return amount + calculateTax(amount);
}

function formatPrice(amount) {
  return "$" + amount.toFixed(2);
}

function buyPhone() {
  var currentPurchaseAmount = PHONE_PRICE;

  if(currentPurchaseAmount < SPENDING_THRESHOLD) {
    currentPurchaseAmount += ACCESSORY_PRICE;
  }

  return currentPurchaseAmount;
}

function printTotalPrice(price) {
  console.log("Total Purchase is: ", formatPrice(price));
}


while (bankAccountBalance > 0) {
  var phonePrice = buyPhone();
  phonePrice = calculateFinalPrice(phonePrice);
  printTotalPrice(phonePrice);

  var tempBalance = bankAccountBalance - phonePrice;

  if(tempBalance < 0) {
    console.log("You do not have enough money to purchase anymore phones. Your current balance is: ", formatPrice(bankAccountBalance));
    break;
  }

  bankAccountBalance -= phonePrice;
  totalPhonesPurchased++;
  console.log("New account balance: ", bankAccountBalance);
  console.log("Total Phones Purchased: ", totalPhonesPurchased);
}
