import { fetchContent } from "../util/umbracoApi";

export async function ContentPicker(contentId) {
    const item = await fetchContent(contentId);
    const container = document.getElementById('content');

    console.log(item);

    const wrapper = document.createElement('div');
    wrapper.classList.add('content-block');

    const title = item.properties.header || 'No title';
    const descriptionMarkup = item.properties.description || '';

    let contentPickerMarkup = '';

    const picked = item.properties.contentpickers;

    if (picked && picked.contentType) {
        console.log("Picked content:", picked); // Debug

        switch (picked.contentType.toLowerCase()) {
            case 'mediapicker': {
                const imageUrl = picked.url
                    ? `https://localhost:44337${picked.url}?crop=thumbnail&width=200&height=100`
                    : null;

                contentPickerMarkup = imageUrl
                    ? `<img src="${imageUrl}" alt="${picked.name}" class="main-image">`
                    : `<p>No image available</p>`;
                break;
            }

            case 'blocklist': {
                const blockListItems = picked.blocklists?.items || [];
                const blocksHtml = blockListItems.map(block => {
                    const blockTitle = block.content?.properties?.blockTitle || 'No section title';
                    const blockDescription = block.content?.properties?.blockDescription || 'No section description';
                    return `
                        <div class="block-section">
                            <h3>${blockTitle}</h3>
                            <p>${blockDescription}</p>
                        </div>
                    `;
                }).join('');

                contentPickerMarkup = blocksHtml || '<p>No blocks found</p>';
                break;
            }

            case 'textarea': {
                const text = picked.properties.text || '<p>No text available</p>';
                contentPickerMarkup = `<div class="text-area">${text}</div>`;
                break;
            }

            default:
                contentPickerMarkup = `<p>Unknown content type: ${picked.contentType}</p>`;
        }
    } else {
        contentPickerMarkup = `<p>No valid picked content</p>`;
    }

    wrapper.innerHTML = `
        <h2>${title}</h2>
        ${descriptionMarkup}
        ${contentPickerMarkup}
    `;

    container.appendChild(wrapper);
}
