const express = require('express');
const createRouter = function(data){
  const router = express.Router();

  router.get('/', function(req,res){
    res.json(data)
  });
  router.get('/:id',function(req,res){
    res.json(data[req.params.id])
  });
  router.post('/', function(req,res){
    data.push(req.body);//add the body(the new object) inside the data array
    res.json(data)//gives back the full array
  });
  router.put('/:id', function(req,res){
    data[req.params.id] =req.body //finds the id and replace it with the body
    //assign the tea with the fiven id, witht the request body
    res.json(data)
  });
  router.delete('/:id', function(req,res){
    data.splice(req.params.id, 1)
    res.json(data)
  })
  return router;
};

module.exports = createRouter;
