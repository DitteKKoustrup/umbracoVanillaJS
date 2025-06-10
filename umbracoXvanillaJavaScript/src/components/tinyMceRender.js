import { fetchContent } from "../util/umbracoApi";

export async function TinyMce(contentId) {
    const item = await fetchContent(contentId);

    console.log(item);

    const container = document.getElementById('content');

        const wrapper = document.createElement('div');
        wrapper.classList.add('content-block');

        const title = item.properties.header || 'No title';
        const descriptionMarkup = item.properties.description || '';
        const tinyM = item.properties.tinyMc.markup || '';

        wrapper.innerHTML = `
            <h2>${title}</h2>
            ${descriptionMarkup}
            ${tinyM}
        `;

        container.appendChild(wrapper);
    
}
