import { fetchContent } from "../util/umbracoApi";

export async function UrlPicker(contentId) {
    const item = await fetchContent(contentId);
    console.log(item);

    const container = document.getElementById('content');

    const wrapper = document.createElement('div');
    wrapper.classList.add('content-block');

    const title = item.properties.header || 'No title';
    const descriptionMarkup = item.properties.description || '';

    // Add title and description safely
    wrapper.innerHTML = `
        <h2>${title}</h2>
        <p>${descriptionMarkup}</p>
    `;

    // Handle the links
    const links = item.properties.urlpicker;
    if (Array.isArray(links) && links.length > 0) {
        const linkList = document.createElement('ul');
        linkList.classList.add('urlpicker-links');

        links.forEach(link => {
            const listItem = document.createElement('li');

            const a = document.createElement('a');
            a.href = link.url || '#';
            a.textContent = link.title || link.url || 'Untitled link';
            a.target = link.target || '_self';

            listItem.appendChild(a);
            linkList.appendChild(listItem);
        });

        // Now append the list *after* setting innerHTML
        wrapper.appendChild(linkList);
    }

    container.appendChild(wrapper);
}
