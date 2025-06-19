// oop/BlogManager.js

class BlogManager {
  #posts; // Private property using ES2020 syntax

  constructor() {
    this.#posts = [];
  }

  // Add post with duplicate ID validation
  addPost(blogPost) {
    if (this.#posts.find(p => p.id === blogPost.id)) {
      console.log(`❌ Post with ID "${blogPost.id}" already exists. Not added.`);
      return;
    }
    this.#posts.push(blogPost);
  }

  // Get all posts
  getAllPosts() {
    return this.#posts;
  }

  // Find by ID
  findPostById(id) {
    return this.#posts.find(post => post.id === id);
  }

  // ✅ Get all posts by a specific author
  getPostsByAuthor(author) {
    return this.#posts.filter(post => post.author.toLowerCase() === author.toLowerCase());
  }

  // ✅ Filter posts containing a keyword in title or content
  filterPostsByKeyword(keyword) {
    const lower = keyword.toLowerCase();
    return this.#posts.filter(
      post =>
        post.title.toLowerCase().includes(lower) ||
        post.content.toLowerCase().includes(lower)
    );
  }

  // ✅ Get recent posts, sorted by createdAt
  getRecentPosts(limit) {
    return this.#posts
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, limit);
  }
}

module.exports = BlogManager;
