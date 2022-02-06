import { getUsers } from "./user"

const getRegion = async () => {
  let options = []

  const users = await getUsers()
  users.map(element => {
    if (!options.find(element => element.value === element.region)) {
      options = [ ...options, { label: element.region, value: element.region } ]
    }
  })
  return options
}

const getLanguages = async () => {
  let options = []

  const users = await getUsers()
  users.map(element => {
    element.languages.map(languages => {
      if (!options.find(element => element.value === languages)) {
        options = [ ...options, { label: languages, value: languages } ]
      }
    })
  })
  return options
}

const optionsDisponiblities = [
  {
    label : "Lundi",
    value : "Lundi"
  },
  {
    label : "Mardi",
    value : "Mardi"
  },
  {
    label : "Mercredi",
    value : "Mercredi"
  },
  {
    label : "Jeudi",
    value : "Jeudi"
  },
  {
    label : "Vendredi",
    value : "Vendredi"
  },
  {
    label : "Samedi",
    value : "Samedi"
  },
  {
    label : "Dimanche",
    value : "Dimanche"
  }
]

const optionsRoles = [
  {
    label : "TOP",
    value : "TOP"
  },
  {
    label : "JUNGLE",
    value : "JUNGLE"
  },
  {
    label : "MID",
    value : "MID"
  },
  {
    label : "ADC",
    value : "ADC"
  },
  {
    label : "BOT",
    value : "BOT"
  }
]

const getFilteredUsers = async (selectedRegion, selectedLanguages, selectedDisponibilities, selectedRoles) => {
  let paramsRegion = ""
  paramsRegion = selectedRegion.map(element => paramsRegion + element.value).join()
  paramsRegion = "region=" + paramsRegion
  
  let paramsLanguages = ""
  paramsLanguages = selectedLanguages.map(element => paramsLanguages + element.value).join()
  paramsLanguages = "languages=" + paramsLanguages

  let paramsDisponibilites = ""
  paramsDisponibilites = selectedDisponibilities.map(element => paramsDisponibilites + element.value).join()
  paramsDisponibilites = "disponibilities=" + paramsDisponibilites

  let paramsRoles = ""
  paramsRoles = selectedRoles.map(element => paramsRoles + element.value).join()
  paramsRoles = "roles=" + paramsRoles
  
  const response = await fetch(`http://localhost:5000/users/filter?${paramsRegion}&${paramsLanguages}&${paramsDisponibilites}&${paramsRoles}`, {
    credentials: "include"
  })
  const data = await response.json()

  return(data)
}

const optionsRegions = [
  { label: 'Brésil - BR' , value: 'BR'  },
  { label: 'Europe nordique et orientale - EUNE', value: 'EUNE' },
  { label: 'Europe West - EUW', value: 'EUW' },
  { label: 'Amérique latine Nord - LAN', value: 'LAN' },
  { label: 'Amérique latine Sud - LAS', value: 'LAS' },
  { label: 'Amérique du Nord - LA', value: 'NA' },
  { label: 'Océanie - OCE', value: 'OCE' },
  { label: 'Russie - RU', value: 'RU' },
  { label: 'Turquie - TR', value: 'TR' },
  { label: 'Japon - JP', value: 'JP' },
  { label: 'République de Corée - KR', value: 'KR' },
  { label: 'Environnement bêta public - PBE', value: 'PBE' },
  { label: 'Réseau de serveurs en Chine', value: 'CN' }
]

const getSelectedInfos = (selectedInfos) => {
  let options = []

  selectedInfos.map(element => {
    if (!options.find(element => element.value === element)) {
      options = [ ...options, { label: element, value: element } ]
    }
  })
  return options
}

const getValues = (newSelectedInfos) => {
  let selectedInfosArray = []

  newSelectedInfos.map(element => {
    selectedInfosArray = [ ...selectedInfosArray, element.value ]
  })
  return selectedInfosArray
}

export {
  getRegion,
  getFilteredUsers,
  getLanguages,
  getSelectedInfos,
  getValues,
  optionsDisponiblities,
  optionsRoles,
  optionsRegions
}