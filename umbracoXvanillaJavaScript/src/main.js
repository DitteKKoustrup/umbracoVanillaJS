import { fetchContent } from './util/umbracoApi.js';
import { renderContent } from './components/renderContent.js';

async function init() {
    const items = await fetchContent();
    renderContent(items);
}

init();
