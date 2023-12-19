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

    if(media.value == 0){
        window.alert("Insira a média")
    } else if(distancia.value == 0){
        window.alert("Insira a distância")
    }else if(preco.value == 0){
        window.alert("Insira o preço")
    }
    
    res1 = res1.toFixed(2).replace('.', ',')
    resfinal.innerHTML = `R$ ${res1}`
    
}
