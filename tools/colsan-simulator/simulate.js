var request = require('request');

var index = 1;
var up = true;
function tick(){
        if(up){
          index++;
          if(index == 11){
            up = false;
          }
        }
        if(!up){
           index--;
           if(index == 0){
              up = true;
           }
        }
        request.post({
          url:     'http://159.203.114.208:3000/api/Devices/add-datapoint',
          form:    { name: "Colsan",value : index, tonelaje: Math.floor(Math.random()*600) }
        }, function(error, response, body){
          console.log(index,body);
          setTimeout(function(){
                tick();
          },10*1000 + Math.random()*1000 );
        });
}

tick();
