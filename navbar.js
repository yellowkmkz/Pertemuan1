let open = false

document.querySelector('.kategori-trigger').addEventListener('click', () => {
    
    if (!open){
        document.querySelector('.kategori')
        .setAttribute('style', 'transform: translateX(0)')
        //document.querySelector('.menu').setAttribute('style', 'display: block')
    } else {
        document.querySelector('.kategori')
        .setAttribute('style', 'transform: translateX(-100%)')
        //document.querySelector('.menu').setAttribute('style', 'display: none')
    }

open = !open

})