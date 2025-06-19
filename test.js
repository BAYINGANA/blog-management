// test.js

const readline = require('readline');
const { BlogPost, BlogManager } = require('./oop');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const blogManager = new BlogManager();

function showMenu() {
  console.log('\n===== Blog Management Menu =====');
  console.log('1. ➕ Add Post');
  console.log('2. 📋 View All Posts');
  console.log('3. 🔍 Find Post by ID');
  console.log('4. 🚪 Exit');
  console.log('5. 👤 Get Posts by Author');
  console.log('6. 🔍 Filter by Keyword');
  console.log('7. 🆕 Get Recent Posts');
  rl.question('Choose an option: ', handleMenu);
}

function handleMenu(option) {
  switch (option.trim()) {
    case '1': return promptNewPost();
    case '2': return listAllPosts();
    case '3': return promptFindPost();
    case '4':
      console.log('\n👋 Goodbye!');
      rl.close();
      break;
    case '5': return promptPostsByAuthor();
    case '6': return promptKeywordSearch();
    case '7': return promptRecentPosts();
    default:
      console.log('❌ Invalid option. Try again.');
      showMenu();
  }
}

function promptNewPost() {
  rl.question('Enter ID: ', id => {
    rl.question('Enter Title: ', title => {
      rl.question('Enter Content: ', content => {
        rl.question('Enter Author: ', author => {
          const post = new BlogPost(id, title, content, author);
          blogManager.addPost(post);
          console.log('✅ Post added successfully!');
          showMenu();
        });
      });
    });
  });
}

function listAllPosts() {
  const posts = blogManager.getAllPosts();
  console.log('\n📚 All Blog Posts:');
  if (posts.length === 0) {
    console.log('⚠️ No posts available.');
  } else {
    posts.forEach(post => {
      console.log(`\n📝 ID: ${post.id}`);
      console.log(`   Title: ${post.title}`);
      console.log(`   Author: ${post.author}`);
      console.log(`   Created At: ${post.createdAt}`);
      console.log(`   Content: ${post.content}`);
    });
  }
  showMenu();
}

function promptFindPost() {
  rl.question('Enter Post ID to search: ', id => {
    const post = blogManager.findPostById(id);
    if (post) {
      console.log('\n🔍 Post Found:');
      console.log(`🆔 ID: ${post.id}`);
      console.log(`📌 Title: ${post.title}`);
      console.log(`✍️ Author: ${post.author}`);
      console.log(`🕒 Created At: ${post.createdAt}`);
      console.log(`📝 Content: ${post.content}`);

    } else {
      console.log('❌ No post found with that ID.');
    }
    showMenu();
  });
}

function promptPostsByAuthor() {
  rl.question('Enter author name: ', author => {
    const posts = blogManager.getPostsByAuthor(author);
    if (posts.length === 0) console.log('❌ No posts by this author.');
    else posts.forEach(p => printPost(p));
    showMenu();
  });
}

function promptKeywordSearch() {
  rl.question('Enter keyword to search: ', keyword => {
    const posts = blogManager.filterPostsByKeyword(keyword);
    if (posts.length === 0) console.log('❌ No posts matching keyword.');
    else posts.forEach(p => printPost(p));
    showMenu();
  });
}

function promptRecentPosts() {
  rl.question('How many recent posts to fetch?: ', n => {
    const posts = blogManager.getRecentPosts(Number(n));
    if (posts.length === 0) console.log('❌ No posts available.');
    else posts.forEach(p => printPost(p));
    showMenu();
  });
}

function printPost(post) {
  console.log(`\n📝 ID: ${post.id}`);
  console.log(`   Title: ${post.title}`);
  console.log(`   Author: ${post.author}`);
  console.log(`   Created At: ${post.createdAt}`);
  console.log(`   Content: ${post.content}`);
}


// Start the CLI
showMenu();
