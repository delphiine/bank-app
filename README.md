# Bank App

This is an app that allows users to deposit and withdraw funds from their bank account. Additionally, A user can print their bank statement to view their bank balance and transaction history. User are able to interact with the code via a REPL.

### Approach
The App is written in JavaScript. The test are created using Jest. 
The program consistence of two classes. The 'Bank' class has all the logic and the 'BankApp' class takes input from users and allows them to interact with the app directly. There is also an app.js file which has an instance of the BankApp class. Running this files allows the user to start using the program. 

### Project Dependencies
To run the program, first fork or clone this repository, and navigate to the project folder on your local machine.
run:

```
to ensure access to all dependencies:
npm install
```

### How to Run the App

Once you have all the dependences installed, run app.js in your REPL to start the program.

Run 'jest' to view all test results.

After depositing and withdrawing funds from your account, you will be able to print a statement that looks like the example below.

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```