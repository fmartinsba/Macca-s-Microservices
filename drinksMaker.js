const busUrl = process.env.RABBITMQ_URL;
const bus = require('servicebus').bus({ url: busUrl });

const drinks = [
  'Frozen Coke',
  'Frozen Lemon, Lime Bitters',
  'Frozen Fanta Pine Lime',
  'Frozen Coke McSpider',
  'Frozen Lemon, Lime Bitters McSpider',
  'Frozen Pine Lime McSpider',
  'Banana Berry Smoothie',
  'Mango Pineapple Smoothie',
  'Chocolate Frappé',
  'Coffee Frappé',
  'Mocha Frappé',
  'Orange Juice',
  'Coke',
  'Diet Coke',
  'Coke Zero',
  'Sprite',
  'Fanta',
  'Fuze Tea Peach Flavoured Iced Tea',
  'Chocolate Shake',
  'Strawberry Shake',
  'Vanilla Shake',
  'Espresso Pronto Cappuccino',
  'Espresso Pronto Latte',
  'Espresso Pronto Flat White',
  'Espresso Pronto Long Black',
  'Pop Tops Water',
  'Pop Tops Apple Juice',
  'CalciYum Wicked Chocolate Milk'
];

bus.subscribe('create_order', function(data) {
  setInterval(function() {
    bus.publish('done.drink', { order: data.id, item: drinks[data.details.drink] });
  }, 1000);
});
