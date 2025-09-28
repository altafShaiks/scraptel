# API Documentation

### Description
This endpoint is used to register a new user. It creates a new user in the database and returns a JSON Web Token (JWT) along with the created user object upon success.

### Endpoint
`POST /register`

### Request Body
The request body should be in JSON format and include the following required fields:

- **fullname** (string): The full name of the user.
- **email** (string): A valid email address. Must be at least 5 characters long.
- **phone** (number): The user's phone number. Must be 10 digits long.
- **password** (string): The user's password. Must be at least 6 characters long.

Example:
```json
{
  "fullname": "John Doe",
  "email": "john@example.com",
  "phone": 1234567890,
  "password": "secret123"
}
```

### Responses

- **201 Created**
  - Description: The user has been successfully registered.
  - Response Body:
    ```json
    {
      "token": "<JWT token>",
      "user": { "_id": "<user id>", "fullname": "John Doe", "email": "john@example.com", "phone": 1234567890 }
    }
    ```

- **400 Bad Request**
  - Description: One or more fields in the request body are missing or invalid.
  - Response Body:
    ```json
    {
      "errors": [
        { "msg": "Invalid email", "param": "email", "location": "body" },
        { "msg": "Password must be at least 6 characters long", "param": "password", "location": "body" }
      ]
    }
    ```

### Notes

- Make sure to use a valid email format.
- The phone number should be provided as a number and must be exactly 10 digits long.
- Passwords are hashed before storage.
- The JWT token is generated using the user's `_id` and a secret key stored in environment variables.
