const projects = require('../Models/projectModel')

exports.addProject = async (req, res) => {
    const { title, description, languages, github, demo } = req.body
    const picture = req.file.filename
    const userId = req.payload
    try {
        const existingProject = await projects.findOne({ github })
        if (existingProject) {
            res.status(406).json("Project Already Exists!")
        }
        else {
            const newProject = new projects({
                title, description, languages, github, picture, demo, userId
            })
            await newProject.save()
            res.status(201).json(newProject)
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }

}

exports.getUserProjects = async (req, res) => {
    const userId = req.payload
    try {
        const userProjects = await projects.find({ userId })
        res.status(200).json(userProjects)
    }
    catch (err) {
        res.status(400).json(err)
    }

}

exports.getAllProjects = async (req, res) => {
    try {
        const allprojects = await projects.find()
        res.status(200).json(allprojects)
    }
    catch (err) {
        res.status(400).json(err)
    }

}

exports.deleteproject = async (req, res) => {
    const { id } = req.params
    try {
        const result = await projects.findByIdAndDelete({ _id: id })
        res.status(200).json("Project Deleted!!")
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)

    }


}


exports.updateProject = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description, languages, github, demo, picture } = req.body
        const projectImage=req.file?req.file.filename:picture
        const result = await projects.findByIdAndUpdate({ _id: id }, { title, description, languages, github, demo, picture:projectImage,userId:req.payload })
        await result.save()
        res.status(200).json(result)

    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
    
}