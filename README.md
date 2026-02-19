## Mock Products API

This is a simple mock REST API for working with products, intended for frontend development and testing (React, Vue, etc.).

This API allows:

- Fetching all products
- Fetching a single product by ID

## Base URL

http://localhost:PORT

(Replace PORT with the port your server is running on, e.g. 3000 or 5000)

## Endpoints

### 1. Get all products

GET  
/products

Returns a list of all available products.

### 2. Get product by ID

GET  
/product/:id

Returns a single product based on the provided ID.

URL parameters:

- id (number) — Product ID

### Error response

If the product is not found, the API returns:

```json
{
  "error": "Product not found"
}
```

## Installation

1. Clone the repository:

git clone https://github.com/TeodorStevanovic/mock-rest-api.git

2. Navigate into the project folder:

cd mock-rest-api

3. Install dependencies:

npm install

4. Install Express:

npm install express

## Run the server

Start the development server with:

node server.js
