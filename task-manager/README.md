# Node.js and express project - Task Manager

## Project description - 
The Task Manager is a Node.js backend project that allows users to manage their tasks. You can create, delete, edit, and mark tasks as complete. The project uses MongoDB as the database and Mongoose for data interaction. This README provides essential information for developers to get started with the project.

## Project Link - https://task-manager-0h7b.onrender.com

## Built with - 

1. Node.js
2. Express
3. MongoDb
4. Mongoose

## Screenshots -

<img width="760" alt="Screenshot 2023-10-17 at 2 42 07 PM" src="https://github.com/praduman20/Node.js-and-express-projects/assets/87388316/efaaff4f-3228-4808-b60d-0c3377c96ea3">

## Installation -

1. Clone the repository : git clone https://github.com/praduman20/Node.js-and-express-projects/tree/main/task-manager
2. Change to the project directory: cd task-manager
3. Install project dependencies: npm install
4. Configure environment variables by creating a .env file in the project root. Set the following variables:
   PORT=3000
   MONGODB_URI=your-mongodb-connection-string
5. Start the server: npm start
6. The Task Manager server should now be running on 'http://localhost:3000'.

## API Reference - 

You can access the Task Manager API using the following endpoints:

1. `GET /api/v1/tasks`: Retrieve all tasks.
2. `GET /api/v1/tasks/:id`: Retrieve a specific task by ID.
3. `POST /api/v1/tasks`: Create a new task.
   Request body example:
   {
      "name":"Buy grocery",
      "completed":"false"
   }
4. `PATCH /api/v1/tasks/:id`: Update a specific task by ID.
   Request body example:
   {
      "name":"Wash dishes",
   }
5. `DELETE /api/v1/tasks/:id`: Delete a task.


## License

This repository is licensed under the [MIT License](https://opensource.org/license/mit/). Feel free to use the code for personal or commercial purposes.

Happy coding :)
