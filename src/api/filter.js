import { getUsers } from "./user"

const getRegion = async () => {
  let options = []

  const users = await getUsers()
  users.map(element => {
    if (!options.find(option => option.value === element.region)) {
      options = [ ...options, { label: element.region, value: element.region } ]
    }
  })
  return options
}

const getFilteredRegion = async (selected) => {
  let params = ""
  params = selected.map(element => params + element.value).join()
  const response = await fetch(`http://localhost:5000/users/filter?region=${params}`, {
      credentials: "include"
  })
  const data = await response.json()

  return(data)
}

export {
  getRegion,
  getFilteredRegion
}