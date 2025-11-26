
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
 try {
    const newUser = await userModel.create({
        username : username,
        email : email,
        password : password
    })
    res.json({ success: true, message: 'User registered successfully', user: newUser })
 } catch(error) {
    res.json({ success: false, message: 'Registration failed: ' + error.message })
 }
})

app.get('/get-users', async (req,res) =>{
    try {
        const users = await userModel.find({})
        res.json({ success: true, count: users.length, users })
    } catch(error) {
        res.json({ success: false, message: 'Error fetching users: ' + error.message })
    }
})

app.post('/update-user', async (req,res) =>{
    const { username, email } = req.body
    try {
        const user = await userModel.findOneAndUpdate(
            { username },
            { email },
            { new: true }
        )
        if(user) {
            res.json({ success: true, message: 'User updated successfully', user })
        } else {
            res.json({ success: false, message: 'User not found' })
        }
    } catch(error) {
        res.json({ success: false, message: 'Error updating user: ' + error.message })
    }
})
    
app.post('/delete-user', async (req,res) =>{
    const { username } = req.body
    try {
        const user = await userModel.findOneAndDelete({ username })
        if(user) {
            res.json({ success: true, message: 'User deleted successfully', user })
        } else {
            res.json({ success: false, message: 'User not found' })
        }
    } catch(error) {
        res.json({ success: false, message: 'Error deleting user: ' + error.message })
    }
})



app.post('/get-form-date', (req,res) =>{
    console.log(req.body);
    res.json({ success: true, message: 'Form data received', data: req.body })
})

app.listen(3000, () => {
    console.log('🚀 Server running on http://localhost:3000')
})