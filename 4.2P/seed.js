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
    title: "Kitten 5",
    image: "images/kitten-5.jpg",
    link: "About Kitten 5",
    description: "Demo description about kitten 5"  
});
sampleProject.save().then(() => console.log("Sample projectsaved!"));
