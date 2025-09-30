const figuras = ["quadrado", "triangulo", "retangulo"];

function area (figura , base, altura){
    let area
    switch (figura){
        case "quadrado":
        case "retangulo":
            area = base * altura
             break
        case "triangulo":
             area = (base * altura)/2
    }
    console.log(`area do ${figura} é ${area}`)
}
area("quadrado", 20, 30)