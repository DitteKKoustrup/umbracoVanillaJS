import { fetchContent } from "../util/umbracoApi";

export async function TinyMce(contentId) {
    const item = await fetchContent(contentId);

    console.log(item);

    const container = document.getElementById('content');

        const wrapper = document.createElement('div');
        wrapper.classList.add('content-block');

        const tinyM = item.properties.tinyMc.markup || '';

        wrapper.innerHTML = `
            ${tinyM}
        `;

        container.appendChild(wrapper);
    
}
