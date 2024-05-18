# TO-DO LIST
A simple todo app built on node.js connected with mongoDB
![todo App](https://raw.githubusercontent.com/Rizwanishere/cgc-todo-list/main/images/toDO.png)

### Tasks done!
- CRUD Operations from mongoDB
- Pagination
- search by status
- Validation
- Deployment Ready
- Search by title or description or status

### Endpoints
Main URL (https://cgc-todo-list.onrender.com/todo/page/${page}/size/6?search=${search}&sort=${sort}&direction=${direction})
Note: The values in { } can be changed
https://cgc-todo-list.onrender.com/todo
https://cgc-todo-list.onrender.com/todo/page/1/size/10
https://cgc-todo-list.onrender.com/todo?search=cgc
https://cgc-todo-list.onrender.com/todo/page/1/size/10?&sort=_id&direction=asc
https://cgc-todo-list.onrender.com/todo/page/1/size/10?&sort=_id&direction=desc

### Setup
1. Download node.js from here https://nodejs.org/dist/v20.12.1/node-v20.12.1-x64.msi
2. Check its version using command 'node -v'
3. git clone https://github.com/Rizwanishere/cgc-todo-list.git
4. npm init -y 
5. Install express - npm install express
6. Install nodemon - npm i nodemon
7. Install mongodb from here https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.8-signed.msi
8. npm install mongoose

### Deployment
- Deployed on Render (https://cgc-todo-list.onrender.com/todo)
