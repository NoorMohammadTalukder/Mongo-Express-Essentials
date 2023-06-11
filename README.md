# Mongo-Express-Essentials

This is a basic Express.js API with MongoDB integration. It provides endpoints for managing student data, including creating, reading, updating, and deleting student records. The API also includes token-based authentication using JSON Web Tokens (JWT).

## Prerequisites

To run this API, you need to have the following:

- Node.js installed on your machine
- MongoDB server running or a MongoDB connection string

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Install the dependencies by running the following command:

   ```
   npm install
   ```

4. Create a `.env` file in the project root directory and add the following environment variables:

   ```
   DB_CONNECTION=<MongoDB connection string>
   ```

   Replace `<MongoDB connection string>` with your actual MongoDB connection string.

## Usage

To start the API, run the following command:

```
node index.js
```

The API server will start running on `http://localhost:3000`.

## Endpoints

- `POST /api/v1/create-student`: Creates a new student record.
- `GET /api/v1/get-all-student`: Retrieves all student records (requires authentication).
- `POST /api/v1/update-student/:id`: Updates a student record by ID.
- `POST /api/v1/delete-student/:id`: Deletes a student record by ID.
- `GET /api/v1/get-token`: Generates a JWT token for authentication.

## Controllers

### `studentController.js`

- `insertStudent`: Inserts a new student record into the database.
- `readAllStudent`: Retrieves all student records from the database.
- `updateStudent`: Updates a student record in the database by ID.
- `deleteStudent`: Deletes a student record from the database by ID.

### `tokenIssue.js`

- `generateToken`: Generates a JWT token.

## Middleware

### `tokenVerify.js`

- `tokenVerify`: Verifies the JWT token sent in the request headers.

## Models

### `studentModel.js`

- Defines the `Student` model schema for MongoDB.

## Security Middleware

- `express-rate-limit`: Limits the number of requests from a single IP address.
- `helmet`: Sets various HTTP headers for security.
- `express-mongo-sanitize`: Sanitizes user-supplied data to prevent MongoDB injection attacks.
- `xss-clean`: Sanitizes user input to prevent cross-site scripting (XSS) attacks.
- `hpp`: Protects against HTTP parameter pollution attacks.
- `cors`: Enables Cross-Origin Resource Sharing (CORS) for API access.

## Contributing

Contributions to this project are welcome. Feel free to open issues or submit pull requests.

