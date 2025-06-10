import { fetchContent } from "../util/umbracoApi";

export async function TextArea(contentId) {
    const item = await fetchContent(contentId);

    console.log(item);

    const container = document.getElementById('content');

        const wrapper = document.createElement('div');
        wrapper.classList.add('content-block');

        const text = item.properties.text || '';

        wrapper.innerHTML = `
            ${text}
        `;

        container.appendChild(wrapper);
    
}
