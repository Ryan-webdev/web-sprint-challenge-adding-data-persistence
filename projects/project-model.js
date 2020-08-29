const db = require('../data/db-config.js');



function find() {
  return db('projects');
}

function findById(id) {
  return db('projects').where({ id }).first();
}

function findResourceById(id) {
  return db('resource').where({ id }).first();
}

function findResources() {
  return db('resource');
}

function findTasks(id) {
  return db('tasks')
    .where({ id })
    .select();
}

function findTasksByProj(id) {
  return db('tasks')
    .join('projects', 'projects.id', 'tasks.projects_id')
    .select('tasks.id', 'projects.name', 'projects.description', 'tasks.description', 'tasks.notes', 'tasks.completed', 'tasks.projects_id')
    .where('projects_id', id);
}

function add(project) {
	return db('projects')
    .insert(project)
		.then(ids => {
			return findById(ids[0]);
		});
}

function addResource(resource) {
  return db('resource')
    .insert(resource)
		.then(ids => {
			return findResourceById(ids[0]);
		});
}

function addTask(task) {
  return db('tasks')
    .insert(task);
}



module.exports = {
    find,
    findById,
    findResources,
    findTasks,
    findTasksByProj,
    add,
    addResource,
    addTask,
  }