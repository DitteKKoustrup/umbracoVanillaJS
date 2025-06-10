import { fetchContent } from "../util/umbracoApi";

export async function Numeric(contentId) {
    const item = await fetchContent(contentId);

    console.log(item);

    const container = document.getElementById('content');

        const wrapper = document.createElement('div');
        wrapper.classList.add('content-block');

        const number = item.properties.numeric || '';

        wrapper.innerHTML = `
            ${number}
        `;

        container.appendChild(wrapper);
    
}
