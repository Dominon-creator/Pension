
const form = document.getElementById("paymentForm");

const product = document.getElementById("product");
const currency = document.getElementById("currency");
const amount = document.getElementById("amount");
const frequency = document.getElementById("frequency");

const receipt = document.getElementById("receipt");

const summaryProduct = document.getElementById("summaryProduct");
const summaryFrequency = document.getElementById("summaryFrequency");
const summaryAmount = document.getElementById("summaryAmount");

const currencySymbols = {
    NGN: "₦",
    USD: "$"
};

function formatAmount(value) {
    const selectedCurrency = currency.value;

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: selectedCurrency
    }).format(value);
}

function updateCurrency() {
    if (product.value === "Dollar Pension") {
        currency.value = "USD";
    } else {
        currency.value = "NGN";
    }

    updateSummary();
}

function updateSummary() {
    summaryProduct.textContent = product.value;
    summaryFrequency.textContent = frequency.value;

    const value = Number(amount.value) || 0;
    summaryAmount.textContent = formatAmount(value);
}

// Preselect product from the product page link
const params = new URLSearchParams(window.location.search);
const requestedProduct = params.get("product");

const availableProducts = [
    "PPP",
    "AVC",
    "Dollar Pension",
    "RSA"
];

if (availableProducts.includes(requestedProduct)) {
    product.value = requestedProduct;
}

updateCurrency();

// Update summary when fields change
product.addEventListener("change", updateCurrency);
currency.addEventListener("change", updateSummary);
amount.addEventListener("input", updateSummary);
frequency.addEventListener("change", updateSummary);

// Simulate payment
form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (product.value === "RSA") {
        alert(
            "RSA contributions are generally remitted through the employer's approved process. This demo does not accept direct RSA payments."
        );
        return;
    }

    const customerName =
        document.getElementById("customerName").value.trim();

    const customerEmail =
        document.getElementById("customerEmail").value.trim();

    const customerPhone =
        document.getElementById("customerPhone").value.trim();

    const contributionAmount = Number(amount.value);

    if (!customerName || !customerEmail || !customerPhone) {
        alert("Please complete all customer information fields.");
        return;
    }

    if (!Number.isFinite(contributionAmount) || contributionAmount <= 0) {
        alert("Please enter a valid contribution amount.");
        return;
    }

    // Generate a clearly labelled demo reference
    const randomPart = Math.random().toString(36)
        .substring(2, 8).toUpperCase();

    const reference = "DEMO-" + Date.now() + "-" + randomPart;

    // Fill the demo receipt
    document.getElementById("receiptReference").textContent = reference;
    document.getElementById("receiptName").textContent = customerName;
    document.getElementById("receiptEmail").textContent = customerEmail;
    document.getElementById("receiptProduct").textContent = product.value;
    document.getElementById("receiptFrequency").textContent = frequency.value;
    document.getElementById("receiptAmount").textContent =
        formatAmount(contributionAmount);

    document.getElementById("receiptDate").textContent =
        new Date().toLocaleString("en-NG");

    receipt.hidden = false;

    receipt.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Print receipt
document.getElementById("printReceipt").addEventListener("click", function() {
    window.print();
});

// Start another demo
document.getElementById("newPayment").addEventListener("click", function() {
    form.reset();
    receipt.hidden = true;
    updateCurrency();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
