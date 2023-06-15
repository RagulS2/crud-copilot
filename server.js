const express=require('express');
const app=express();
app.use(express.json());


const cors=require('cors');
app.use(cors());


const mysql=require('mysql');

var connection=mysql.createConnection({
    host:'127.0.0.1',   
   user:'rahul',  
    password:'Ragul@0209',
    database:'ActorList'
});

connection.connect();
console.log('connected to database');


app.get('/actors',(req,res)=>{  
    connection.query('SELECT id,Name,Age,industry FROM Actor where isActive=1',(err,result)=>{
        if(err){
           cosole.log(err);
        }
        else{
            res.json(result);          
        }
  
    })
});

app.get('/get/:id',(req,res)=>{
    connection.query('SELECT id,Name,Age,industry FROM Actor WHERE id=?',[req.params.id],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.json(result);
        }
    })                      

});
app.post('/insert',(req,res)=>{
    connection.query('INSERT INTO Actor(Name,Age,industry) VALUES(?,?,?)',[req.body.Name,req.body.Age,req.body.industry],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(result);
        }
    })
}   );  
app.put('/update',(req,res)=>{      
    connection.query('UPDATE Actor SET Name=?,Age=?,industry=? WHERE id=?',[req.body.Name,req.body.Age,req.body.industry,req.body.id],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(result);
        }
    })
}       );                    
app.put('/delete',(req,res)=>{
    connection.query('UPDATE Actor SET isActive=0 where id=?',[req.body.id],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
           console.log('deleted');
        }
    })
}  );                                         


app.listen(4000,()=>{
    console.log('server started');
}   );  
