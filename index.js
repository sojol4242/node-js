const express=require("express")
const app = express();
const port = 4500;
const cors=require("cors")

app.use(cors());
app.use(bodyParser.json())

const user = ["sojol", "sajib", "tarak", "sayem"]

// get 
app.get('/peoples/people/:id', (req, res) => {
  const id = req.params.id
  const name=user[id]
   res.send({id,name}) 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// post :
app.post("/adduser", (req, res) => {
  console.log("data resolved",req.body);
  
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})







// app.get('/', (req, res) => {
//   const people = {
//     name: "Sojol",
//     age: 43,
//     dept:'EEE'
//   }
//   res.send(people)
// })
// app.get('/peoples/people', (req, res) => {
//   const people = {
//     name: "Shamim",
//     age: 33,
//     dept:'Cse'
//   }
//   res.send(people)
// })
