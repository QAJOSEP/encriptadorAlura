
let repeat = 0;


const insertHtml = (html, classs) => {
    document.querySelector(`.${classs}`).innerHTML = html;
}

const changeProcessedNoText = () => {
    const noHTMLGreat = `
    <section class="noContentGreat">
        <div class="noCntent-div-img">
            <img class="noCntent-img" width="100%" src="img/buscar.png" alt="search">
        </div>
        <div class="noContent-div-text">
            <h2 class="noContent-h2">No se a encontrado ningún mensaje</h2>
            <p class="noConten-p">Ingresa el texto que desees encriptar o decifrar.</p>
        </div>
    </section>
    `;
    const noHTMLShort = `
    <section class="noContentShort">
        <div class="noContent-div-text">
            <h2 class="noContent-h2">No se a encontrado ningún mensaje</h2>
            <p class="noConten-p">Ingresa el texto que desees encriptar o decifrar.</p>
        </div>
    </section>
    `;
    insertHtml("", "div-erase")

    repeat = 0;
    let width = screen.width;
    if (width >= 1000) insertHtml(noHTMLGreat, `processedText`);
    else insertHtml(noHTMLShort, `processedText`);

}

const processedTextOnChange = () => {
    const dataTextToProcessed = document.querySelector(`.textToProcessed`);
    const yesHTML = `
    <section class="yesContent">
        <textarea class="processedText-textarea" placeholder="Texto procesado" readonly></textarea>

        <input type="button" class="btn-copy btn btn2" value="copiar"/>
    </section>
    `;
    const noImgHTML = `
    <img src="img/erase.svg" alt="x" class="erase" title="Borrar">
    `
    ;

    if (dataTextToProcessed.value.trim()) {
        if(repeat === 0){
            repeat = 1
            console.log(repeat)
            insertHtml(yesHTML, `processedText`);
            insertHtml(noImgHTML, "div-erase");
            const copyText = document.querySelector(`.btn-copy`);
            copyText.addEventListener('click', copy);
            
            
            const erase = document.querySelector(`.erase`);
            erase.addEventListener('click', eraseClick);
        }
    } else changeProcessedNoText();


}

const copy = () =>{

    const content = document.querySelector('.processedText-textarea');
    content.select();
    document.execCommand('copy');

    const copyText = document.querySelector(`.btn-copy`);
    copyText.value = "Copiado";
    copyText.style.backgroundColor = "rgba(10, 56, 113, 1)";
    copyText.style.color = "rgb(222, 228, 250)";


}

const eraseClick = () => {
    const dataTextToProcessed = document.querySelector(`.textToProcessed`);
    const erase = document.querySelector(`.erase`);
    const copyText = document.querySelector(`.btn-copy`);

    dataTextToProcessed.value = "";
    copyText.removeEventListener('onclick', copy);
    erase.removeEventListener('onclick', eraseClick);
    changeProcessedNoText();
}


const main = () => {

    changeProcessedNoText();

    const dataTextToProcessed = document.querySelector(`.textToProcessed`);
    dataTextToProcessed.addEventListener('keyup', processedTextOnChange);

}

main();
