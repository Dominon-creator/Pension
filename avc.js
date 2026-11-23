
const avcAmount = document.getElementById("avcAmount");
const avcFrequency = document.getElementById("avcFrequency");

const avcAnnualTotal = document.getElementById("avcAnnualTotal");
const avcCalculateBtn = document.getElementById("avcCalculateBtn");
const avcClearBtn = document.getElementById("avcClearBtn");
const avcMessage = document.getElementById("avcMessage");

function calculateAVC() {

    const amount = Number(avcAmount.value);
    const frequency = avcFrequency.value;

    avcMessage.textContent = "";

    if (
        !avcAmount.value ||
        !Number.isFinite(amount) ||
        amount <= 0
    ) {
        avcMessage.textContent =
            "Please enter a valid amount greater than zero.";

        avcAnnualTotal.textContent = "₦0.00";
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

    avcAnnualTotal.textContent = total.toLocaleString(
        "en-NG",
        {
            style: "currency",
            currency: "NGN"
        }
    );

}

function clearAVC() {

    avcAmount.value = "";
    avcFrequency.value = "monthly";

    avcAnnualTotal.textContent = "₦0.00";
    avcMessage.textContent = "";

}

avcCalculateBtn.addEventListener("click", calculateAVC);
avcClearBtn.addEventListener("click", clearAVC);
