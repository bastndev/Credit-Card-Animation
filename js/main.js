document.addEventListener('mousemove', parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        var speed = layer.getAttribute('data-speed')

        var x =(window.innerWidth - e.pageX*speed)/250;
        var y =(window.innerWidth - e.pageX*speed)/250

        layer.style.transform = `translate(${-x}px) translateY(${y}px)`
    })
}