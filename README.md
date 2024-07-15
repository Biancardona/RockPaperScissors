# Rock Paper Scissors with HMAC Verification

## Introduction
This script implements a Rock Paper Scissors game (and its variants) with a cryptographically secure HMAC verification mechanism to ensure fairness. The game accepts an odd number (≥ 3) of non-repeating strings as command line arguments representing the possible moves.

## Features
- Accepts an arbitrary number of moves (odd and ≥ 3) passed as command line arguments.
- Generates a cryptographically strong random key (256 bits).
- Computes an HMAC (SHA3-256) for the computer's move.
- Displays a menu for the user to select their move.
- Validates the user's input and displays the menu again if the input is incorrect.
- Determines and displays the winner based on the user's and computer's moves.
- Reveals the computer's move and the original key after the user makes their move.
- Provides a help option that displays an ASCII table showing the rules.
  
## Usage

### Command Line Arguments
The game accepts an odd number (≥ 3) of non-repeating strings as command line arguments. Each string represents a possible move in the game. *For example:*

**node index.js rock paper scissors**
or
**node index.js rock paper scissors lizard Spock**

### Running the Game
1. Open your terminal.
2. Navigate to the directory containing the script.
3. Run the script with the desired moves as command line arguments.
*For example:*

**node index.js rock paper scissors lizard Spock**

### Error Handling
If the command line arguments are incorrect, the script will display a neat error message indicating what is wrong and provide an example of correct usage.

## How the Game Works
1. The script generates a cryptographically strong random key (256 bits).
2. The computer makes a random move from the provided moves.
3. The script calculates the HMAC (SHA3-256) of the computer's move using the generated key and displays the HMAC to the user.
4. The script displays a menu with the available moves and an option to exit.
5. The user selects their move. If the input is incorrect, the menu is displayed again.
6. The script determines the winner based on the user's and computer's moves.
7. The computer's move and the original key are revealed to the user.
8. The user can verify that the computer's move was not changed after the user's move by checking the HMAC.
   
### Help Option
When the user selects the *"help"* option (by entering ?), the script displays an ASCII table showing which moves win, lose, or draw against each other. The table is generated dynamically based on the provided moves.

*Example Help Table*
For the moves rock, paper, and scissors:

| v PC\User > | Rock | Paper | Scissors |
|-------------|------|-------|----------|
| Rock        | Draw | Lose  | Win      |
| Paper       | Win  | Draw  | Lose     |
| Scissors    | Lose | Win   | Draw     |


## Implementation Details
The script is organized into separate classes for modularity and readability:

**TableGenerator:** Generates the rules table in ASCII format.
**RulesEvaluator:** Defines the rules for determining the winner.
**CryptoUtils:** Handles key generation and HMAC calculation.
**Main Script:** Orchestrates the game flow and user interaction.

## Technologies Implemented
**Node.js:** JavaScript runtime for executing the script.
**Crypto Module:** Built-in Node.js module for cryptographic functions.
**Readline Module:** Built-in Node.js module for reading input from the terminal.
**ascii-table:** npm package for generating ASCII tables.

## Installation
- Clone the repository or download the script files.
- Install the necessary npm package:
  
**npm install ascii-table**

- Running the Script:

**node index.js rock paper scissors**

- Replace rock paper scissors with your desired moves.

## Conclusion
This Rock Paper Scissors game ensures fair play by using HMAC for move verification. The flexible design allows for an arbitrary number of moves, making the game versatile and customizable. Enjoy playing and verifying the fairness of each game!
