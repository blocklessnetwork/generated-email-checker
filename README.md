# is-email-generated

`is-email-generated` is a module that helps determine if an email address is generated or not. This can be useful for filtering out temporary or disposable email addresses.

## Installation

To install the module, use npm:

```bash
npm install is-email-generated
```

## Usage

Here is an example of how to use the `is-email-generated` module:

```javascript
const isEmailGenerated = require('is-email-generated');

const email = 'example@example.com';
const result = isEmailGenerated(email);

console.log(`Is the email generated? ${result}`);
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

## Credit

Email list from

* https://github.com/disposable-email-domains/disposable-email-domains