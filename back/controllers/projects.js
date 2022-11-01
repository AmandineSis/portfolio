const Project = require("../models/Project");

exports.getAllProjects = (req, res, next) => {
  Project.find()
    .then((projects) => {
      const mappedProjects = projects.map((project) => {
        project.screenshot =
          req.protocol + "://" + req.get("host") + "/images/" + project.screenshot;
        project.frame = req.protocol + "://" + req.get("host") + "/images/" + project.frame;

        return project;
      });
      res.status(200).json(mappedProjects);
    })
    .catch(() => {
      res.status(500).send(new Error("Database error!"));
    });
};

exports.getOneProject = (req, res, next) => {
  Project.findById(req.params.id)
    .then((project) => {
      if (!project) {
        return res.status(404).send(new Error("Project not found!"));
      }
      project.imageUrl = req.protocol + "://" + req.get("host") + "/images/" + project.imageUrl;
      res.status(200).json(project);
    })
    .catch(() => {
      res.status(500).send(new Error("Database error!"));
    });
};
