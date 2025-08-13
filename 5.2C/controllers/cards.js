const Cards = require('../models/Cards');

exports.getAllCards = async (req, res) => {
    const projects = await Cards.find({});
    console.log(projects)
    res.json({ statusCode: 200, data: projects, message: 'Success' });
};
