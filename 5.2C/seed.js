const mongoose = require('mongoose');
require('./config/db');
const Cards = require('./models/Cards');

const sampleCards1 = new Cards({
    title: "Kitten 2",
    image: "images/kitten-2.jpg",
    link: "About Kitten 2",
    description: "Demo description about kitten 2"  
});
const sampleCards2 = new Cards({
    title: "Kitten 3",
    image: "images/kitten-3.jpg",
    link: "About Kitten 3",
    description: "Demo description about kitten 3"  
});
sampleCards1.save().then(() => console.log("Sample card 1 saved!"));
sampleCards2.save().then(() => console.log("Sample card 2 saved!"));
