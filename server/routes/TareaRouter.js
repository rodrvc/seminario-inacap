const express = require('express');
const TareaRouter = express.Router();
const Tarea = require('../model/Tarea');

//CRUD

//read
TareaRouter.get('/' , (req, res) =>{
    Tarea.find({},(err, response) => {
        if(err)
            res.status(500).json({message: {
                msg: "No se puede obtener objeto de prueba",
                msgError: true
               
            }});
        else
            //res.status(200).json(response); 
         
            res.send("hello1");
            
    });
});


//create 
/*
TareaRouter.post('/', (req, res) => {
    const TareaRes = new Tarea(req.body);
    console.log(TareaRes);
    Tarea.save((err, document) => {
        if(err)
        res.status(500).json({message: {
            msg: "No se puede guardar empleado",
            msgError: true 
        }});
        else 
        res.status(200).json({message:{
            msgBody: "Se puedo guardar usuario",
            msgError: false
        }})
    });
});
*/ 

TareaRouter.post('/', (req, res)=> {
    console.log(req.body);
    const TareaCuardada = new Tarea({
        firtsName: req.body.firtsName, 
        lastName: req.body.lastName,
        job: req.body.job,
        salary: req.body.salary
    });
    TareaCuardada.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err})
    })
  });


//delete

TareaRouter.delete('/:id', (req,  res)=>{ 
    Tarea.findByIdAndDelete(req.params.id , err => {
        if(err)
        res.status(500).json({message: {
            msg: "No se puede borrar empleado",
            msgError: true 
        }});
        else
        res.status(200).json({message: {
            msg: "Se pudo borrar correctamente",
            msgError: false
        }});
    })
})



//update
//https://www.youtube.com/watch?v=35BSnmTbjlE


module.exports = TareaRouter; 