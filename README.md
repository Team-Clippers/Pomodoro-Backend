# Pomodoro-Backend

This is the Backend to the Pomodoro App. See the Frontend readme for more information:
https://github.com/Team-Clippers/Pomodoro-Frontend/blob/main/README.md

Members:

- Jesse Luna - https://github.com/jluna101
- Justin Lee - https://github.com/jleee14
- Peter Young - https://github.com/pspyoung
- Brian Yoon - https://github.com/thinkaboutmovies

## Description

This is a Pomodoro App that helps optimize study and break times through the use of Pomodoro intervals. The structured work and break timer helps students stay on task. The schedule breaks helps increase productivity for longer periods. Pomodoro interval data is accessed in the front end, and the data gets sent to the back end for statistics and analysis.

This backend fetches API here:

> https://pomodor-api.herokuapp.com/poms,

and communicates with the frontend stored data at:

> https://pomodoro176.netlify.app/

### Example API Data:

```
{
"_id": "623d0fa50cd5f483a01361df",
"name": "refactor test",
"workLength": 2,
"shortBreak": 1,
"sessionsBreak": 2,
"longBreak": 4,
"__v": 0
},

{
"_id": "623d17190cd5f483a01361f7",
"name": "new code fun",
"workLength": 1,
"shortBreak": 1,
"sessionsBreak": 1,
"longBreak": 1,
"__v": 0
},
```

### Example models and their properties

```
const UserSchema = new.mongoose.Schema ({
   name: String,
   lastLogin: Date,
   NumOfPomsDone: Number
});

const TaskSchema = new.mongoose.Schema ({
   task: String,
   workDuration: Number,
   shortBreakDuration: Number,
   numOfPomsTillBreak: Number,
   longBreakDuration: Number
});
```

>

## List of Features

- Backend has the CRUD functionality with GET, POST, PUT, and DELETE routes. The Frontend has functionality to access these CRUD functions.
- The data is stored in a live server with continuous deployment.

## List of Technologies Used

- Mongoose
- Express
- Node.js
- Cors
- Invision App for wireframes

### Request and Response Diagram

![Express-API-diagram drawio](https://media.git.generalassemb.ly/user/41448/files/d0e88f80-a9cb-11ec-8a10-0503929c5cd4)

## Installation Instructions / Getting Started

- fork and clone the repo
- cd into the repo
- install dependencies

```
    npm install
    npm i express mongoose dotenv
    echo -e "node_modules \n.env" > .gitignore
```

## Contribution Guidelines

### How to contribute

- Contritbution to the app is highly recommended! If you would like to contribute code, follow the instructions to install the app. Then proceed to make changes to a dev branch and submit a pull request.

### How to identify bugs

- To identify bugs, submit an issue on the git respository. Please detail the bug itself, if you are aware of a fix.

### How to propose improvements

- To propose improvements, submit an issue on the git repository
