import React, { useContext, useEffect, useState } from 'react'
import { MultiSelect } from "react-multi-select-component"

import styled from 'styled-components'

import { UsersContext } from '../contexts/UsersContext'

import { getRegion, getFilteredRegion } from '../api/filter'

const Region = styled.div`
  color: black;
`

const UsersFilter = () => {
  const [options, setOptions] = useState([])
  const { setUsers } = useContext(UsersContext)
  const [selected, setSelected] = useState([])
  
  useEffect( async () => {
    const data = await getRegion()
    setOptions(data)
  },[])
  
  useEffect( async () => {
    const data = await getFilteredRegion(selected)
    setUsers(data)
  },[selected])

  console.log(options)
  return (
    <div className='col-4'>
      <p>Trier par region :</p>
      <Region>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
          hasSelectAll={false}
        />
      </Region>
    </div>
  )
}

export default UsersFilter