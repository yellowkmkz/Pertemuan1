// DOM: Document Object Manipulation
let open = false
document
  .querySelector('.menu-trigger')
  .addEventListener('click', function () {

    if (!open) {

      document.querySelector('.menu')
        .setAttribute('style', 'transform: translateX(0)')
      // document.querySelector('.menu').setAttribute('style', 'display: block')

    } else {

      document.querySelector('.menu')
        .setAttribute('style', 'transform: translateX(-100%)')
      // document.querySelector('.menu').setAttribute('style', 'display: none')

    }

    open = !open

  })