const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
  getPosts();
};

const getPosts = () => {};

const buildPosts = (blogPosts) => {};

const timestamp = new Date();
document
  .getElementById("timestamp")
  .append(timestamp.getFullYear() + " " + timestamp.getMonth());
