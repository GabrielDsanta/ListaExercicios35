


//Exercicio 01//

// let Largura = Number(prompt("Digite a largura da barra"))
// let Altura = Number(prompt("Digite a altura da barra"))

// Calcular(Largura, Altura)


// function Calcular(largura: number, altura: number){
//     let ContadorQuebras = 0
//     const Total = largura * altura
//     for (let index = 1; Total > index; index++) {
//         Total / 2
//         ContadorQuebras++
//     }

//     return console.log(ContadorQuebras)
// }















//Exercicio 02//

// let Palavra = String(prompt("Digite uma palavra"))

// ContarLetras(Palavra)


// function ContarLetras(palavra: string){
//     let ContadorMinuscula = 0
//     let ContadorMaiuscula = 0
//     let Regex = /^([A-Z])$/
//     let ListaDeLetras = palavra.split("")

//     ListaDeLetras.forEach(VerificarLetras)

//     function VerificarLetras(item: string){
//         if(item.search(Regex)){
//             ContadorMinuscula++
//         }
//         else{
//             ContadorMaiuscula++
//         }
//     }

//     const Resultado = (ContadorMinuscula > ContadorMaiuscula) ? console.log(palavra.toLowerCase()) : palavra.toUpperCase()

//     console.log(Resultado)
// }





//Exercicio 03//

// let Lutadores: object[] = []
// let Continuar = true

// class Lutador{
//     #Nome: string
//     #Vida: number
//     #Ataque: number

//     constructor(nome: string, vida: number, ataque: number){
//         this.SetNome(nome)
//         this.SetVida(vida)
//         this.SetAtaque(ataque)
//     }

//     SetNome(nome: string): string{
//         return this.#Nome = nome
//     }

//     SetVida(vida: number): number{
//         return this.#Vida = vida
//     }

//     SetAtaque(ataque: number): number{
//         return this.#Ataque = ataque
//     }

//     GetNome(): string{
//         return this.#Nome
//     }
    
//     GetVida(): number{
//         return this.#Vida
//     }

//     GetAtaque(): number{
//         return this.#Ataque
//     }

//     Atacar(): number{
//         return this.#Ataque
//     }

// }




// while(Continuar){
//     let Menu = prompt("1 Criar Lutadores // 2 Começar a Batalha // 3 Finalizar")

//     switch(Menu){
//         case "1":
//         CriarLutador()
//         break;

//         case "2":
//         Batalha()
//         break;

//         case "3":
//         Continuar = false
//         break;

//         default:
//         alert("Opção inválida")
//         break;
//     }
// }



// function CriarLutador(){
//     if(Lutadores.length > 1){
//         return alert("Limite de Lutadores Atingido")
//     }

//     let Nome = String(prompt("Qual o Nome do Lutador ?"))
//     let Vida = Number(prompt("Qual a Vida do Lutador ?"))
//     let Ataque = Number(prompt("Qual o Ataque do Lutador ?"))

//     let NewLutador = new Lutador(Nome, Vida, Ataque)

//     Lutadores.push(NewLutador)
// }

// function Batalha(){
//     if(Lutadores.length == 1){
//         return alert("Cadastre 2 Lutadores antes de começar uma Batalha")
//     }


//     let PrimeiroLutador = true
//     let Vencedor = false
//     let VencedorSorteio: object = {}
//     let PerdedorSorteio: object = {}
//     let Sorteio = Math.floor(10* Math.random())

//     while(PrimeiroLutador){
//         let PalpiteLutador1 = Number(prompt("Qual o PalpiteLutador1 do Lutador ?"))
//         let PalpiteLutador2 = Number(prompt("Qual o PalpiteLutador2 do Lutador ?"))

//         if(PalpiteLutador1 == Sorteio){
//             VencedorSorteio = Lutadores[0]
//             PerdedorSorteio = Lutadores[1]
//             alert(`${Lutadores[0].GetNome()} Começa primeiro`)
//             PrimeiroLutador = false
//         }

//         if(PalpiteLutador2 == Sorteio){
//             VencedorSorteio = Lutadores[1]
//             PerdedorSorteio = Lutadores[0]
//             alert(`${Lutadores[1].GetNome()} Começa primeiro`)
//             PrimeiroLutador = false
//         }
//     }

//     console.log(`${VencedorSorteio.GetNome()} Ataca primeiro !`)

//     while(Vencedor == false){
//         let AtaqueVencedor = VencedorSorteio.Atacar()
//         let AtaquePerdedor = PerdedorSorteio.Atacar()
        
//         console.log(`${VencedorSorteio.GetNome()} Atacou ${PerdedorSorteio.GetNome()} Ataque: ${VencedorSorteio.Atacar()} De Dano`)
//         PerdedorSorteio.SetVida(PerdedorSorteio.GetVida() - AtaqueVencedor)
//         if(VencedorSorteio.GetVida() <= 0){
//             alert(`Luta finalizada ${PerdedorSorteio.GetNome()} Venceu !`)
//             Vencedor = true
//         }

//         console.log(`${PerdedorSorteio.GetNome()} Atacou ${VencedorSorteio.GetNome()} Ataque: ${PerdedorSorteio.Atacar()} De Dano`)
//         VencedorSorteio.SetVida(VencedorSorteio.GetVida() - AtaquePerdedor)
//         if(PerdedorSorteio.GetVida() <= 0){
//             alert(`Luta finalizada ${VencedorSorteio.GetNome()} Venceu !`)
//             Vencedor = true
//         }
        
//     }
// }