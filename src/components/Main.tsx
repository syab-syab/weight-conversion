import React, { useState } from 'react'
import milligram from '../functions/milligram'
import gram from '../functions/gram'
import kilogram from '../functions/kilogram'
import pound from '../functions/pound'
import styled from 'styled-components'


const Wrapper = styled.main`
  background: #FF4191;
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
  return (
    <Wrapper>
      <h1>重さの単位変換</h1>
      <div>
        <select defaultValue={lenUnit} onChange={(e) => setLenUnit(Number(e.target.value))}>
          {
            lengthUnit.map((u, index) => {
              return (
                <option key={index} value={index}>{u}</option>
              )
            })
          }
        </select>
        <p>
          <input type="text" onChange={(e) => toggleUnitVal(e)} value={unitVal} />
          <select defaultValue={lenUnit} onChange={(e) => setOriginUnit(Number(e.target.value))}>
            {
              lengthUnit.map((u, index) => {
                return (
                  <option key={index} value={index}>{u}</option>
                )
              })
            }
          </select> 
        </p>

        <br />
        <button onClick={() => setUnitVal("")}>クリア</button>
      </div>
      <div>
        <p>↓↓↓</p>
        <p>
          <input type="text"
            value={String(calc[lenUnit](originUnit, unitVal))}
          />{lengthUnit[lenUnit]}
        </p>
      </div>
    </Wrapper>
  )
}

export default Main