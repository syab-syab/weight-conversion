import React, { useState } from 'react'
import milligram from '../functions/milligram'
import gram from '../functions/gram'
import kilogram from '../functions/kilogram'
import pound from '../functions/pound'
import styled from 'styled-components'



const Wrapper = styled.main`
  background: #FF4191;
  padding: 4rem 0;
  height: 100vh;
  @media (max-width: 400px) {
    padding-top: 5rem;
  }
`

// Selectは流用
const Select = styled.select`
  background: #fff078;
  font-size: 3rem;
  height: 4rem;
  border: 0.3rem solid black;
  border-radius: 0;
  &:disabled {
    color: black;
    background: #fff078;
  }
`

// Inputは流用
const Input = styled.input`
  font-size: 3rem;
  height: 4rem;
  width: 20rem;
  border: 0.3rem solid black;
  border-radius: 0;
  border-right: none;
`

// Buttonは流用
const Button = styled.button`
  font-size: 3rem;
  background: #e293b4;
  color: white;
  cursor: pointer;
`


const Arrow = styled.div`
  font-size: 3rem;
  font-weight: bold;
`

const Main = () => {
  const [unitVal, setUnitVal] = useState<string>("")

  const toggleUnitVal = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const val = Number(e.target.value)
    const result = !!(val)
    if (result == true) {
      setUnitVal(e.target.value)
    }
  }

  // 長さの単位はハッシュにした方が良いかも
  const lengthUnit: Array<string> = ["mg", "g", "kg", "ポンド"]

  // 変換後の値の単位
  const [lenUnit, setLenUnit] = useState<number>(1)

  // 変換したい値の単位
  const [originUnit, setOriginUnit] = useState<number>(1)

  const calc = [milligram, gram, kilogram, pound]

  const copyConversionValue = (val: string): void => {
    navigator.clipboard.writeText(val)
  }
  return (
    <Wrapper>
      <div>
        <Select defaultValue={lenUnit} onChange={(e) => setLenUnit(Number(e.target.value))}>
          {
            lengthUnit.map((u, index) => {
              return (
                <option key={index} value={index}>{u}</option>
              )
            })
          }
        </Select>
      </div>
      <div>
      <p>
          <Input type="text" onChange={(e) => toggleUnitVal(e)} value={unitVal} />
          <Select defaultValue={lenUnit} onChange={(e) => setOriginUnit(Number(e.target.value))}>
            {
              lengthUnit.map((u, index) => {
                return (
                  <option key={index} value={index}>{u}</option>
                )
              })
            }
          </Select> 
        </p>

        <Button onClick={() => setUnitVal("")}>クリア</Button>
      </div>
      <Arrow>
        <p>↓↓↓</p>
      </Arrow>
      <div>
        <p>
          <Input
            type="text"
            readOnly={true}
            value={String(calc[lenUnit](originUnit, unitVal))}
          />
          <Select disabled={true}>
            <option>{lengthUnit[lenUnit]}</option>
            <option>ポンド</option>
          </Select>
        </p>
        <Button onClick={() => copyConversionValue(String(calc[lenUnit](originUnit, unitVal)))}>コピー</Button>
      </div>
    </Wrapper>
  )
}

export default Main