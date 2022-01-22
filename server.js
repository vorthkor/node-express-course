const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
]

app.get('/', function(req,res){
    res.json({
        success: true,
        message: 'welcome!!'
    })
})

app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

//colons are used as variables that be viewed in the params
app.get('/users/:id', function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.post('/login', function(req, res){
    // typically encrypted using something like bcrypt bfore sending to database
    const username=req.body.username;
    const password=req.body.password;

    //this should come from the database
    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
        // in practicem use JSON web token sign method here to make encrypted token
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})

app.listen(8000,function(){
    console.log("Server is running... yey!")
})