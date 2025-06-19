// functional/blogManager.js

const blogPosts = [];

function createPost(id, title, content, author) {
  return {
    id,
    title,
    content,
    author,
    createdAt: new Date()
  };
}

function addPost(post) {
  blogPosts.push(post);
}

function getAllPosts() {
  return blogPosts;
}

function findPostById(id) {
  return blogPosts.find(post => post.id === id);
}

module.exports = { createPost, addPost, getAllPosts, findPostById };
