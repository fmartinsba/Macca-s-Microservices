const busUrl = process.env.RABBITMQ_URL;
const bus = require('servicebus').bus({ url: busUrl });

const burguers = [
  'Big Mac',
  'Quarter Pounder',
  'Double Quarter Pounder',
  'Cheeseburger',
  'Double Cheeseburger',
  'Hamburger',
  'McChicken',
  'Chicken \'n\' Cheese',
  'Filet-o-Fish',
  'Gourmet Angus Truffle & Cheese',
  'Gourmet Angus Cheeseburger',
  'Gourmet Homestyle Angus',
  'Gourmet Classic Angus',
  'Gourmet Chicken Caesar',
  'Gourmet Classic Chicken'
];

bus.subscribe('create_order', function(data) {
  setInterval(function() {
    bus.publish('done.burger', { order: data.id, type: 'burger', item: burguers[data.details.burger] });
  }, 1000);
});
