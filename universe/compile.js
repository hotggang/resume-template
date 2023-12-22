import { initData } from '../dist/src/data.js';

const compile = (data) => {
    const source = document.querySelector(".universe__main");
    console.log(source);
    const template = Handlebars.compile(source.innerHTML);
    source.innerHTML = template(data);
}

(() => {
    console.log('hi');
    console.log(JSON.stringify(initData))
    compile(initData);    
})();