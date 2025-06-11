import { Footer } from "../components/footerRender";
import { Navbar } from "../components/navBarRender";

export async function About() {
    const container = document.getElementById('content');
    container.innerHTML = ''; 

    await Navbar("33750dbc-8a0b-46e6-bcc3-53191c315c2a");
    await Footer("33750dbc-8a0b-46e6-bcc3-53191c315c2a");
}
