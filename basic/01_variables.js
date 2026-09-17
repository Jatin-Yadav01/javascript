const accountId = 197456
let accountEmail = "jatin@example.com"
accountCity = "New York"
var accountPassword = "securePassword123"

// accountId = 123456 not allowed because accountId is a constant and cannot be reassigned.

console.log(accountId) // This will throw an error because accountId is a constant and cannot be reassigned.

accountEmail = "newemail@example.com"
accountCity = "Los Angeles"
accountPassword = "newSecurePassword456"

console.table([accountId, accountEmail, accountCity, accountPassword]);

/* dont use var, use let and const instead. var is function scoped and can lead to unexpected behavior. let and const are block scoped and provide better control over variable declarations. */