// Static conversion rates (base: USD)
const conversionRates = {
    USD: { USD: 1, EUR: 0.85, INR: 86.45, GBP: 0.75, JPY: 110 },
    EUR: { USD: 1.18, EUR: 1, INR: 87.5, GBP: 0.88, JPY: 129.5 },
    INR: { USD: 0.012, EUR: 0.011, INR: 1, GBP: 0.010, JPY: 1.48 },
    GBP: { USD: 1.33, EUR: 1.14, INR: 100, GBP: 1, JPY: 147.8 },
    JPY: { USD: 0.009, EUR: 0.0077, INR: 0.67, GBP: 0.0068, JPY: 1 }
  };
  
  document.getElementById('convertBtn').addEventListener('click', function() {
    // Get input values
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    // Check for valid input
    if (isNaN(amount) || amount <= 0) {
      document.getElementById('result').innerText = "Please enter a valid amount.";
      return;
    }
  
    // Perform conversion
    const rate = conversionRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
  
    // Display result
    document.getElementById('result').innerText = 
      `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  });
  