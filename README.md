# Quillhash


Framework - Express
Database  - mongodb


APIs


1. GET - http://localhost:4000
    For Home Page With all user Info

2. POST - http://localhost:4000/user/signup
    New User can signUp using Email and Password 


3. POST - http://localhost:4000/user/login
    User can Login using Email and Password

4. POST - http://localhost:4000/like/:id
    User can like other user by giving id of that user in req.params

5. POST - http://localhost:4000/superlike/:id
    User can superlike other user by giving id of that user in req.params

6. POST - http://localhost:4000/block/:id
    User can block other user by giving id of that user in req.params

