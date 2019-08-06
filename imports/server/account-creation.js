Accounts.onCreateUser(function(options, user) {
    // Use provided profile in options, or create an empty object
    user.profile = options.profile || {};
    // Assigns first and last names to the newly created user object
    user.profile.name = options.name;
    user.profile.Tasks = [];
    // Returns the user object
    return user;
 });