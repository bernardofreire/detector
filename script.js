
let btn = document.querySelector('#btn')
btn.addEventListener('click', verificar)


function verificar() {
    let txtano = document.getElementById('txtano').value
    let data = new Date()
    let year = data.getFullYear()
    // Resultado
    let res = document.getElementById('res')
    if (txtano.length == 0 || Number(txtano) > year) {
        alert('[ERRO] Verifique os valores e tente novamente')
    } else {
        // idade 
        let idade = year - Number(txtano)
        // check box
        let fsex = document.getElementsByName('radsex')
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './imagens/foto-bebe-m.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', './imagens/foto-jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './imagens/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', './imagens/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './imagens/foto-bebe-f.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', './imagens/foto-jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './imagens/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', './imagens/foto-idoso-f.png')
            }
        }
        img.style.marginTop = '2rem'
        res.style.display = 'flex'
        res.style.flexDirection = 'column'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}


