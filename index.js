// Generic function to act on users in an array
function manipulateUsersArray(users, action) {
    for (let i = 0; i < users.length; i++) {
        action(users[i]);
    }
}

// Function to set a new name for all users in the array
function setUserNames(users, newName) {
    manipulateUsersArray(users, (user) => {
        user.name = newName;
    });
}

// Function to get all user emails from the array
function getUserEmails(users) {
    const emails = [];
    manipulateUsersArray(users, (user) => {
        emails.push(user.email);
    });
    return emails;
}

// Function to apply a discount code to all users in the array
function applyDiscounts(users, discountCode) {
    manipulateUsersArray(users, (user) => {
        user.discountCode = discountCode;
    });
}

// function calls to check that the output is the same

const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
];

setUserNames(users, "Charlie");
console.log("After setting new names:", users);

const emails = getUserEmails(users);
console.log("User emails:", emails);

applyDiscounts(users, "DISCOUNT2023");
console.log("After applying discounts:", users);