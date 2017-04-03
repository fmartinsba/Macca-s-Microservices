const busUrl = process.env.RABBITMQ_URL;
const bus = require('servicebus').bus({ url: busUrl });

const sides = [
  'Sweet Chilli and Sour Cream Loaded Fries',
  'Gravy Loaded Fries',
  'Fries',
  'Chicken McBites'
];

bus.subscribe('create_order', function(data) {
  setInterval(function() {
    bus.publish('done.side', { order: data.id, item: sides[data.details.side] });
  }, 1000);
});
