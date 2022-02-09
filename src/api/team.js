const getTeams = async () => {
  const response = await fetch(`http://localhost:5000/teams/`, {
    credentials: "include"
  })
  const data = await response.json()

  return data
}

export {
  getTeams
}