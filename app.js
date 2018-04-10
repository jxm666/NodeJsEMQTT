

//引入mqtt模块
var mqtt = require('mqtt')
//配置mqtt链接地址及用户名与密码
//var client  = mqtt.connect('tcp://mqtt-tcp.zxbike.top:31883',{username: 'test', password: 'test_yjs'})
var client  = mqtt.connect('tcp://mqtt-tcp.zxbike.top:31883',{username: 'test', password: 'test_yjs',protocolId: 'MQIsdp', protocolVersion: 3})

client.on('connect', function () {
    console.log("start 1");
    //订阅队列
    client.subscribe('presence')
    console.log("start 2");
    //发布Mesage到队列主题
    client.publish('presence', 'Hello mqtt ')
    console.log("start3");
})

client.on('message', function (topic, message) {
    console.log("start4");
    // message is Buffer
    console.log(message.toString())
    client.end()
})
