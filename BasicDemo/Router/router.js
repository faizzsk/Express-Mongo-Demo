var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send("Hello World!");
});

router.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
   console.log("post");
});

module.exports = router;
