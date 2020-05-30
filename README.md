# Quillhash


Framework - Express
Database  - mongodb


APIs


1. GET - http://localhost:4012
    For Home Page With all user Info

2. POST - http://localhost:4012/signup
    New User can signUp using Email and Password 


3. POST - http://localhost:4012/login
    User can Login using Email and Password

4. POST - http://localhost:4012/like/:id
    User can like other user by giving id of that user in req.params

5. POST - http://localhost:4012/superlike/:id
    User can superlike other user by giving id of that user in req.params

6. POST - http://localhost:4012/block/:id
    User can block other user by giving id of that user in req.params

