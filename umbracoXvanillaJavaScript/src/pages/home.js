import { Footer } from "../components/footerRender";
import { Navbar } from "../components/navBarRender";
import { GLOBAL_CONTENT_IDS } from "../util/config.js";

export async function Home() {
    const container = document.getElementById('content');
    container.innerHTML = ''; 

    await Navbar(GLOBAL_CONTENT_IDS.home);
    await Footer(GLOBAL_CONTENT_IDS.home);
}
