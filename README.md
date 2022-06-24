# API_Heroku-Postgres
https://backendpersonalapi.herokuapp.com/

//View all registered user with brypt_hash password
https://backendpersonalapi.herokuapp.com/login/user [Method : Get]

//Register as a new user with basic validator
https://backendpersonalapi.herokuapp.com/login/signup [Method : Post]
{
    "username": "human",
    "email": "Hello@world.com.sg",
    "password": "bcrypt_hashing"
}

//Register as a new user with basic validator
https://backendpersonalapi.herokuapp.com/login/signin [Method : Post]
