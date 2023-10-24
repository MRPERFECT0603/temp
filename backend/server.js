//required modules
const express = require("express");
const path = require("path");
const pug  = require("pug");
const mongoose = require('mongoose');
const Contact = require("./models/contact");
const port =  8000; // a port number 
const cors = require("cors");




//MONGODB
mongoose.connect('mongodb://localhost/contacts', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

//EXPRESS 
const app = express() // creating an express app

app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));//setting up a public folder for static pages 
app.use(express.urlencoded({extended : true}));// Parse form data
app.use(cors());
//PUG
// app.set('view engine' , 'pug'); //setting pug as the view engine for the express app
// app.set('views' , path.join(__dirname , 'views')); //telling express the the files are in a folder named views.



// app.get('/' , (req , res)=>{
    // res.status(200).render('index.pug');
// })

app.post('/submit', async(req, res) => {
    const {name , email , contact , message} = req.body// Access form field data by name attribute 
    console.log(name);
    console.log(email);
    console.log(contact);
    console.log(message);
    try {
        // Create a new Contact document and save it to the database
        const newContact = new Contact({ name, email, contact , message });
        console.log(newContact);
        await newContact.save();
    
        res.status(200).send('<h1>Contact saved successfully!</h1>');
      } catch (error) {
        console.error(error);
        res.status(500).send('<h1>Error Saving the Contact!</h1>');
      }
    
});


app.listen(port , ()=>{
    console.log(`The app has been started on the ${port}.`);
});