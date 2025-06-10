import { fetchContent } from "../util/umbracoApi";

export async function DropDown(contentId) {
    const item = await fetchContent(contentId);

     console.log(item);

    const container = document.getElementById('content');

    const wrapper = document.createElement('div');
    wrapper.classList.add('content-block');

    const text = item.properties.text || '';

    const dropDown = item.properties.dropDown || '';

    wrapper.innerHTML = `
        ${text}
        ${dropDown}
    `;

    container.appendChild(wrapper);
}

