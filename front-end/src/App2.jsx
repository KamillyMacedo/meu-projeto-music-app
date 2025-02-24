import React from 'react'

const App2 = () => {
  return (
    <div>
      
    </div>
  )
}

export default App2


// Anotacoes

// rafce - atalho para função

// arrow Function => const App2 = () => <h1> Ola mundo!</h1>

// O header é um componente pois ele é usado em todas as telas

// Nomeação de componentes => ex: PascalCase
// Nomeaçao de Variavel, Função... -> ex: camelCase

// Export default: posso impottar com qualquer nome e sem chaves 
// Export "sem default": só posso impottar com nome exportado e chaves 

// Self closing tag -> <Header></Header> ou (=) <Header/>

// nao é uma boa pratica usar id para identificar css

// noameação de classes em CSS
// metodologia
// blocks
// elements
// modifiers
// resumindo: bloco__elemento--modificador ex-> herader - header__link - header__link--small


//  teg vazia em React se chama fragment 

// {Array(items)
//     .fill()
//     .map(( currentValue, index) => 
//     (<SingleItem key={`${title}-${index}`} /> 
//     ))}

// No reack o Link funciona para redenrizar apenas a parte solicitada, a ancora nao funciona

// quando componentes se re-renderizam?
// uma das ocasioes é quando uma variavel de estado usada por esse componente é atualizada, ex: ver mais 

// hook - useStade