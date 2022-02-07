const express = require("express");
const app = express();
const cors = require('cors');
const { PORT = 8089} = process.env;
const books = {
  '1':{id:'1',name:'Harry Potter Deathly Hallows',author:'JK Rowling',cover:'https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg'},
  '2':{id:'2',name:'Sherlock Holmes',author:'Sir Arthur Doyle',cover:"https://www.publicbookshelf.com/images/sherlock-holmes423x630.jpg"},
  '3':{id:'3',name:'Merchant of Venice',author:'W. Shakespeare',cover:"https://images-na.ssl-images-amazon.com/images/I/71ot2ctZ3mL.jpg"},
  '4':{id:'4',name:'The Lord Of The Rings',author:'JRR Tolkien',cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg"},
  '5':{id:'5',name:'The Da Vinci Code',author:'Dan Brown',cover:"https://images-eu.ssl-images-amazon.com/images/I/5171w-4D2FL._SX342_SY445_QL70_ML2_.jpg"},
  '6':{id:'6',name:'Wings of Fire',author:'APJ A. Kalam',cover:"https://rukminim1.flixcart.com/image/416/416/juk4gi80/book/4/6/6/wings-of-fire-original-imaffmk4gx5pxqvf.jpeg?q=70"},
  '7':{id:'7',name:'A Brief History Of Time',author:'Stephen hawking',cover:"https://i.pinimg.com/originals/0e/4a/3b/0e4a3b402a182777a4b3420efbf64be3.jpg"},
  '8':{id:'8',name:'Hunger Games',author:'Suzainne Collins',cover:"https://images-na.ssl-images-amazon.com/images/I/61nZqhftUPL.jpg"},
}

// 1 : https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/50/1449878132-9781781100264.jpg
// 1 : https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg
// 2 : https://www.publicbookshelf.com/images/sherlock-holmes423x630.jpg 
// 2 : https://images-na.ssl-images-amazon.com/images/I/91dDv9WOcFL.jpg

// const connectDb = require("./src/connection");
// const User = require("./src/User.model");

// app.get("/users", async (req, res) => {
//     const users = await User.find();
//     console.log("users : " ,users);
//     res.json(users);
//   });
//   app.get("/user-create", async (req, res) => {
//     const user = new User({ bookid: x, author:'xyz' + x, image:'image' + x});
//     x += 1; 
//     await user.save().then(() => console.log("User created"));
  
//     res.send("User created \n");
//   });

  app.use(cors());

  app.get('/books', (req,res) =>{
    console.log("request received :");
    res.send(books);
  })
  app.get('/',(req,res) =>{
    res.json('backend running');
  })
  app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`);
  });
  
