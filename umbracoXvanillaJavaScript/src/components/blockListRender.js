import { fetchContent } from "../util/umbracoApi";

export async function BlockList(contentId) {
    const item = await fetchContent(contentId);

    console.log(item);

    const container = document.getElementById('content');

        const wrapper = document.createElement('div');
        wrapper.classList.add('content-block');

        const blockListItems = item.properties.blocklists?.items || [];

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

        wrapper.innerHTML = `
            ${blocksHtml}
        `;

        container.appendChild(wrapper);
    


}