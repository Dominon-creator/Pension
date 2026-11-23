
const dollarAmount = document.getElementById("dollarAmount");
const dollarFrequency = document.getElementById("dollarFrequency");

const dollarAnnualTotal = document.getElementById("dollarAnnualTotal");
const dollarCalculateBtn = document.getElementById("dollarCalculateBtn");
const dollarClearBtn = document.getElementById("dollarClearBtn");
const dollarMessage = document.getElementById("dollarMessage");

function calculateDollarContribution() {

    const amount = Number(dollarAmount.value);
    const frequency = dollarFrequency.value;

    dollarMessage.textContent = "";

    if (
        !dollarAmount.value ||
        !Number.isFinite(amount) ||
        amount <= 0
    ) {
        dollarMessage.textContent =
            "Please enter a valid amount greater than zero.";

        dollarAnnualTotal.textContent = "$0.00";
        return;
    }

    let total = 0;

    switch (frequency) {

        case "weekly":
            total = amount * 52;
            break;

        case "monthly":
            total = amount * 12;
            break;

        case "yearly":
            total = amount;
            break;

    }

    dollarAnnualTotal.textContent = total.toLocaleString(
        "en-US",
        {
            style: "currency",
            currency: "USD"
        }
    );

}

function clearDollarCalculator() {

    dollarAmount.value = "";
    dollarFrequency.value = "monthly";

    dollarAnnualTotal.textContent = "$0.00";
    dollarMessage.textContent = "";

}

dollarCalculateBtn.addEventListener(
    "click",
    calculateDollarContribution
);

dollarClearBtn.addEventListener(
    "click",
    clearDollarCalculator
);
