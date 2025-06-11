import { Home } from './pages/home.js';
import { About } from './pages/about.js';
import { Contact } from './pages/contact.js';
import { Blog } from './pages/blog.js';

async function init() {
  const path = window.location.pathname;

  if (path.includes("about")) {
    await About();
  } else if (path.includes("contact")) {
    await Contact();
  } else if (path.includes("blog")) {
    await Blog();
  } else {
    await Home(); // fallback to home
  }
}

init();
