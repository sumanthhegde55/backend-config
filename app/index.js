const express = require("express");
const app = express();
const cors = require('cors');
const { PORT = 8089} = process.env;
let x = '0';
const books = {
  '1':{id:'1',name:'Harry Potter And The Philosopher\'s Stone',author:'JK Rowling',cover:'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg'},
  '3':{id:'3',name:'Sherlock Holmes',author:'A.C Doyle',cover:"http://books.google.com/books/content?id=7bT5gO7CrVMC&printsec=frontcover&img=1&zoom=1&source=gbs_api"},
  '4':{id:'4',name:'Merchant of Venice',author:'W. Shakespeare',cover:"https://images-na.ssl-images-amazon.com/images/I/71ot2ctZ3mL.jpg"},
  '5':{id:'5',name:'The Lord Of The Rings',author:'JRR Tolkien',cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg"},
  '6':{id:'6',name:'The Da Vinci Code',author:'Dan Brown',cover:"https://images-eu.ssl-images-amazon.com/images/I/5171w-4D2FL._SX342_SY445_QL70_ML2_.jpg"},
  '7':{id:'7',name:'Wings of Fire',author:'APJ A. Kalam',cover:"http://books.google.com/books/content?id=LUVOPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},
  '8':{id:'8',name:'A Brief History Of Time',author:'Stephen hawking',cover:"https://images-na.ssl-images-amazon.com/images/I/91dDv9WOcFL.jpg"},
  '9':{id:'9',name:'Hunger Games',author:'Suzie Bates',cover:"https://5.imimg.com/data5/FL/IL/MY-49937457/selection_198-500x500.png"},
}
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
    console.log("request received :",x);
    x+=1;
    res.send(books);
  })
  app.get('/',(req,res) =>{
    res.json('backend running');
  })
  app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`);
  });
  
