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



export {
  getRegion,
  getFilteredUsers,
  getLanguages,
  optionsDisponiblities,
  optionsRoles
}