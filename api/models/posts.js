const fs = require("fs");
const PATH = "./data.json";

class Post {
  get() {
    // get post
    return this.readData();
  }

  getIndividualBlog(postId) {
    // get one Blog post
    const posts = this.readData();
    const foundPost = posts.find((post) => post.id == postId);
    return foundPost;
  }

  add(newPost) {
    // add new post
    const currentPosts = this.readData();
    currentPosts.unshift(newPost);
    this.storeData(currentPost);
  }

  readData() {
    // get data form data.json
    let rawdata = fs.readFileSync(PATH);
    let posts = JSON.parse(rawdata);
    return posts;
  }

  storeData(rawData) {
    let data = JSON.stringify(rawData);
    fs.writeFileSync(PATH, data);
  }
}

module.exports = Post;
