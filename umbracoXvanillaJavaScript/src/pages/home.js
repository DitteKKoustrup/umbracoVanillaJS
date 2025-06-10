import { MediaPicker } from '../components/mediaPickerRender.js';
import { BlockList } from '../components/blockListRender.js';
import { TextArea } from '../components/textAreaRender.js';
import { TextBox } from '../components/textBoxRender.js';
import { DateTime } from '../components/dateTimeRender.js'
import { DropDown } from '../components/dropDownRender.js';

export async function Home() {
    const container = document.getElementById('content');
    container.innerHTML = ''; // Only clear once here!

    await MediaPicker("4c7bc8fc-5aa0-4cfa-a3d4-8cf77dc08d26");
    await BlockList("26cd548c-8118-4386-ae06-21ad5cc99a82");
    await TextArea("dc17bdaf-af10-49ad-968b-766e34791f6e");
    await TextBox("013a704d-d2fb-4798-bea1-bc4f4833bc60");
    await DateTime("b3d07a05-7b68-4bec-91aa-10455526b62c");
    await DropDown("dde9748e-83b9-4059-89ed-0a2798296cc6");

}
