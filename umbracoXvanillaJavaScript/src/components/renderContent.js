export async function renderContent(items) {

    const contentId = ""
    const items = await fetchContent(contentId);


    const container = document.getElementById('content');
    container.innerHTML = '';

    items.forEach(item => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('content-block');

        const title = item.properties.title || 'No title';
        const descriptionMarkup = item.properties.description?.markup || '';
        const image = item.properties.image?.[0];
        const imageUrl = image?.url ? `https://localhost:44337${image.url}?crop=thumbnail&width=200&height=100` : null;

        const blockListItems = item.properties.blockList?.items || [];

        const blocksHtml = blockListItems.map(block => {
            const sectionTitle = block.content?.properties?.sectionTitle || 'No section title';
            const sectionDescription = block.content?.properties?.sectionDescription || 'No section description';

            return `
                <div class="block-section">
                    <h2>${sectionTitle}</h2>
                    <p>${sectionDescription}</p>
                </div>
            `;
        }).join('');

        wrapper.innerHTML = `
            <h1>${title}</h1>
            ${descriptionMarkup}
            ${imageUrl ? `<img src="${imageUrl}" alt="${title}" class="main-image">` : ''}
            ${blocksHtml}
        `;

        container.appendChild(wrapper);
    });
};
