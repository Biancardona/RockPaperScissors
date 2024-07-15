const RulesEvaluator = {
    evaluate: (moves, userMove, computerMove) => {
        const N = moves.length;
        const half = Math.floor(N / 2);
        const userIndex = moves.indexOf(userMove);
        const computerIndex = moves.indexOf(computerMove);
        const diff = (userIndex - computerIndex + N) % N;

        if (diff === 0) {
            return 'Draw';
        } else if (diff < half) {
            return 'You win!';
        } else {
            return 'Computer wins!';
        }
    }
};

module.exports = RulesEvaluator;
