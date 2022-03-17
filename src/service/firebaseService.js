import firebase from "./firebase";

const db = firebase.database().ref("/");

export const getAll = () => {
  return db;
};

export const create = (data) => {
  return db.push(data);
};

export  const update = (key, data) => {
  return db.child(key).update(data);
};

export  const remove = (key) => {
  return db.child(key).remove();
};

export  const removeAll = () => {
  return db.remove();
};