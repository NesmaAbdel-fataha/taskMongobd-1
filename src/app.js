const mongodb = require ('mongodb');

const mongoClinet = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = "task-1";

mongoClinet.connect(connectionUrl , (error , result)=>{
if(error){
    return console.log('error has occured')
}
console.log('all perf')
const db = result.db(dbname)
db.collection('student').insertOne({
    name: "rawan",
    age : 15,
},(error , dataOne)=>{
    if(error){console.log("unable to insert data")}
    console.log(dataOne.insertedId)
})

db.collection('student').insertOne({
    name: "sara",
    age : 14,
},(error , dataOne)=>{
    if(error){console.log("unable to insert data")}
    console.log(dataOne.insertedId)
})
///////////////////////
db.collection('clintes').insertMany([
    {
        name: "ahmed",
        age : 27
    }
    ,
    {
        name: "amir",
        age : 27
    },
    {
        name: "amjad",
        age : 27
    },
    {
        name: "ashraf",
        age : 27
    },
    {
        name: "ayman",
        age : 27
    },
    {
        name: "basem",
        age : 21
    },
    {
        name: "nader",
        age : 22
    },
    {
        name: "eaad",
        age : 23
    },
    {
        name: "samy",
        age : 24
    },
    {
        name: "ramy",
        age : 25
    }],(error , data)=>{
            if(error){
                console.log('unable to insert data')
            }
            console.log(data.insertedCount)

})

db.collection('clintes').updateOne({_id:mongodb.ObjectId("66b244dad51ec86e1b038734")},{
    $set:{name : 'Hasan'},
   $inc : {age : 4}
}).
then((data1)=> {console.log(data1.modifiedCount)})
.catch((error)=>{console.log(error)})


db.collection('clintes').updateOne({_id:mongodb.ObjectId("66b244dad51ec86e1b038735")},{
    $set:{name : 'maged'},
    $inc : {age : 4}
}).
then((data1)=> {console.log(data1.modifiedCount)})
.catch((error)=>{console.log(error)})

db.collection('clintes').updateOne({_id:mongodb.ObjectId("66b244dad51ec86e1b038736")},{
    $set:{name : 'islam'},
    $inc : {age : 4}
}).
then((data1)=> {console.log(data1.modifiedCount)})
.catch((error)=>{console.log(error)})

db.collection('clintes').updateOne({_id:mongodb.ObjectId("66b244dad51ec86e1b038737")},{
    $set:{name : 'ragab'},
    $inc : {age : 4}
}).
then((data1)=> {console.log(data1.modifiedCount)})
.catch((error)=>{console.log(error)})


db.collection("clintes").updateMany({},{
    $inc: {age : 10}
})

.then((data1)=>{console.log(data1.modifiedCount)})
.catch((error)=>{console.log(error)})



db.collection('clintes').deleteMany({age:41})
.then((data1) =>{console.log(data1.deletedCount)})
.catch((error) =>{console.log(error)})



})

// const db = res1.db(dbname)
// //////////////////////
// db.collection('users').insertOne({
//     name:"ammar",
//      age: 20,
// },(error , data) =>{
//     if(error){
//         console.log('unable to insert data')
//     }
//     console.log(data.insertedId)
// })

// db.collection('users').insertMany([
//     {name:"ammar",
//     age: 20},
//     {name:"heba",
//      age: 24},
//   {name:"seham",
//  age: 25},
// ],(error , data)=>{
//     if(error){
//         console.log('unable to insert data')
//     }
//     console.log(data.insertedCount)
// })

// db.collection('users').findOne({_id:mongodb.ObjectId("66ae7eddf7e09112957325da")},(error,user)=>{
//     if(error){
//         console.log('unable to insert data')
//     }
//     console.log(user)
// })
// db.collection('users').find({age:24}).limit(3).toArray((error,users)=>{
// if(error){
//  return   console.log("errorr")
// }
// console.log(users)
// })







//////////////////////////







