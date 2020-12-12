# FIRST API
## CRUD operations

    {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        }
    }

- Create 
    - **POST: http://localhost:8080/api/v1/posts/**
- Read
    - **GET: http://localhost:8080/api/v1/posts/**
    - **GET: http://localhost:8080/api/v1/posts/:id**

- Update
    - **POST: http://localhost:8080/api/v1/posts/**
- Delete
    - **POST: http://localhost:8080/api/v1/posts/**