import { fetchContent } from "../util/umbracoApi";

export async function TextBox(contentId) {
    const item = await fetchContent(contentId);

    console.log(item);

    const container = document.getElementById('content');

        const wrapper = document.createElement('div');
        wrapper.classList.add('content-block');

        const textB = item.properties.box || '';

        wrapper.innerHTML = `
            ${textB}
        `;

        container.appendChild(wrapper);
    
}
