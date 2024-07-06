//To add a backend functionality to story the desired password in the DB backend 


import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(false);
  const [password, setPassword] = useState("")
  const [copy, setCopy] = useState("Copy")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) {
      str += "0123456789"
    }
    if (isSpecialCharacter) {
      str += "!@#$&*~`{}[]()-_&^+="
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, isNumber, isSpecialCharacter, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    console.log(passwordRef.current)
    window.navigator.clipboard.writeText(password)
    // changeCopyBtn()
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, isNumber, isSpecialCharacter, passwordGenerator])





  //make the copy button text change to copied! text after button is clicked and text is copied 

  const changeCopyBtn = () => {
    setCopy("Copied")
    setTimeout(() => {
      setCopy("Copy")
    }, 3000)
  }


  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-7 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-3xl text-white text-center py-2'> Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}

          />
          <button className='bg-purple-600 text-black px-3 '
            onClick={() => {
              copyPassword()
              changeCopyBtn()
            }}
          >{copy}</button>


        </div >
        <div className='flex text-sm gap-x-3'>
          <div className='flex item-center gap-x-1'>
            <input
              type='range'
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length : {length}</label>
            <div className='flex gap-x-2 item-center'>
              <input
                type='checkbox'
                defaultChecked={isNumber}
                id='numberInput'
                onChange={() => {
                  setIsNumber(val => !val)
                }}
              />
              Number
            </div>
            <div className='flex text-center gap-x-2'>
              <input
                type='checkbox'
                defaultChecked={isSpecialCharacter}
                id='specialCharInput'
                onChange={() => {
                  setIsSpecialCharacter(val => !val)
                }}
              />Special Characters
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
