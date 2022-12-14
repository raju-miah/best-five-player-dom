// JS Start

// Common Function

function getTheOrderList() {
    const orderList = document.getElementById('order-list');
    return orderList;
}

function getAllPlayersList(elementId, btnId) {
    const playerList = document.getElementById('order-list').childElementCount;
    if (playerList === 5) {
        alert('you can select only 5 player');
        return true;
    } else {
        const element = document.getElementById(elementId);
        const elementText = element.innerText;

        const playerList = getTheOrderList();

        const li = document.createElement('li');
        const liText = document.createTextNode(elementText);
        li.appendChild(liText);
        playerList.appendChild(li);
        document.getElementById(btnId).disabled = true;
    }

}

// add event handler for player 1 btn
document.getElementById('btn-1').addEventListener('click', function () {
    getAllPlayersList('messi', 'btn-1');
});

// add event handler for player 2 btn
document.getElementById('btn-2').addEventListener('click', function () {
    getAllPlayersList('neymar', 'btn-2');
});

// add event handler for player 3 btn
document.getElementById('btn-3').addEventListener('click', function () {
    getAllPlayersList('mbappe', 'btn-3');
});

// add event handler for player 4 btn
document.getElementById('btn-4').addEventListener('click', function () {
    getAllPlayersList('vitor', 'btn-4');
});

// add event handler for player 5 btn
document.getElementById('btn-5').addEventListener('click', function () {
    getAllPlayersList('ramos', 'btn-5');
});

// add event handler for player 6 btn
document.getElementById('btn-6').addEventListener('click', function () {
    getAllPlayersList('renato', 'btn-6');
});




// Calculate Per Player Expenses

document.getElementById('calculate-player').addEventListener('click', function () {
    const perPlayerExpenses = document.getElementById('player-expenses-field');
    const playerExpensesValue = parseFloat(perPlayerExpenses.value);

    if (isNaN(playerExpensesValue) || playerExpensesValue < 0) {
        alert('Please enter a vaid number')
        return;
    }

    const playerList = document.getElementById('order-list').childElementCount;
    const totalExpenses = playerExpensesValue * playerList;

    const totalPlayerExpenses = document.getElementById('total-player-expenses');
    totalPlayerExpenses.innerText = totalExpenses;
    // perPlayerExpenses.value = '';
});




// Calcutale Manager, Coach and Final total


document.getElementById('calculate-total').addEventListener('click', function () {
    const perPlayerExpenses = document.getElementById('player-expenses-field');
    const playerExpensesValue = parseFloat(perPlayerExpenses.value);

    if (isNaN(playerExpensesValue) || playerExpensesValue < 0) {
        alert('Please enter a vaid number')
        return;
    }

    const playerList = document.getElementById('order-list').childElementCount;
    const totalExpenses = playerExpensesValue * playerList;

    const totalPlayerExpenses = document.getElementById('total-player-expenses');
    totalPlayerExpenses.innerText = totalExpenses;

    const playerExpenses = parseFloat(totalPlayerExpenses.innerText);
    const finalTotalExpenses = document.getElementById('final-total-expenses');

    const managerExpenses = document.getElementById('manager-expenses');
    const managerExpensesValue = parseFloat(managerExpenses.value);

    if (isNaN(managerExpensesValue) || managerExpensesValue < 0) {
        alert('Please enter a valid amount number');
        return;
    }

    const coachExpenses = document.getElementById('coach-expenses');
    const coachExpensesValue = parseFloat(coachExpenses.value);

    if (isNaN(coachExpensesValue) || coachExpensesValue < 0) {
        alert('Please enter a valid amount number');
    }

    const allFinalTotalExpenses = playerExpenses + managerExpensesValue + coachExpensesValue;
    finalTotalExpenses.innerText = allFinalTotalExpenses;
});


// JS End
