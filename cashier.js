const busUrl = process.env.RABBITMQ_URL;
const bus = require('servicebus').bus({ url: busUrl });

setInterval(function () {
  bus.publish('create_order', {
    id: 1,
    details: {
      burger: 0,
      side: 2,
      drink: 12
    }
  });
}, 1000);
