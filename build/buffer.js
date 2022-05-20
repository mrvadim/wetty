import { createInterface } from 'readline';
ask('Enter your username');
function ask(question) {
    const rlp = createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(resolve => {
        rlp.question(`${question}: `, answer => {
            rlp.close();
            resolve(answer);
        });
    });
}
//# sourceMappingURL=buffer.js.map