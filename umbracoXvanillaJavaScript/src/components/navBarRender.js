import { fetchContent } from "../util/umbracoApi";

export async function Navbar(contentId) {
  const item = await fetchContent(contentId);
  console.log(item);

  const container = document.getElementById('content');

  const wrapper = document.createElement('div');
  wrapper.classList.add('content-block');

  const logoText = item.properties.header || 'Site Name';

  wrapper.innerHTML = `
    <header class="navbar">
      <div class="logo-text">${logoText}</div>
      <nav>
        <a href="/index.html">Home</a>
        <a href="/about.html">About</a>
        <a href="/contact.html">Contact</a>
        <a href="/blog.html">Blog</a>
      </nav>
    </header>
  `;

  container.appendChild(wrapper);

const navLinks = wrapper.querySelectorAll('.navbar nav a'); // use wrapper to scope the query

navLinks.forEach(link => {
  const linkPath = new URL(link.href).pathname;
  const currentPath = window.location.pathname;

  if (linkPath === currentPath) {
    link.classList.add('active');
  }
});


}


