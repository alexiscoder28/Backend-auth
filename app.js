
const express = require ('express')
const morgan = require('morgan')
const app = express();
const dbConnection = require('./config/db');
const userModel = require('./models/user');




app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("view engine", 'ejs')

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/register' , async (req, res) => {
 const {username, email, password} = req.body

 const newUser = await userModel.create({
    username : username,
    email : email,
    password : password
 })
    res.send(newUser)
})

app.get('/get-users',(req,res) =>{
    userModel.findOne({ username: 'b' })
    .then((user) => {
        res.send(user)
    })
})

app.get('/update-user', async (req,res) =>{
   await  userModel.findOneAndUpdate({
        username : 'b'},
        {  email : 'c@.com'})
    
    res.send('User updated')
    })
    
    app.get('/delete-user', async (req,res) =>{
       await  userModel.findOneAndDelete({
            username : 'b'}) 
            res.send('User deleted')
       })



    app.post('/get-form-date', (req,res) =>{
    console.log(req.body);
    res.send('Form data received')
})

app.listen(3000)