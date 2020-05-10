import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run('rule', rule, {
    valid: [
        '長崎県\n長野県'
    ],
    invalid: [
        {
            text: '⾧崎県\n⾧野県',
            output: '長崎県\n長野県',
            errors: [{
                message: 'Found kangxi radical: ⾧',
                line: 1,
                column: 1, 
            }, {
                message: 'Found kangxi radical: ⾧',
                line: 2,
                column: 1,
            }]
        },
    ]
});
