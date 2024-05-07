const addButton = document.querySelector('.btn');
const expenseList = document.querySelector('.list');
const totalExpense = document.querySelector('.total h3');

let expenses = [];//to store expense object
let total = 0;//to store total

function expenserender() {  
    let html = "";
    expenses.forEach(expense => { // For each expense, it dynamically creates HTML code with the description, amount, and a delete button
        html += `
            <div class="expense-item">
                <div class="expense-item-description">${expense.description}</div>
                <div class="expense-item-amount">${expense.amount}</div>
                <button class="delete-expense-btn">&times;</button>
            </div>
        `;
    });
    expenseList.innerHTML = html;
    totalExpense.innerText = `Total expense = Rs$ {total}`;
}

function addExpense() {
    const description = prompt("Enter Expense Description: ");
    const amount = parseFloat(prompt("Enter Expense Amount"));

    if (description && amount) {
        const expense = {
            description: description,
            amount: amount
        };
        expenses.push(expense); //both description and amount are provided, it creates an expense object with these values and pushes it into the expenses array.
        total += amount;
        expenserender();
    }
}

function deleteExpense(index) {
    total -= expenses[index].amount;
    expenses.splice(index, 1); //splice() to remove the expense object from the expenses array.
    expenserender();
}

addButton.addEventListener("click", addExpense);

expenseList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-expense-btn")) {
        const index = Array.from(event.target.parentNode.children).indexOf(event.target.parentNode);
        deleteExpense(index); //When a delete button is clicked, it finds the index of the corresponding expense item and calls deleteExpense() to remove it
    }
});
