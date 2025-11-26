require('dotenv').config();
const mongoose = require('mongoose');

console.log('Testing connection to:', process.env.MONGODB_URI.replace(/:[^:]*@/, ':****@'));

mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000
})
.then(() => {
    console.log('✅ Connection successful!');
    mongoose.connection.close();
})
.catch((err) => {
    console.error('❌ Connection failed:', err.message);
    process.exit(1);
});
