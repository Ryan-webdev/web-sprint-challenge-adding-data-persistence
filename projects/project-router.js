const express = require('express');
const projects = require('./project-model.js');

const router = express.Router();

router.get('/projects', (req, res) => {
  projects.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
});

router.get('/projects/:id', (req, res) => {
  const { id } = req.params;

  projects.findById(id)
  .then(project => {
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.get('/resources', (req, res) => {
  projects.findResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
});

router.post('/projects', (req, res) => {
  const projectData = req.body;

  projects.add(projectData)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project' });
  });
});

router.post('/resources', (req, res) => {
  const resData = req.body;

  projects.addResource(resData)
  .then(resource => {
    res.status(201).json(resource);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource' });
  });
});

router.get('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;

  projects.findTasksByProj(id)
  .then(tasks => {
    if (tasks.length) {
      res.status(200).json(tasks);
    } else {
      res.status(404).json({ message: 'Could not find tasks for given project' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tasks' });
  });
});

router.post('/projects/:id/tasks', (req, res) => {
  const taskData = req.body;
  const { id } = req.params;
  taskData.projects_id = id;

  projects.addTask(taskData)
  .then(task => {
    res.status(201).json(taskData);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new task', err: err });
  });
})


module.exports = router;