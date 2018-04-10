

//引入mqtt模块
var mqtt = require('mqtt')
//配置mqtt链接地址及用户名与密码
// var client  = mqtt.connect('tcp://mqtt-tcp.zxbike.top:31883',{username: 'bi', password: 'bi_zxbike'})
var client  = mqtt.connect('tcp://mqtt-tcp.zxbike.top:31883',{username: 'test', password: 'test_yjs',protocolId: 'MQIsdp', protocolVersion: 3})

client.on('connect', function () {
    //订阅队列
    client.subscribe('presence')
    //发布Mesage到队列主题
    // client.publish('presence', 'Hello mqtt')
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
})

/*
for(var i=0 ;i< 100;i++){
    client.publish('presence', 'Hello mqtt')
}
*/
