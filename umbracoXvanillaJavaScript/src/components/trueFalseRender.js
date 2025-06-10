import { fetchContent } from "../util/umbracoApi";

export async function TureFalse(contentId) {
    const item = await fetchContent(contentId);

    console.log(item);

    const container = document.getElementById('content');

        const wrapper = document.createElement('div');
        wrapper.classList.add('content-block');

        const trueFalse = item.properties.truefals || 'false';

        wrapper.innerHTML = `
            ${trueFalse}
        `;

        container.appendChild(wrapper);
    
}
