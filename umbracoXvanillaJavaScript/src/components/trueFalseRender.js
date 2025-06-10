import { fetchContent } from "../util/umbracoApi";

export async function TureFalse(contentId) {
    const item = await fetchContent(contentId);

    console.log(item);

    const container = document.getElementById('content');

        const wrapper = document.createElement('div');
        wrapper.classList.add('content-block');

        const title = item.properties.header || 'No title';
        const descriptionMarkup = item.properties.description || '';
        const trueFalse = item.properties.truefals || 'false';

        wrapper.innerHTML = `
            <h2>${title}</h2>
            ${descriptionMarkup}
            ${trueFalse}
        `;

        container.appendChild(wrapper);
    
}
