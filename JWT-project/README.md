# Node.js and express project - JWT Project

## Project description - 
This project is a backend implementation of a secure authentication system using JSON Web Tokens. It is built with Node.js, Express and jsonwebtoken package. JSON Web Tokens (JWT) are used for user authentication, allowing users to access specific routes based on the validity of the token they provide.

## Project Link - https://jwt-project-hsjx.onrender.com

## Features - 

* User Authentication: Users can log in and receive a JWT token that must be used for accessing protected routes.
* Token Verification: The project verifies the authenticity of tokens to ensure secure access to the dashboard route.
* Express Routing: The project uses Express.js for routing, making it easy to manage different endpoints.

## Screenshots - 

<img width="533" alt="Screenshot 2023-10-25 at 9 23 36 PM" src="https://github.com/praduman20/Node.js-and-express-projects/assets/87388316/d86e8b6e-6e5c-49aa-948f-d2cf87e50adf">

## Built with - 

1. Node.js
2. Express
3. jsonwebtoken package

## Installation -

1. Clone the repository : git clone https://github.com/praduman20/Node.js-and-express-projects/tree/main/JWT-project
2. Change to the project directory: cd JWT-project
3. Install project dependencies: npm install
4. Configure environment variables by creating a .env file in the project root. Set the following variables:
   PORT=3000
   JWT_SECRET=your-secret-key
5. Start the server: npm start
6. The Task Manager server should now be running on 'http://localhost:3000'.

## API Reference - 

1.Login - 

* Endpoint: /api/v1/login
* Method: POST
* Description: Allows users to log in and receive a JWT token for authentication.
* Request Body:
  * username (string): The user's username.
  * password (string): The user's password.
* Response: If the username and password are provided, the server will respond with a JWT token that will be stored in the local storage.

2.Dashboard - 

* Endpoint: /api/v1/dashboard
* Method: GET
* Description: A protected route that requires a valid JWT token for access.
* Request Headers:
  * Authorization : A valid JWT token in the format `Bearer YOUR_TOKEN`.
  
## License

This repository is licensed under the [MIT License](https://opensource.org/license/mit/). Feel free to use the code for personal or commercial purposes.

Happy coding :)
