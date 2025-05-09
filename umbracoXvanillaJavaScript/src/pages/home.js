import { MediaPicker } from '../components/mediaPickerRender.js';
import { BlockList } from '../components/blockListRender.js';
import { TextArea } from '../components/textAreaRender.js';
import { TextBox } from '../components/textBoxRender.js';

export async function Home() {
    const container = document.getElementById('content');
    container.innerHTML = ''; // Only clear once here!

    await MediaPicker("4c7bc8fc-5aa0-4cfa-a3d4-8cf77dc08d26");
    await BlockList("26cd548c-8118-4386-ae06-21ad5cc99a82");
    await TextArea("dc17bdaf-af10-49ad-968b-766e34791f6e");
    await TextBox("013a704d-d2fb-4798-bea1-bc4f4833bc60");
}
