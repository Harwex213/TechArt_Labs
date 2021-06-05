const pathToBlocks = "../../blocks/common/";


let start = async _ => {
    await import(`${pathToBlocks}header/header.js`).then(obj => new obj.Header);
    await import(`${pathToBlocks}slider/slider.js`).then(obj => new obj.Slider);
}
start();