const todos = [];

// User need to enter the correct input to continue

while (true) {
    const command = prompt(
    "Hello, welcome to your todo program, please write what you want to do.\n\n New : Add a new todo \n List : Consult your todo list \n Delete : Remove a specific todo \n Quit : Exit the program \n"
    ).toLowerCase();

    // Differents cases and what they do

    switch (command) {
    case "new":
        const newTodo = prompt("Enter a new todo: \n");
        if (newTodo) {
            todos.push(newTodo);
            console.log(`"${newTodo}" added to the list.`);
        } else {
            console.log("Error. Please try again.");
        }
        break;

    case "list":
        if (todos.length === 0) {
            console.log("The todo list is empty.");
        } else {
            console.log("********* TODO LIST *********");
            todos.forEach((todo, index) => {
                console.log(`${index + 1}. ${todo}`);
            });
        }
        break;

    case "delete":
        const todoIndex = parseInt(
            prompt("Enter the number of the todo to delete: \n")
        );
        if (
            !Number.isNaN(todoIndex) &&
            todoIndex >= 1 &&
            todoIndex <= todos.length
        ) {
            const deletedTodo = todos.splice(todoIndex - 1, 1);
            console.log(`"${deletedTodo}" deleted from the list.`);
        } else {
            console.log("Wrong number. Please try again.");
        }
        break;

    case "quit":
        console.log("Bye.");
        process.exit();
        break;

    default:
        console.log("Invalid command. Please try again.");
        break;
    }
}
