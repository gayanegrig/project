# Project Taskify

A simple task management web application using React, Redux Toolkit and Material UI

## Getting started

- npm start
- visit http://localhost:3000

## Technologies used

- React
- Redux Toolkit (for state management)
- Material UI (react component library)
- Formik (for building forms with validations)
- React Router

######################################################

Frontend - Home Exercise
Hi there,
You are going to code a new project called: “Task Management”. (“TM” in short).
The TM project allows the user to manage his tasks, Like: Jira.
Terminology:
● Task (card) - A UI component that holds: Title and description.
● List - A UI component that holds an infinite amount of tasks (cards).
The Project:
The project should contain the following features:
1. Create a new list
a. Get from the user a name for the list
i. The name can contain letters and numbers only. (Aa-Zz, 0-9).
ii. If the name contains bad values, like a special character, show an error to
the user, and allow the user to write a different name.
b. Edit the name of the list
c. Delete a list
2. Create a new Task inside a specific list.
a. Get from the user a Title and Description for the task.
b. Edit the Title and the Description
c. Delete a task
3. If I have more than 1 list, I would like to have the ability to move a task between lists: a.
Suggestion: Dragging a task with the mouse from List1 to List2
4. Clicking on a Task that inside a list, will open a popup that will show:
a. The title of the task
b. The description
c. The user should be able to edit the title and the description from there, and save
it.
Note: Each one of the following features: Adding / Editing / Deleting a Task / List, should save a
state to a “Store” module like Redux.
Also, before saving the data to the store, add a sleep, sleep(2000) (sleep for 2 seconds).
The reason for adding a sleep after each action, is to mimic a request & response to a server.
(In a real application if you create a new task for example it will be saved in some DB by making
a request to a server).
That means that your project should still be responsive to actions from the user, while sleeping
for 2 seconds.
Optional: While performing the sleep on each action, show a loading status. For example, let’s
say that I changed a title for a task, and pressed “save”, I would be happy to see a progress bar
or some kind of a loader spinner, while you wait 2 seconds for the “server”.
Guidelines:
1. The stack of the project:
a. We prefer React, but Vue and Angular are also acceptable.
b. Use a “Store” module like Redux / Vuex.
c. Optional: Use a third party library for the UI components like: material-ui.
2. Make sure your layout is responsive, meaning that it will look good on small and big
screens.
3. Make sure your UI looks good. (We know it's subjective, but we expect to see fine
components ). 4. Bonus: Add eye-candy stuff like animations.
We hope that you will enjoy coding it.
Feel free to call or send an email to us with questions, if you have.
Have fun, :)
Vanti R&D Team.
