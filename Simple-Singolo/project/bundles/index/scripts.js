const pathToBlocks = "../../blocks/common/";

let start = async _ => {
    await import(`${pathToBlocks}header/header.js`).then(obj => new obj.Header);
}
start();