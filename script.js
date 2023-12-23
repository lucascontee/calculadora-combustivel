document.addEventListener('DOMContentLoaded', function () {
    const chk = document.getElementById('checkbox');

    chk.addEventListener('change', function () {
        document.body.classList.toggle('dark');
        document.querySelector('main').classList.toggle('dark');
        document.getElementById('title').classList.toggle('dark');
    });
});
function calcular(){
    let media = document.getElementById('media')
    let distancia = document.getElementById('distancia')
    let preco = document.getElementById('preco')
    let resfinal = document.getElementById('resfinal')

    let med = Number(media.value)
    let dist = Number(distancia.value)
    let prec = Number(preco.value)
    let res1 = dist / med * prec
    
    res1 = res1.toFixed(2).replace('.', ',')
    resfinal.innerHTML = `R$ ${res1}`

    if(media.value == 0 && distancia.value == 0 && preco.value == 0){
        media.style.border = '2px solid red'
        distancia.style.border = '2px solid red'
        preco.style.border = '2px solid red'
    } else if(media.value == 0 && distancia.value == 0){
        media.style.border = '2px solid red'
        distancia.style.border = '2px solid red'
    } else if(distancia.value == 0 && preco.value == 0){
        distancia.style.border = '2px solid red'
        preco.style.border = '2px solid red'
    } else if(media.value == 0 && preco.value == 0){
        media.style.border = '2px solid red'
        preco.style.border = '2px solid red'
    } else if (media.value == 0){
        media.style.border = '2px solid red'
    } else if (distancia.value == 0){
        distancia.style.border = '2px solid red'
    } else if(preco.value == 0){
        preco.style.border = '2px solid red'
    }
    
}
