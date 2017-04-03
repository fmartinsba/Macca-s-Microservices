const busUrl = process.env.RABBITMQ_URL;
const bus = require('servicebus').bus({ url: busUrl });

bus.subscribe('done.*', function(data) {
  console.log('ORDER: ' + data.order + ' | ITEM: ' + data.item); 
});
