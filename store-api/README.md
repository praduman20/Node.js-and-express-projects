# Node.js and express project - Store API

## Project description - 
The Task Manager is a Node.js backend project that allows users to manage their tasks. You can create, delete, edit, and mark tasks as complete. The project uses MongoDB as the database and Mongoose for data interaction. This README provides essential information for developers to get started with the project.

## Project Link - https://store-api-dctv.onrender.com

## Built with - 

1. Node.js
2. Express
3. MongoDb
4. Mongoose

## Installation -

1. Clone the repository : git clone https://github.com/your-username/task-manager.git
2. Change to the project directory: cd task-manager
3. Install project dependencies: npm install
4. Configure environment variables by creating a .env file in the project root. Set the following variables:
   PORT=3000
   MONGODB_URI=your-mongodb-connection-string
5. Start the server: npm start
6. The Task Manager server should now be running on 'http://localhost:3000'.

## API Reference - 

1. Base URL - 
All endpoints are relative to the base URL: https://store-api-dctv.onrender.com

2. Error Responses - 
The API follows standard HTTP status codes and returns error responses in the following format:

   * In case of unknown route given - Route does not exist (HTTP status code - 404)
   * Any other error - Something went wrong, please try again (HTTP status code - 500)

3. Endpoint -
You can access the Task Manager API using the following endpoint:

`GET /api/v1/products`: Retrieve ten products as the limit is set to 10.

Query Parameters:

`name` (string): Filter by product name (e.g. name=dining table).
`company` (string): Filter by company name (e.g. company=ikea).
`fields` (string, comma-separated): Select specific fields to be included in the response (e.g., fields=name,price).
`numberFilter` (string): Filter by price or rating (e.g., numberFilter=price>10 for prices greater than 10).
`sort` (string): Sort the results by field name. Prefix with '-' to indicate descending order (e.g., sort=-price for descending order).
`featured` (boolean): Filter by featured products (e.g. featured=false).


## License

This repository is licensed under the [MIT License](https://opensource.org/license/mit/). Feel free to use the code for personal or commercial purposes.

Happy coding :)
