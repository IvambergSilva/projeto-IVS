let bancoDeDados = [0]
let dadosParaSomatorio = [0]

bancoDeDados[0] = Number(document.querySelector('#qtdePessoas').value)
// Alteração de valores nas variáveis

// Renda bruta familiar per capita - RF
let maxPontRF = 10

// Cadastro de CadÚnico CC
let simCadúnico = 10

// Composição familiar (por pessoa do grupo familiar) - CF
let minPontCF = 4

// Regime de ocupação do domicílio familiar - DF
let casaPropria = 0
let casaFinanciada = 5
let casaAlu_Ass_Rua = 10

// Situação territorial do domicílio familiar - ST
let zonaUrbana = 0
let zonaRural = 10

// Localização do domicílio familiar - LD
let jpLD = 2
let regiaoMetroLD = 6
let outraCidadeLD = 10

// Situação de mobilidade estudantil
let simMobEstudantil = 10

// Egresso de ensino fundamental ou médio (estudante) - ano anterior ao ingresso no IF - EP

let escolaPublica = 10
let escolaParticular = 0

//===================
// EXECUÇÃO:

// Quantidade de pessoas na casa
let btnQtdePessoas = document.querySelector('.btn')
btnQtdePessoas.addEventListener('click', () => {
    mudanca = 0
    
    bancoDeDados[0] = Number(document.querySelector('#qtdePessoas').value)

    btnQtdePessoas.style.backgroundColor = '#3FA14C'
})


// Renda bruta familiar per capita - RF
let btnValidarRF = document.querySelector('.btnValidarRF')
btnValidarRF.addEventListener('click', () => {
    let listasRF = document.forms[0]
    let condicao = 0
    for (let i = 0; i <= listasRF.length-1; i++) { 
        if (listasRF[i].checked){
            condicao = maxPontRF-i*2
        }
    }
    bancoDeDados[1] = condicao
    console.log(bancoDeDados)
    dadosParaSomatorio[1] = bancoDeDados[1]*0.4
    console.log(dadosParaSomatorio)
    btnValidarRF.style.backgroundColor = '#3FA14C'
})

// Situação de Emprego

let btnValidarSE = document.querySelector('.btnValidarSE')
btnValidarSE.addEventListener('click', () => {

    let listaSEInterna = []
    let variavelSE = 2

    btnValidarSE.classList.add('teste')
    
    for (let i = 0; i < 6; i++) { 
        listaSEInterna[i] = Number(document.querySelector(`#se${i+1}`).value)
    }

    for (let i = 0; i < 6; i++) { 
        switch (i){
            case 0:
                variavelSE = 2
                break
            case 1:
                variavelSE = 5
                break
            case 2:
                variavelSE = 6
                break
            case 3:
                variavelSE = 7
                break
            case 4:
                variavelSE = 8
                break
            case 5:
                variavelSE = 10
                break
        }
        listaSEInterna[i] = listaSEInterna[i]*variavelSE    
    }

    console.log(listaSEInterna)

    bancoDeDados[2] = somatorioDasListas(listaSEInterna)

    console.log(bancoDeDados)
    dadosParaSomatorio[2] = bancoDeDados[2]/bancoDeDados[0]*0.05
    console.log(dadosParaSomatorio)

    btnValidarSE.style.backgroundColor = '#3FA14C'
})


// Cadastro de CadÚnico CC
let btnValidarCC = document.querySelector('.btnValidarCC')
btnValidarCC.addEventListener('click', () => {
    if (document.querySelector('#simCC').checked){
        bancoDeDados[3] = simCadúnico
    } else {
        bancoDeDados[3] = 0
    }
    console.log(bancoDeDados)
    dadosParaSomatorio[3] = bancoDeDados[3]*0.05
    console.log(dadosParaSomatorio)

    btnValidarCC.style.backgroundColor = '#3FA14C'
})

// Composição familiar (por pessoa do grupo familiar) - CF
let btnValidarCF = document.querySelector('.btnValidarCF')
btnValidarCF.addEventListener('click', () => {
    let listasCF = document.forms[3]
    let listaCFInterna = []
    for (let i = 0; i <= listasCF.length-1; i++) { 
        listaCFInterna[i] = Number(document.querySelector(`.CF${i+1}`).value)
        listaCFInterna[i] = listaCFInterna[i]*minPontCF
        minPontCF+=2
    }
    
    console.log(dadosParaSomatorio[4])

    bancoDeDados[4] = somatorioDasListas(listaCFInterna)
    
    
    dadosParaSomatorio[4] = bancoDeDados[4]/bancoDeDados[0]*0.05
    
    console.log(dadosParaSomatorio[4])
    
    btnValidarCF.style.backgroundColor = '#3FA14C'
})


