const  express  = require ("express");
const mongoDB = require ("./db.js");

const app = express();
const port = 5000;
mongoDB();

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin","https://quickcrave-frontend.onrender.com/");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', (req, res) => {
    res.send("hello world")
});

app.use(express.json());
app.use("/api", require("./Routes/CreateUser.js"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

app.listen(port, () =>{
    console.log(`server running on port ${port}`)
});
