const fs = require("fs");
const PATH = "./data.json";

class Post {
  get() {
    // get post
    return this.readData();
  }

  getIndividualBlog() {
    // get one Blog post
  }

  add() {
    // add new post
  }
  readData() {
    // get data form data.json
    let rawdata = fs.readFileSync(PATH);
    let posts = JSON.parse(rawdata);
    return posts;
  }
}

module.exports = Post;
