function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        img.src = 'imagens/manha_peq.jpg'
        document.body.style.background = '#b4ff9d'
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde_peq.jpg'
        document.body.style.background = '#f23219'
    } else { img.src = 'imagens/noite_peq.jpg'
             document.body.style.background = 'rgb(60, 60, 161)'
}
}
