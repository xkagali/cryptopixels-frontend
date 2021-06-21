
export function convertPngToBtoa(itemName) {
    const images = [
        { itemName: 'Merlion', path: require( "../lib/img/test/a0a0b0501020603.png" ) },
        { itemName: 'Ah Meng', path: require( "../lib/img/test/a0a04030a050601.png" ) },
        { itemName: 'Dinosaur', path: require( "../lib/img/test/a0c1c0107000503.png" ) },
        { itemName: 'Potato', path: require( "../lib/img/test/a0d020208000203.png" ) },
        { itemName: 'Vanda', path: require( "../lib/img/test/a0d100203040304.png" ) },
        { itemName: 'Laksa Head', path: require( "../lib/img/test/a011b0600060004.png" ) },
        { itemName: 'The LHL', path: require( "../lib/img/test/a030f0002030002.png" ) },
        { itemName: 'KJU', path: require( "../lib/img/test/a081c050b020003.png" ) },
    ];
    return images.filter((el)=>el.itemName===itemName)[0].path.default

}
