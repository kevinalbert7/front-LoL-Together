import React, { useContext, useEffect, useState } from 'react'
import { MultiSelect } from "react-multi-select-component"

import styled from 'styled-components'

import { UsersContext } from '../contexts/UsersContext'

import { getRegion, getFilteredUsers, getLanguages } from '../api/filter'
import { optionsDisponiblities } from '../api/filter'
import { optionsRoles } from '../api/filter'

const SelectStyled = styled.div`
  color: black;
`
const FilterContainer = styled.div`
  .filter {
      text-align: center;
  }
`

const UsersFilter = () => {
  const { setUsers } = useContext(UsersContext)
  const [optionsRegion, setOptionsRegion] = useState([])
  const [selectedRegion, setSelectedRegion] = useState([])
  const [optionsLanguages, setOptionsLanguages] = useState([])
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [selectedDisponiblities, setSelectedDisponiblities] = useState([])
  const [selectedRoles, setSelectedRoles] = useState([])
  
  useEffect( async () => {
    const dataRegion = await getRegion()
    setOptionsRegion(dataRegion)
    const dataLanguages = await getLanguages()
    setOptionsLanguages(dataLanguages)
  },[])
  
  useEffect( async () => {
    const data = await getFilteredUsers(selectedRegion, selectedLanguages, selectedDisponiblities, selectedRoles)
    setUsers(data)
  },[selectedRegion, selectedLanguages, selectedDisponiblities, selectedRoles])

  // console.log(selectedDisponiblities)
  return (
    <FilterContainer className='container'>
      <div className='row'>
        <div className='col-3 my-2 filter'>
          <p>région</p>
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
        <div className='col-3 my-2 filter'>
          <p>langue(s)</p>
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
        <div className='col-3 my-2 filter'>
          <p>disponibilités</p>
          <SelectStyled>
            <MultiSelect
              options={optionsDisponiblities}
              value={selectedDisponiblities}
              onChange={setSelectedDisponiblities}
              labelledBy="Select"
              hasSelectAll={false}
            />
          </SelectStyled>
        </div>
        <div className='col-3 my-2 filter'>
          <p>rôles</p>
          <SelectStyled>
            <MultiSelect
              options={optionsRoles}
              value={selectedRoles}
              onChange={setSelectedRoles}
              labelledBy="Select"
              hasSelectAll={false}
            />
          </SelectStyled>
        </div>
      </div>
    </FilterContainer>
  )
}

export default UsersFilter