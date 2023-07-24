import { useState } from 'react'
import './App.css'

function App() {
  const [original, setOriginal] = useState(10)
  const [nueva, setNueva] = useState(2)
  const [numero, setNumero] = useState(8)
  const [resultado, setResultado] = useState(0)

  onsubmit = (e) => {
    e.preventDefault()
    convertidor(original, nueva, numero)
  }
  const updateOriginal = (e) => {
    setOriginal(e.target.value)
  }

  const updateNueva = (e) => {
    setNueva(e.target.value)
  }

  const updateNumero = (e) => {
    console.log(e.target.value)
    setNumero(e.target.value)
  }

  const convertidor = (baseOriginal, baseNueva, numero) => {

    let porCalcular = numero
    let resultadoArray = []
    let residuo = 0

    //Convierte de cualquier base a Decimal:
    porCalcular = parseInt(numero, baseOriginal)
    console.log(`Conversion a Decimal: ${porCalcular}`)

    if (isNaN(porCalcular)) {
      console.log('Estamos dentro del error'
      )
      setResultado('Error: El valor ingresado no coincide con la base seleccionada')
      return
    }
    //Cuando las bases son iguales retorna el valor original
    if (baseOriginal === baseNueva) {
      setResultado(numero)
      return
    }

    //Algoritmo para convertir a otra base
    while (porCalcular >= baseNueva) {
      residuo = porCalcular % baseNueva
      porCalcular = Math.floor(porCalcular / baseNueva)
      resultadoArray.push(residuo)
    }
    resultadoArray.push(porCalcular)


    let resultado = resultadoArray.reverse()

    //Convierte hexadecimal a Letras
    if (baseNueva == 16) {
      resultado = resultado.map((digit) => {
        if (digit > 9) {
          switch (digit) {
            case 10:
              return 'A'
            case 11:
              return 'B'
            case 12:
              return 'C'
            case 13:
              return 'D'
            case 14:
              return 'E'
            case 15:
              return 'F'
          }
        }
      }
      )
    }
    setResultado(resultado.join(''))
  }


  return (
    <>
      <h1> Convertidor de Base </h1>
      <form action="" className='border-2 p-4 rounded-2xl my-4'>
        <div className='flex flex-col space-y-3 mb-8'>
          <h3 className=''>Base Original</h3>
          <div className='flex justify-between' onChange={updateOriginal}>
            <input type="radio" id="binario" name="original" value="2" checked={original == 2} />
            <label htmlFor="binario">2 (Binario)</label>
            <input type="radio" id="octal" name="original" value="8" checked={original == 8} />
            <label htmlFor="octal">8 (Octal)</label>
            <input type="radio" id="decimal" name="original" value="10" checked={original == 10} />
            <label htmlFor="decimal">10 (Decimal)</label>
            <input type="radio" id="hexadecimal" name="original" value="16" checked={original == 16} />
            <label htmlFor="hexadecimal">16 (Hexadecimal)</label>
          </div>
          <input className='text-center rounded-xl py-1 max-w-xl text-2xl' onChange={updateNumero} type="text" placeholder={`${numero}`} />
        </div>
        <div className='flex flex-col space-y-3 mb-6'>
          <h3>Base Nueva</h3>
          <div className='flex justify-between' onChange={updateNueva}>
            <input type="radio" id="binario" name="nueva" value="2" checked={nueva == 2} />
            <label htmlFor="binario">2 (Binario)</label>
            <input type="radio" id="octal" name="nueva" value="8" checked={nueva == 8} />
            <label htmlFor="octal">8 (Octal)</label>
            <input type="radio" id="decimal" name="nueva" value="10" checked={nueva == 10} />
            <label htmlFor="decimal">10 (Decimal)</label>
            <input type="radio" id="hexadecimal" name="nueva" value="16" checked={nueva == 16} />
            <label htmlFor="hexadecimal">16 (Hexadecimal)</label>
          </div>
          <div className='flex space-x-6'>
            <button type='submit' className='bg-white grow text-black font-bold rounded-xl max-w-fit self-center'>Convertir </button>
            <p className='bg-white grow px-4 self-center rounded-2xl py-1 text-black text-2xl'>{resultado}</p>
          </div>
        </div>
      </form>
    </>
  )
}
export default App
