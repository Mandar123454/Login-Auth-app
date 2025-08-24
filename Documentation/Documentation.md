# Project Documentation

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd <repo-folder>
```

### 2. Install Dependencies

#### Backend
```bash
cd login-project/server
npm install
```

#### Frontend
```bash
cd ../client
npm install
```

### 3. MongoDB Configuration

- **Install MongoDB** from [mongodb.com](https://www.mongodb.com/try/download/community).
- Ensure MongoDB is running:
  ```powershell
  cd "C:\Program Files\MongoDB\Server\<version>\bin"
  .\mongod
  ```
- The backend connects to MongoDB at:
  ```
  mongodb://localhost:27017/loginapp
  ```
  (No extra configuration needed for local development.)

### 4. Start the Servers

#### Backend
```bash
cd login-project/server
node index.js
```

#### Frontend
```bash
cd ../client
npm start
```

---

## Data Flow Description

1. **User submits credentials** via the frontend login form.
2. **Frontend** sends a POST request to the backend `/login` endpoint with the user's email and password.
3. **Backend** receives the request, queries the MongoDB database for the user, and compares the password.
4. **Backend** sends a response indicating success or failure.
5. **Frontend** displays the result to the user.

---

## API Details

### Login Endpoint

- **Endpoint:** `/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Responses:**
  - **Success:**
    ```json
    {
      "status": "success",
      "message": "Login successful"
    }
    ```
  - **Failure:**
    ```json
    {
      "status": "fail",
      "message": "Invalid credentials"
    }
    ```

---

## Screenshots

Screenshots of the application can be found in the `screenshots` folder for reference.

---


## Project Setup


- **Backend:**  
  - `cd login-project/server && npm install && node index.js`
- **Frontend:**  
  - `cd login-project/client && npm install && npm start`
- **MongoDB:**  
  - Make sure MongoDB is running locally on port 27017.

## API

- **POST /login**  
  - Request: `{ "email": "user@example.com", "password": "password123" }`
  - Response:  
    - Success: `{ "status": "success", "message": "Login successful" }`
    - Failure: `{ "status": "fail", "message": "Invalid credentials" }`

---
