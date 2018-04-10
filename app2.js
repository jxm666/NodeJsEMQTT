
var events = require('events');

var EventEmitter=new events.EventEmitter();  /*实例化事件对象*/

EventEmitter.on('toparent',function(){

    console.log('接收到了广播事件');

})

//var client  = mqtt.connect('tcp://mqtt-tcp.zxbike.top:31883',{username: 'bi', password: 'bi_zxbike'})
//

setTimeout(function(){
    console.log('广播');
    EventEmitter.emit('toparent');  /*发送广播*/
},1000)
