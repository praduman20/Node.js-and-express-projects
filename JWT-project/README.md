# Node.js and express project - JWT Project

## Project description - 
This project is a backend implementation of a secure authentication system using JSON Web Tokens. It is built with Node.js, Express and jsonwebtoken package. JSON Web Tokens (JWT) are used for user authentication, allowing users to access specific routes based on the validity of the token they provide.

## Project Link - https://jwt-project-hsjx.onrender.com

## Features - 

* User Authentication: Users can log in and receive a JWT token that must be used for accessing protected routes.
* Token Verification: The project verifies the authenticity of tokens to ensure secure access to the dashboard route.
* Express Routing: The project uses Express.js for routing, making it easy to manage different endpoints.

## Built with - 

1. Node.js
2. Express
3. jsonwebtoken package

## Installation -

1. Clone the repository : git clone https://github.com/praduman20/Node.js-and-express-projects/tree/main/store-api
2. Change to the project directory: cd JWT-project
3. Install project dependencies: npm install
4. Configure environment variables by creating a .env file in the project root. Set the following variables:
   PORT=3000
   JWT_SECRET=your-secret-key
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

* `name` (string): Filter by product name (e.g. name=dining table).
* `company` (string): Filter by company name (e.g. company=ikea).
* `featured` (boolean): Filter by featured products (e.g. featured=false).
* `fields` (string, comma-separated): Select specific fields to be included in the response (e.g., fields=name,price).
* `sort` (string): Sort the results by field name. Prefix with '-' to indicate descending order (e.g., sort=-price for descending order).
* `numberFilter` (string): Filter by price or rating (e.g. numberFilter=price>10 for prices greater than 10).
* `limit` (integer): Limit the number of products (e.g. limit=5).

  Example Request:
  GET https://store-api-dctv.onrender.com/api/v1/products?numberFilter=price>150&sort=-price&fields=name,price
  
## License

This repository is licensed under the [MIT License](https://opensource.org/license/mit/). Feel free to use the code for personal or commercial purposes.

Happy coding :)
