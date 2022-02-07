import React, { useState, useEffect, useContext } from 'react'
import { MultiSelect } from "react-multi-select-component"
import Modal from 'react-bootstrap/Modal'
import Select from 'react-select'

import { UserContext } from '../contexts/UserContext'
import { ProfileContext } from '../contexts/ProfileContent'

import { 
  getRegion, 
  getLanguages, 
  getSelectedInfos, 
  getValues, 
  optionsRegions, 
  optionsRoles, 
  optionsDisponiblities 
} from '../api/filter'


import styled from 'styled-components'

const SelectStyled = styled.div`
  color: black;
`

const EditUserInfos = ({ onHide }) => {
  const { user, setUser } = useContext(UserContext)
  const { profile, setProfile } = useContext(ProfileContext)
  const [optionsRegion, setOptionsRegion] = useState([])
  const [selectedRegion, setSelectedRegion] = useState([])
  const [optionsLanguages, setOptionsLanguages] = useState([])
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [selectedDisponiblities, setSelectedDisponiblities] = useState([])
  const [selectedRoles, setSelectedRoles] = useState([])



  useEffect( async () => {
    setSelectedRegion([{ label: profile.region, value: profile.region }])
    const dataRegion = await getRegion()
    setOptionsRegion(dataRegion)
    const dataLanguages = await getLanguages()
    setOptionsLanguages(dataLanguages)
    const userLanguages = getSelectedInfos(profile.languages)
    setSelectedLanguages(userLanguages)
    const userDisponibilities = getSelectedInfos(profile.disponibilities)
    setSelectedDisponiblities(userDisponibilities)
    const userRoles = getSelectedInfos(profile.roles)
    setSelectedRoles(userRoles)
  },[])
  
  const handleModifyInfos = () => {
    const newSelectedLanguages = getValues(selectedLanguages)
    const newSelectedDisponiblities = getValues(selectedDisponiblities)
    const newSelectedRoles = getValues(selectedRoles)
    const values = {
      region : selectedRegion.value,
      languages : newSelectedLanguages,
      disponibilities : newSelectedDisponiblities,
      roles : newSelectedRoles
    }
    // console.log(newSelectedLanguages)
    editInfos(values)
    onHide()
  }

  const editInfos = async values => {
    const editInfos = await fetch(`http://localhost:5000/users/${profile._id}`, {
      method: 'put',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        ...values 
      })
    })
    const profileEdited = await editInfos.json()
    setProfile(profileEdited); // mise à jour des valeurs de l'user
  }

  // console.log(selectedLanguages)
  return (
    <div>
      <div className='row'>
        <div className='col-3 my-2'>
          <p>Modifier votre region :</p>
          <SelectStyled>
            <Select 
              value={selectedRegion}
              options={optionsRegions} 
              onChange={setSelectedRegion}
            />
            {/* <MultiSelect
              options={optionsRegion}
              value={selectedRegion}
              onChange={setSelectedRegion}
              labelledBy="Select"
              hasSelectAll={false}
            /> */}
          </SelectStyled>
        </div>
        <div className='col-3 my-2'>
          <p>Modifier langue(s) parlée(s) :</p>
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
        <div className='col-3 my-2'>
          <p>Modifier vos disponiblitiés :</p>
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
        <div className='col-3 my-2'>
          <p>Modifier vos rôles :</p>
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
      <Modal.Footer>
        <button className="btn draw-border" onClick={() => handleModifyInfos()}>Valider</button>
      </Modal.Footer>
    </div>
  )
}

export default EditUserInfos