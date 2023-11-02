const { request, response } = require('express');

const getUsers = (req = request, res = response) => {
  const { q, nombre } = req.query
  res.json({
    ok: true,
    msg: 'Hello GET - controller',
    q,
    nombre,
  })
}

const postUsers = (req = request, res = response) => {
  console.log(req.body);
  res.json({
    ok: true,
    msg: 'Hello POST - controller',
    data: req.body,
  })
}

const putUsers = (req = request, res = response) => {
  console.log({ ID: req.params.id });
  res.json({
    ok: true,
    msg: 'Hello PUT - controller',
    id: req.params.id
  })
}

const patchUsers = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Hello PATCH - controller'
  })
}

const deleteUsers = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Hello DELETE - controller'
  })
}


module.exports = {
  getUsers,
  postUsers,
  putUsers,
  patchUsers,
  deleteUsers,
};

