# textlint-rule-no-kangxi-radicals

textlint rule to prevent using [kangxi radicals](https://unicode.org/charts/nameslist/n_2F00.html).

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-no-kangxi-radicals

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "no-kangxi-radicals": true
    }
}
```

Via CLI

```
textlint --rule no-kangxi-radicals README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © xl1
