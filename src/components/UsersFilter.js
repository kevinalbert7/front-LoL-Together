import React, { useContext, useEffect, useState } from 'react'
import { MultiSelect } from "react-multi-select-component"

import styled from 'styled-components'

import { UsersContext } from '../contexts/UsersContext'

import { getRegion, getFilteredUsers, getLanguages } from '../api/filter'

const SelectStyled = styled.div`
  color: black;
`

const UsersFilter = () => {
  const { setUsers } = useContext(UsersContext)
  const [optionsRegion, setOptionsRegion] = useState([])
  const [selectedRegion, setSelectedRegion] = useState([])
  const [optionsLanguages, setOptionsLanguages] = useState([])
  const [selectedLanguages, setSelectedLanguages] = useState([])
  
  useEffect( async () => {
    const dataRegion = await getRegion()
    setOptionsRegion(dataRegion)
    const dataLanguages = await getLanguages()
    setOptionsLanguages(dataLanguages)
  },[])
  
  useEffect( async () => {
    const data = await getFilteredUsers(selectedRegion, selectedLanguages)
    setUsers(data)
  },[selectedRegion, selectedLanguages])

  console.log(selectedLanguages)
  return (
    <>
      <div className='col-4'>
        <p>Trier par region :</p>
        <SelectStyled>
          <MultiSelect
            options={optionsRegion}
            value={selectedRegion}
            onChange={setSelectedRegion}
            labelledBy="Select"
            hasSelectAll={false}
          />
        </SelectStyled>
      </div>
      <div className='col-4'>
        <p>Trier par langue(s) parle(s) :</p>
        <SelectStyled>
          <MultiSelect
            options={optionsLanguages}
            value={selectedLanguages}
            onChange={setSelectedLanguages}
            labelledBy="Select"
            hasSelectAll={false}
          />
        </SelectStyled>
      </div>
    </>
  )
}

export default UsersFilter