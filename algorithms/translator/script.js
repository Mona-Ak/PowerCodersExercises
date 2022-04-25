
let helloWorld = (lang) =>{
    // console.log(lang);
    // if(lang === 'en'){
    //     console.log('Hello World');
    // }else if(lang === 'es'){
    //     console.log('Hola Mundo');
    // }else if( lang === 'de'){
    //     console.log('Hallo Welt');
    // }

    switch(lang){
        case 'es':
            console.log('Holla Mundo');
        break
        case 'de':
            console.log('Hallo Welt');
        break
        default:
            console.log('Hello World');
        break;

    }

}

helloWorld();


