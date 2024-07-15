const AsciiTable = require('ascii-table');

const TableGenerator = {
    generateTable: (moves) => {
        const N = moves.length;
        const table = new AsciiTable('Rules Table');
        table.setHeading(['v PC\\User >'].concat(moves)); // Header row

        for (let i = 0; i < N; i++) {
            const row = [moves[i]];
            for (let j = 0; j < N; j++) {
                if (i === j) {
                    row.push('Draw');
                } else if ((j - i + N) % N < Math.floor(N / 2)) {
                    row.push('Win');
                } else {
                    row.push('Lose');
                }
            }
            table.addRow(row);
        }

        return table.toString();
    }
};

module.exports = TableGenerator;