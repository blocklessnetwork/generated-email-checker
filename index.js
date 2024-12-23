const fs = require('node:fs');
const path = require('node:path');

// Load disposable domains from the file
const disposableDomains = fs.readFileSync(path.join(__dirname, 'disposabledomains.txt'), 'utf-8')
    .split('\n')
    .map(domain => domain.trim())
    .filter(domain => domain.length > 0);

/**
 * Check if an email address appears generated.
 * @param {string} email - The email address to check.
 * @returns {boolean} - Returns true if the email appears generated.
 */
function isGeneratedEmail(email) {
    // Split email into local part and domain part
    const [localPart, domain] = email.split("@");
    if (!localPart || !domain) {
        return false; // Not a valid email format
    }

    // Check if the domain is in the list of disposable domains
    if (disposableDomains.includes(domain.toLowerCase())) {
        return true;
    }

    // Check for excessive length and patterns like random characters
    const excessiveLength = localPart.length > 30;
    const randomPattern = /^[a-zA-Z0-9]{8,}$/; // Long strings of alphanumeric characters
    const leadingNumbersPattern = /^[0-9][a-zA-Z0-9]{7,}$/; // Starts with a number, followed by alphanumeric characters
    if (excessiveLength || randomPattern.test(localPart) || leadingNumbersPattern.test(localPart)) {
        return true;
    }

    // Check for local part patterns like many dots or special characters
    const unusualPatterns = /[^a-zA-Z0-9._]/; // Characters outside normal email pattern
    const tooManyDots = (localPart.match(/\./g) || []).length > 3;
    if (unusualPatterns.test(localPart) || tooManyDots) {
        return true;
    }

    return false;
}

module.exports = { isGeneratedEmail };
