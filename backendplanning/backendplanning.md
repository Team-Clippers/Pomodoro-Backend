### Sample API Data:

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

### Schemas:

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

### Request Response Cycle:

![Express-API-diagram drawio](https://media.git.generalassemb.ly/user/41448/files/d0e88f80-a9cb-11ec-8a10-0503929c5cd4)

