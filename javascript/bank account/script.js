// Define a class for the bank account so that instances of bank accounts for different users can be created
class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
// Define methods of the bank account class to deposit, withdraw and check balances of the users account

    deposit(amount){
        this.balance += amount;
        return `$${amount} deposited. Current balance: $${this.balance}`
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient funds";
    } else {
        this.balance -= amount;
            return `$${amount} withdrawn.Current balance: $${this.balance}`;
        }
    }

    checkBalance() {
        return `Account balance for ${this.accountHolder}: $${this.balance}`;
    }

}
const accounts = new Map();

function createAccount() {
    const accountHolder = document.getElementById('accountHolder').value;
    const initialBalance = parseFloat(document.getElementById('initialBalance').value)
    const accountNumber = Math.floor(Math.random() * 1000000);
    const newAccount = new BankAccount(accountNumber, accountHolder, initialBalance);
    accounts.set(accountNumber, newAccount);
    document.getElementById('output').innerText = `Account created. Account Number:${accountNumber}`;
}

function deposit() {
    const accountNumber = parseInt(document.getElementById('accountNumber').value);
    const amount = parseFloat(document.getElementById('amount').value);
    const account = accounts.get(accountNumber);
    if (account) {
        document.getElementById('output').innerText = account.deposit(amount);
    } else {
        document.getElementById('output').innerText = 'Account not found';
    }
}

function withdraw() {
    const accountNumber = parseInt(document.getElementById('accountNumber').value);
    const amount = parseFloat(document.getElementById('amount').value);
    const account = accounts.get(accountNumber);
    if (account) {
        document.getElementById('output').innerText = account.withdraw(amount);
    } else {
        document.getElementById('output').innerText = "Account not found"
    }
}

function checkBalance() {
    const accountNumber = parseInt(document.getElementById('accountNumber').value);
    const account = accounts.get(accountNumber);
    if(account) {
        document.getElementById('output').innerText = account.checkBalance();
    } else {
        document.getElementById('output').innerText = "Account not found";
    }
}
/*
// Create instances of BankAccount
const account1 = new BankAccount(123456, 'Harry Potter');
const account2 = new BankAccount(456578, 'Niccy', 10000)

// Deposit money 
account1.deposit(500);
account2.deposit(5000);

// Withdraw money
account1.withdraw(50);
account2.withdraw(500);

// Check balance
account1.checkBalance();
account2.checkBalance();*/