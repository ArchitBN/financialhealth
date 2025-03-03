function calculateScore() {
    let age = document.getElementById("age").value;
    let income = document.getElementById("income").value;
    let expenses = document.getElementById("expenses").value;
    let saving = document.getElementById("save-income").value;
    let debts = document.getElementById("debts").value;
    let investing = document.getElementById("investing").value;
    let reviewFinances = document.getElementById("review-finances").value;

    let score = 0;

    if (saving === "Yes, regularly") score += 20;
    if (debts === "None") score += 15;
    if (investing === "Confident investor") score += 20;
    if (reviewFinances === "Regularly") score += 15;

    let resultText = "Your Financial Health Score: " + score + "/100";
    document.getElementById("result").innerText = resultText;
}
