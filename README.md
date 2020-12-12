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
    - **POST:**  http://localhost:8080/api/v1/posts/
        
        Create one post
- Read
    - **GET:** http://localhost:8080/api/v1/posts/
        
        Read all posts
    - **GET:** http://localhost:8080/api/v1/posts/:id
        
        Read one post by ID
- Update
    - **PUT:** http://localhost:8080/api/v1/posts/:id
        
        Update one post by ID
- Delete
    - **POST:** http://localhost:8080/api/v1/posts/:id
        
        Delete one post by ID