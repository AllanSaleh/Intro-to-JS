# JavaScript Basics - Cheat Sheet

## Variable Declaration
```javascript
// Modern JavaScript (preferred)
let variableName = value;        // Can be reassigned
const constantName = value;      // Cannot be reassigned

// Old way (avoid in modern JS)
var oldVariable = value;         // Function-scoped, avoid
```

## Data Types
```javascript
// Primitive Types
let text = "Hello";              // String
let number = 42;                 // Number (int/float)
let boolean = true;              // Boolean
let nothing = null;              // Null
let notDefined;                  // Undefined

// Check type
typeof variable;                 // Returns string of type
```

## String Operations
```javascript
let str = "Hello World";

// Basic properties
str.length;                      // 11

// Methods
str.toUpperCase();               // "HELLO WORLD"
str.toLowerCase();               // "hello world"
str.substring(0, 5);             // "Hello"
str.indexOf("World");            // 6

// Concatenation
let name = "Alice";
let greeting = "Hello " + name;  // "Hello Alice"

// Template literals (preferred)
let greeting2 = `Hello ${name}`; // "Hello Alice"
```

## Operators
```javascript
// Arithmetic
a + b;    // Addition
a - b;    // Subtraction
a * b;    // Multiplication
a / b;    // Division
a % b;    // Remainder
a ** b;   // Exponentiation
++a;      // Pre-increment
a++;      // Post-increment

// Comparison
a == b;   // Loose equality (type coercion)
a === b;  // Strict equality (no coercion)
a != b;   // Loose inequality
a !== b;  // Strict inequality
a > b;    // Greater than
a < b;    // Less than
a >= b;   // Greater or equal
a <= b;   // Less or equal

// Logical
a && b;   // AND
a || b;   // OR
!a;       // NOT
```

## Console Output
```javascript
console.log("Message");          // Regular output
console.warn("Warning");         // Warning message
console.error("Error");          // Error message
console.info("Info");            // Info message
console.table(object);           // Table format
```

## Template Literals
```javascript
let name = "Alice";
let age = 25;

// Multi-line strings
let message = `Hello ${name},
you are ${age} years old`;

// Expressions in templates
let calculation = `2 + 2 = ${2 + 2}`; // "2 + 2 = 4"
```

## Common Patterns
```javascript
// Variable naming
let firstName = "Alice";         // camelCase
let user_age = 25;               // snake_case (less common)
let $price = 19.99;              // $ prefix (jQuery style)
let _private = "internal";       // _ prefix (private)

// Multiple variable declaration
let a = 1, b = 2, c = 3;

// Type checking
typeof "hello" === "string";     // true
typeof 42 === "number";          // true
typeof true === "boolean";       // true
```

## Python vs JavaScript Quick Reference

| Operation | Python | JavaScript |
|-----------|--------|------------|
| **Variables** | `name = "Alice"` | `let name = "Alice"` |
| **Constants** | `AGE = 25` (convention) | `const AGE = 25` |
| **Strings** | `f"Hello {name}"` | `` `Hello ${name}` `` |
| **Output** | `print("Hello")` | `console.log("Hello")` |
| **Type Check** | `type(value)` | `typeof value` |
| **None/Null** | `None` | `null` |
| **Undefined** | `NameError` | `undefined` |
| **Comments** | `# comment` | `// comment` |
| **Multi-line** | `"""comment"""` | `/* comment */` |

## Common Errors & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `ReferenceError: x is not defined` | Variable not declared | Use `let` or `const` |
| `TypeError: Cannot read property` | Accessing undefined property | Check variable exists |
| `SyntaxError: Unexpected token` | Missing semicolon/quote | Check syntax |
| `Uncaught TypeError: Cannot assign` | Trying to reassign `const` | Use `let` instead |

## Browser Dev Tools Shortcuts
- **F12** - Open Dev Tools
- **Ctrl+Shift+I** - Open Dev Tools (Windows)
- **Cmd+Option+I** - Open Dev Tools (Mac)
- **Ctrl+Shift+J** - Open Console directly
- **Ctrl+R** - Refresh page
- **Ctrl+Shift+R** - Hard refresh (clear cache)

## File Structure Template
```
project/
├── index.html          # Main HTML file
└── script.js           # JavaScript file
```

## HTML Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>Open the browser console to see JavaScript output</p>
    <script src="script.js"></script>
</body>
</html>
```

## Quick Debugging Checklist
1. ✅ Check browser console for errors
2. ✅ Verify script tag is at bottom of HTML
3. ✅ Check file paths are correct
4. ✅ Ensure proper syntax (semicolons, quotes)
5. ✅ Use `console.log()` to trace execution
6. ✅ Check variable names for typos
7. ✅ Verify Live