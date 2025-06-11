import { fetchContent } from "../util/umbracoApi";

export async function Footer(contentId) {
    const item = await fetchContent(contentId);

    const container = document.getElementById('content');

    const wrapper = document.createElement('footer');
    wrapper.classList.add('footer'); // Use 'footer' class for styling

    // Assuming footerLogo and footerAddress contain raw HTML (e.g. <img>, <p>, <a>)
    // Wrap them in divs with classes to style easily
    const footerLogo = item.properties.footerLogo || '';
    const footerAddress = item.properties.footerAddress.markup || '';

    wrapper.innerHTML = `
        <div class="footer-logo">${footerLogo}</div>
        <div class="footer-address">${footerAddress}</div>
    `;

    container.appendChild(wrapper);
}
