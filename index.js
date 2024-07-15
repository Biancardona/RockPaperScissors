const readline = require('readline');
const TableGenerator = require('./TableGenerator');
const RulesEvaluator = require('./RulesEvaluator');
const CryptoUtils = require('./CryptoUtils');

// Parse command line arguments (moves)
const args = process.argv.slice(2);
if (args.length < 3 || args.length % 2 === 0 || new Set(args).size !== args.length) {
    console.error('Usage: node index.js <move1> <move2> ... (odd number of non-repeating moves)');
    process.exit(1);
}

// Circular structure for moves
const moves = args;

// Generate a cryptographically strong random key
const key = CryptoUtils.generateKey();

// Computer's random move
const computerMove = moves[Math.floor(Math.random() * moves.length)];

// Calculate HMAC using SHA256
const hmac = CryptoUtils.calculateHMAC(key, computerMove);

// Display HMAC to the user
console.log('HMAC:', hmac);

// Display menu
function displayMenu() {
    console.log('Available moves:');
    moves.forEach((move, index) => console.log(`${index + 1} - ${move}`));
    console.log('0 - Exit');
    console.log('? - Help');
}

// Get user's choice
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser() {
    rl.question('Enter your move: ', (userChoice) => {
        if (userChoice === '0') {
            console.log('Exiting...');
            rl.close();
            process.exit(0);
        } else if (userChoice === '?') {
            const table = TableGenerator.generateTable(moves);
            console.log('Rules Table:');
            console.log(table);
            displayMenu();
            promptUser();
        } else {
            processUserMove(userChoice);
        }
    });
}

function processUserMove(userChoice) {
    const userMove = moves[userChoice - 1];
    if (!userMove) {
        console.error('Invalid choice! Please try again.');
        displayMenu();
        promptUser();
        return;
    }

    // Determine winner
    const result = RulesEvaluator.evaluate(moves, userMove, computerMove);
    console.log('Your move:', userMove);
    console.log('Computer move:', computerMove);
    console.log(result);

    // Display computer's move and original key
    console.log('Original key:', key.toString('hex'));

    rl.close();
}

displayMenu();
promptUser();
