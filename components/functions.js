export function headerShadow(){
    const header = document.querySelector('.header')

    window.addEventListener('scroll', () => {
        if(window.scrollY > 2){
            header.classList.add('border-b', 'drop-shadow-sm')
        } else {
            header.classList.remove('border-b', 'drop-shadow-sm')
        }
    })
}

export function toggleButtons(){
    let hamMenu = document.getElementById('hammenu')
    let openButton = document.getElementById('openButton')
    let closeButton = document.getElementById('closeButton')

    hamMenu.classList.toggle('w-full')
    openButton.classList.toggle('opacity-0')
}