import cuid from 'cuid';
// import './index.css';

function validateName(name) {
  if (!name) {
    throw new TypeError('Name must not be blank');
  }
}

function create(name) {
  return {
    id: cuid(),
    name,
    checked: false
  };
}

export default {
  validateName,
  create
};
