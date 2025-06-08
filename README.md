# 🧮 Prime Number Checker API

A simple REST API built with **Node.js and Express** that checks whether a given number is prime.

---

## 🔗 Endpoint

### `GET /is-prime?number=<value>`

**Query Parameter:**
- `number` (required): A valid integer to check for primality

**Example Request:**
```

GET [http://localhost:3000/is-prime?number=17](http://localhost:3000/is-prime?number=17)

````

**Example Response:**
```json
{
  "number": 17,
  "isPrime": true
}
````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mayurk224/backend-task-for-yogotribe.git
cd backend-task-for-yogotribe
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
node server.js
```

Server will be running at:

```
http://localhost:3000
```

---

## 🧪 Test the API

### Browser

```
http://localhost:3000/is-prime?number=29
```

### cURL

```bash
curl "http://localhost:3000/is-prime?number=29"
```

---

## 🛠 Tech Stack

* Node.js
* Express.js

---

## 📁 Project Structure

```
prime-check-api/
├── index.js
├── package.json
└── README.md
```

---

## 🚧 Future Improvements

* POST endpoint with JSON body
* Input validation
* Unit tests with Jest
* Dockerfile for containerization

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

```

Let me know if you want a `Dockerfile`, `.env` support, or CI setup for this project.
```
