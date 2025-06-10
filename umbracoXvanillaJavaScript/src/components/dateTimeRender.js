import { fetchContent } from "../util/umbracoApi";

export async function DateTime(contentId) {
    const item = await fetchContent(contentId);

     console.log(item);

    const container = document.getElementById('content');

    const wrapper = document.createElement('div');
    wrapper.classList.add('content-block');

    const title = item.properties.header || 'No title';
    const descriptionMarkup = item.properties.description || '';
    const text = item.properties.text || '';

    const rawDate = item.properties.timeDate;
    let timeDate = '';

    if (rawDate) {
        const date = parseUtcAsLocal(rawDate);
        timeDate = new Intl.DateTimeFormat('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }).format(date);
    }

    wrapper.innerHTML = `
        <h2>${title}</h2>
        ${descriptionMarkup}
        ${text}
        ${timeDate}
    `;

    container.appendChild(wrapper);
}

function parseUtcAsLocal(dateString) {
    const [datePart, timePart] = dateString.split('T');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hour, minute] = timePart.split(':').map(Number);

    return new Date(year, month - 1, day, hour, minute);
}
