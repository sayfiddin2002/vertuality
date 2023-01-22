let textElement = document.querySelector('.text')
let loader = document.querySelector('.loder')

function countUp(count = 0) {
    textElement.textContent = `${count}%`

    if (count < 100) {
        setTimeout(() => countUp(count + 1), 9_500 / 100)
    } else {
        setTimeout(() => {
            // textElement.textContent = 'Reset'
            textElement.style.margin = 0
            // loder.style.display = 'none'
            loader.style.display = 'none'
            loader.addEventListener('click', () => {
                // codepen do not remove my function call
                location['reload']()
            })
        }, 1_000)
    }
}

countUp()