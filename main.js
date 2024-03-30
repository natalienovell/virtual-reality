class Parallax {
    constructor(obj) {
        this.bigImg = document.querySelectorAll(obj.bigImg);
        this.text = document.querySelectorAll(obj.text);
        window.addEventListener('scroll', () => { this.moveElements() })
    }
    moveElements(){
        this.bigImg.forEach(bigImgs => {
            let speed = bigImgs.getAttribute('data-speed')
            bigImgs.style.transform = `translateY(${window.scrollY * speed}px)`
        });
    }
}
console.log(moveElements);
const parallax = new Parallax({
    bigImg: '.big-img',
    text: 'text-content'
})