const mongoose = require ('mongoose');
const mongoURL = "mongodb+srv://FoodApp:951nanygv1@cluster0.hesrmue.mongodb.net/FoodAppMERN?retryWrites=true&w=majority";


const mongoDB = async () =>{
    try{
    await mongoose.connect(mongoURL);
    console.log("connected");
    let fetched_data = mongoose.connection.db.collection("food_items");
    let data = await fetched_data.find({}).toArray();
    //console.log(data);
    global.food_items = data;
    let food_category = mongoose.connection.db.collection("food_category");
    let catData = await food_category.find({}).toArray();
    global.food_category= catData;
    } catch (error) {
        console.log("err", error);
    }
}

module.exports = mongoDB;