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

const getFilteredUsers = async (selectedRegion, selectedLanguages) => {
  let paramsRegion = ""
  paramsRegion = selectedRegion.map(element => paramsRegion + element.value).join()
  paramsRegion = "region=" + paramsRegion
  
  let paramsLanguages = ""
  paramsLanguages = selectedLanguages.map(element => paramsLanguages + element.value).join()
  paramsLanguages = "languages=" + paramsLanguages
  
  const response = await fetch(`http://localhost:5000/users/filter?${paramsRegion}&${paramsLanguages}`, {
      credentials: "include"
  })
  const data = await response.json()

  return(data)
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

export {
  getRegion,
  getFilteredUsers,
  getLanguages
}