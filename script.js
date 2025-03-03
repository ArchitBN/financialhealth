function calculateScore() {
    let income = parseFloat(document.getElementById("income").value) || 0;
    let expenses = parseFloat(document.getElementById("expenses").value) || 0;
    let trackExpenses = document.getElementById("track_expenses").value;
    let savingsHabit = document.getElementById("savings_habit").value;
    let debts = document.getElementById("debts").value;
    let goals = document.getElementById("goals").value;
    let investingExperience = document.getElementById("investing_experience").value;
    let reviewFrequency = document.getElementById("review_frequency").value;

    let savings = income - expenses;
    let score = 50;

    if (income > expenses) score += 20;
    if (savings > (income * 0.2)) score += 15;
    if (trackExpenses === "always") score += 10;
    if (savingsHabit === "regularly") score += 10;
    if (debts === "none") score += 10;
    if (goals === "always") score += 5;
    if (investingExperience === "advanced") score += 10;
    if (reviewFrequency === "frequently") score += 5;

    document.getElementById("result").innerText = "Your Financial Health Score: " + score + "/100";
    document.getElementById("result-container").classList.remove("hidden");
    generateChart(score);
}

function generateChart(score) {
    let ctx = document.getElementById('scoreChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Score', 'Remaining'],
            datasets: [{
                data: [score, 100 - score],
                backgroundColor: ['#4CAF50', '#ddd']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}
