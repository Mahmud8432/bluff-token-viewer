// Bluff fake balance & price simulator
let balance = 12450.33;
let price = 1.00;

function updateDisplay() {
  document.getElementById("balance").innerText = balance.toFixed(2) + " USDT";
  document.getElementById("price").innerText = "$" + price.toFixed(2);
}

// Simulate market fluctuations
setInterval(() => {
  let change = (Math.random() - 0.5) * 0.02;
  price += change;
  updateDisplay();
}, 3000);

window.onload = updateDisplay;