// Regime de ocupação do domicílio familiar - DF
let btnValidarDF = document.querySelector('.btnValidarDF')
btnValidarDF.addEventListener('click', () => {
    let listasDF = document.forms[4]
    for (let i = 0; i < listasDF.length-1; i++) { 
        listasDF[i] = document.querySelector(`.DF${i+1}`)
    }
    if (listasDF[2].checked || listasDF[3].checked || listasDF[4].checked) {
        bancoDeDados[5] = casaAlu_Ass_Rua
    } else if (listasDF[1].checked) {
        bancoDeDados[5] = casaFinanciada
    } else {
        bancoDeDados[5] = casaPropria
    }
    console.log(bancoDeDados)
    dadosParaSomatorio[5] = bancoDeDados[5]*0.05
    console.log(dadosParaSomatorio)

    btnValidarDF.style.backgroundColor = '#3FA14C'
})


// Situação territorial do domicílio familiar - ST
let btnValidarST = document.querySelector('.btnValidarST')
btnValidarST.addEventListener('click', () => {
    if (document.querySelector('#zonaUrbana').checked){
        bancoDeDados[6] = zonaUrbana
    } else {
        bancoDeDados[6] = zonaRural
    }
    console.log(bancoDeDados)
    dadosParaSomatorio[6] = bancoDeDados[6]*0.05
    console.log(dadosParaSomatorio)
    
    btnValidarST.style.backgroundColor = '#3FA14C'

})


// Localização do domicílio familiar - LD
let btnValidarLD = document.querySelector('.btnValidarLD')
btnValidarLD.addEventListener('click', () => {
    if (document.querySelector('#jpLD').checked){
        bancoDeDados[7] = jpLD
    } else if (document.querySelector('#regiaoMetroLD').checked) {
        bancoDeDados[7] = regiaoMetroLD
    }
    else {
        bancoDeDados[7] = outraCidadeLD
    }
    console.log(bancoDeDados)
    dadosParaSomatorio[7] = bancoDeDados[7]*0.05
    console.log(dadosParaSomatorio)

    btnValidarLD.style.backgroundColor = '#3FA14C'
})


// Situação de mobilidade estudantil
let btnValidarME = document.querySelector('.btnValidarME')
btnValidarME.addEventListener('click', () => {
    if (document.querySelector('#simME').checked){
        bancoDeDados[8] = simMobEstudantil
    } else {
        bancoDeDados[8] = 0
    }
    console.log(bancoDeDados)
    dadosParaSomatorio[8] = bancoDeDados[8]*0.15
    console.log(dadosParaSomatorio)

    btnValidarME.style.backgroundColor = '#3FA14C'
})


// Egresso de ensino fundamental ou médio (estudante) - ano anterior ao ingresso no IF - EP
let btnValidarEP = document.querySelector('.btnValidarEP')
btnValidarEP.addEventListener('click', () => {
    if (document.querySelector('#escPublica').checked){
        bancoDeDados[9] = escolaPublica
    } else {
        bancoDeDados[9] = escolaParticular
    }
    console.log(bancoDeDados)
    dadosParaSomatorio[9] = bancoDeDados[9]*0.15
    console.log(dadosParaSomatorio)

    btnValidarEP.style.backgroundColor = '#3FA14C'
})

let btnCalcular = document.querySelector('.btnCalcular')
btnCalcular.addEventListener('click', () => {
    let IVS = somatorioDasListas(dadosParaSomatorio)
    console.log(IVS)
    let resultadoIVS = document.querySelector('#resultadoIVS')
    resultadoIVS.style.display = 'flex'
    resultadoIVS.innerHTML = `O seu IVS deu ${IVS}`
})

function somatorioDasListas(lista){
    let soma = 0
    for(let i = 0; i < lista.length; i++){
        if (isNaN(lista[i])){
            lista[i] = 0
        }
        soma = soma + lista[i]
    }
    return soma
}




// for (let i = 1; i <= 10; i++){
//     document.querySelector(`.dado${i}`).addEventListener('focus', () => {
//         document.querySelector(`.dado${i}`).style.backgroundColor = '#BB0B0D'
//     })
// }
