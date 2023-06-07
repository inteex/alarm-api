# Description

This repository contains a simple CRUD nodejs application with sqlite3 database.

# Instalation

## Prerequisites

- Node.js
- npm or Yarn

## How to install?

Run

```bash
yarn install
```

## To launch dev server ?

```bash
yarn start:dev
```

Go to http://localhost:3001

# Tests?

```bash
yarn test
```

# Improvements

Some possible improvements that can be made to the application:

- **Use of swagger**: for a user-friendly interface for exploring and testing the API endpoints.
- **Use of JWT**: Implement (JWT) for managing user roles and authentication.
- **Environment variables**: Consider implementing different environment stages, such as development, staging, and production, and utilize environment variables to handle stage-specific configurations.
- **Repository folder**: Create a separate folder for querying the sqlite3 DB to separate the data access logic from other application components
- **Add more tests**: Expand the test suite to cover more components and functionalities
- **Dockerize the app**: Containerize the application using Docker to simplify deployment and ensure consistent behavior across different environments.
- **Error and validation handling**: Implement better error and validation handling. Proper error responses with appropriate HTTP status codes and and validation of user input.
- **Add custom loggin midellware**: add third party logger like morgan.
