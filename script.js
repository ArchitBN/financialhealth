function calculateScore() {
    let income = parseFloat(document.getElementById("income").value) || 0;
    let expenses = parseFloat(document.getElementById("expenses").value) || 0;
    let trackExpenses = document.getElementById("track_expenses").value;
    let savingsHabit = document.getElementById("savings_habit").value;
    let debts = document.getElementById("debts").value;

    let score = 50; // Base Score

    // Income vs Expenses
    if (expenses > income) score -= 20;
    else if (expenses < income) score += 10;

    // Expense Tracking
    if (trackExpenses === "always") score += 15;
    else if (trackExpenses === "sometimes") score += 5;

    // Savings Habit
    if (savingsHabit === "regularly") score += 15;
    else if (savingsHabit === "sometimes") score += 5;

    // Debts Impact
    if (debts === "large") score -= 20;
    else if (debts === "small") score -= 10;

    // Clamp score between 0 and 100
    score = Math.max(0, Math.min(100, score));

    // Display Result
    document.getElementById("result-container").classList.remove("hidden");
    document.getElementById("result").innerText = `Your Financial Health Score: ${score}`;

    // Chart.js Graph
    const ctx = document.getElementById("scoreChart").getContext("2d");
    if (window.myChart) window.myChart.destroy();
    window.myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Your Score", "Remaining"],
            datasets: [{
                data: [score, 100 - score],
                backgroundColor: ["#38bdf8", "#1e293b"]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

