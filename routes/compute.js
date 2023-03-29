var express = require('express');
var router = express.Router();
let x;
let y;

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x == undefined){
        x=Math.floor(Math.random()*10)
        y=Math.floor(Math.random()*5);
        let result =  Math.fround(x);
        let result2 = Math.random(x);
        let result3= Math.round(y);
        res.send(' Math.fround() applied for' +x +'is' +result+'\n Math.random() applied for' +x +'is' +result2+'\n Math.round() applied for number' +y+'is'+result3);
    }
    else{
        x =req.query.x;
        let result =  Math.fround(x);
        let result2 = Math.random(x);
        let result3= Math.round(y);
        res.send(' Math.fround() applied for' +x +'is' +result+'\n Math.random() applied for' +x +'is' +result2+'\n Math.round() applied for number' +y+'is'+result3);
    }
});

module.exports = router;