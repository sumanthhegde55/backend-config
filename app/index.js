const express = require("express");
const app = express();
const cors = require('cors');
const { PORT = 8089} = process.env;
let x = '0';
const books = {
  '1':{id:'1',name:'Harry Potter And The Philosopher\'s Stone',author:'JK Rowling',cover:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0241527%2F&tbnid=ydJRTZx-TZ5IfM&vet=12ahUKEwid5b6UndL1AhXrF7cAHbE5BaUQMygKegUIARDnAQ..i&docid=1sUXD6j3F3h_RM&w=510&h=755&itg=1&q=harry%20potter&client=ubuntu&ved=2ahUKEwid5b6UndL1AhXrF7cAHbE5BaUQMygKegUIARDnAQ'},
  '3':{id:'3',name:'c',author:'a_2',cover:"http://books.google.com/books/content?id=7bT5gO7CrVMC&printsec=frontcover&img=1&zoom=1&source=gbs_api"},
  '4':{id:'4',name:'d',author:'a_3',cover:"http://books.google.com/books/content?id=TXzaywie004C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
  '5':{id:'5',name:'e',author:'a_4',cover:"http://books.google.com/books/content?id=2UlLLgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},
  '6':{id:'6',name:'f',author:'a_5',cover:"http://books.google.com/books/content?id=yBYmAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
  '7':{id:'7',name:'g',author:'a_6',cover:"http://books.google.com/books/content?id=LUVOPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},
  '8':{id:'8',name:'h',author:'a_7',cover:"https://images-na.ssl-images-amazon.com/images/I/91dDv9WOcFL.jpg"},
  '9':{id:'9',name:'i',author:'a_8',cover:"https://5.imimg.com/data5/FL/IL/MY-49937457/selection_198-500x500.png"},
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
  
