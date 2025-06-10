import { MediaPicker } from '../components/mediaPickerRender.js';
import { BlockList } from '../components/blockListRender.js';
import { TextArea } from '../components/textAreaRender.js';
import { TextBox } from '../components/textBoxRender.js';
import { DateTime } from '../components/dateTimeRender.js'
import { DropDown } from '../components/dropDownRender.js';
import { ContentPicker } from '../components/contentPickerRender.js';
import { Numeric } from '../components/numericRender.js';
import { UrlPicker } from '../components/UrlPickerRender.js';
import { TinyMce } from '../components/tinyMceRender.js';
import { TureFalse } from '../components/trueFalseRender.js';

export async function Home() {
    const container = document.getElementById('content');
    container.innerHTML = ''; 

    await MediaPicker("4c7bc8fc-5aa0-4cfa-a3d4-8cf77dc08d26");
    await BlockList("26cd548c-8118-4386-ae06-21ad5cc99a82");
    await TextArea("dc17bdaf-af10-49ad-968b-766e34791f6e");
    await TextBox("013a704d-d2fb-4798-bea1-bc4f4833bc60");
    await DateTime("b3d07a05-7b68-4bec-91aa-10455526b62c");
    await DropDown("dde9748e-83b9-4059-89ed-0a2798296cc6");
    await ContentPicker("0e3be28c-c1c0-46c4-96a3-5e7f6ca814ee");
    await Numeric("40fd6e78-d542-4113-8344-05046df31690");
    await UrlPicker("6e2b7854-4ce6-4002-8f46-3435c27c2cc6");
    await TinyMce("3bd1ac80-f490-471f-acf5-535af9333906");
    await TureFalse("2eca1528-ec9b-4a81-85dd-0fa2518523c5");

}
