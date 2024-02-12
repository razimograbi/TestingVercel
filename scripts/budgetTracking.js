// Function to display expenses breakdown
function displayExpenses(expenses) {
  const expensesList = document.getElementById("expensesList");
  expensesList.innerHTML = ""; // Clear previous expenses

  Object.keys(expenses).forEach((category) => {
    const expenseItem = document.createElement("li");
    expenseItem.textContent = `${category}: $${expenses[category]}`;
    expensesList.appendChild(expenseItem);
  });
}

// Event listener for month picker change
document.getElementById("monthPicker").addEventListener("change", function () {
  const selectedMonth = this.value;
  const fakeData = {
    "2024-02": {
      // February 2024
      budget: 2000,
      expenses: 500,
      categories: {
        food: 100,
        learning: 300,
        car: 100,
      },
    },
    // Add more months as needed
  };

  if (fakeData[selectedMonth]) {
    const { budget, expenses, categories } = fakeData[selectedMonth];
    const remainingBudget = budget - expenses;
    const budgetUsagePercentage = (expenses / budget) * 100;

    document.getElementById(
      "budgetInfo"
    ).textContent = `In ${selectedMonth}, you have used $${expenses} out of $${budget}. Your remaining budget is $${remainingBudget}.`;
    document.getElementById("budgetDisplay").classList.remove("hidden");

    const budgetFill = document.getElementById("budgetFill");
    budgetFill.style.width = `${budgetUsagePercentage}%`;
    document.getElementById(
      "percentage"
    ).textContent = `${budgetUsagePercentage}%`;

    // Display expenses breakdown
    displayExpenses(categories);
    document.getElementById("expensesDisplay").classList.remove("hidden");
  } else {
    document.getElementById("budgetInfo").textContent =
      "No data available for the selected month.";
    document.getElementById("budgetDisplay").classList.remove("hidden");
    document.getElementById("expensesDisplay").classList.add("hidden");
    budgetFill.style.width = `${0}%`;
    document.getElementById("percentage").textContent = ``;
  }
});

// Function to toggle layout based on window width
// function toggleLayout() {
//   const layoutContainer = document.getElementById("layoutContainer");
//   if (window.innerWidth < 1000) {
//     // Example breakpoint for phones
//     layoutContainer.classList.remove("flex-row");
//     layoutContainer.classList.add("flex-col");
//   } else {
//     layoutContainer.classList.remove("flex-col");
//     layoutContainer.classList.add("flex-row");
//   }
// }

// Initial toggle layout
// toggleLayout();

// Toggle layout on window resize
//window.addEventListener("resize", toggleLayout);
