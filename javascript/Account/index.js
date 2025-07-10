import BankAccount from "./bankAccount";

// Create instances of BankAccount
const account1 = new BankAccount(123456, 'Dom Newbold');
const account2 = new BankAccount(987654, 'Abbie Gray', 10000);

// Deposit money
account1.deposit(50000);
account2.deposit(3000);

// Withdraw money
account1.withdraw(500);
account2.withdraw(200);

// Check balances
account1.checkBalance();
account2.checkBalance();