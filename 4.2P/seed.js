const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sit725db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});

const Project = mongoose.model('Project', ProjectSchema);
const sampleProject = new Project({
    title: "Kitten 6",
    image: "images/kitten-6.jpg",
    link: "About Kitten 6",
    description: "Demo description about kitten 6"  
});
sampleProject.save().then(() => console.log("Sample projectsaved!"));
