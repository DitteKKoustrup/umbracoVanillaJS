import { fetchContent } from "../util/umbracoApi";

export async function MediaPicker(contentId) {
    const item = await fetchContent(contentId);

    console.log(item);

    const container = document.getElementById('content');

        const wrapper = document.createElement('div');
        wrapper.classList.add('content-block');

        const image = item.properties.mediaPickers?.[0];
        const imageUrl = image?.url ? `https://localhost:44337${image.url}?crop=thumbnail&width=200&height=100` : null;

        wrapper.innerHTML = `
            ${imageUrl ? `<img src="${imageUrl}" alt="${""}" class="main-image">` : ''}

        `;

        container.appendChild(wrapper);
    


}