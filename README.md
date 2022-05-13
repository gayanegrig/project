# Project Taskify

A simple task management web application using React, Redux Toolkit and Material UI

## Getting started

- npm start
- visit http://localhost:3000

## Technologies used

- React
- Redux Toolkit (for state management)
- Localstorage (used to persist tasks)
- Material UI (react component library)
- Formik (for building forms with validations)
- React Router

## Pages

Defined in src/routes.ts and src/pages

| Name             | Path        | Description                                                                      |
| ---------------- | ----------- | -------------------------------------------------------------------------------- |
| Home             | /           | This is the default landing page after the onboarding process has been triggered |
| On Boarding      | /onboarding | Simple page to ask a user to add their first task                                |
| Add/Create task  | /task       | Displays a form to add a task                                                    |
| Update/Edit task | /task/:id   | Displays a form to edit/update a task 

## How tos
### Add a task
- Navigate to [home page](http://localhost:3000) 
- Click the add button (+) at the bottom right corner, and should navigate to the create task page
- Fill out the form and submit the form and should navigate to the task details page
