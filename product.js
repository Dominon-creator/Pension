
const contributionInput = document.getElementById("contribution");
const frequencyInput = document.getElementById("frequency");

const annualTotal = document.getElementById("annualTotal");
const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");
const calculatorMessage = document.getElementById("calculatorMessage");

function calculatePPPContribution() {

    const amount = Number(contributionInput.value);
    const frequency = frequencyInput.value;

    calculatorMessage.textContent = "";

    if (!contributionInput.value || !Number.isFinite(amount) || amount <= 0) {
        calculatorMessage.textContent =
            "Please enter a valid contribution amount greater than zero.";
        annualTotal.textContent = "₦0.00";
        return;
    }

    let annualAmount = 0;

    if (frequency === "weekly") {
        annualAmount = amount * 52;
    }

    else if (frequency === "monthly") {
        annualAmount = amount * 12;
    }

    else if (frequency === "yearly") {
        annualAmount = amount;
    }

    annualTotal.textContent = annualAmount.toLocaleString(
        "en-NG",
        {
            style: "currency",
            currency: "NGN"
        }
    );

}

function clearCalculator() {

    contributionInput.value = "";
    frequencyInput.value = "monthly";
    annualTotal.textContent = "₦0.00";
    calculatorMessage.textContent = "";

}

if (calculateBtn) {
    calculateBtn.addEventListener("click", calculatePPPContribution);
}

if (clearBtn) {
    clearBtn.addEventListener("click", clearCalculator);
}
