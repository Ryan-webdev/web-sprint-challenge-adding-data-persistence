const express = require('express');
const helmet = require('helmet');

const ProjectRouter = require('../projects/project-router')


const server = express();

server.use(helmet());
server.use(express.json());
//server api
server.use('/api', ProjectRouter);

module.exports = server;

