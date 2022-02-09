const getUsers = async () => {
    
  const response = await fetch(`http://localhost:5000/users/`, {
    credentials: "include"
  })
  const data = await response.json()

  return data
}

const getUserByID = async (id) => {
    
  //recuperer le profil de mongo
  const response = await fetch(`http://localhost:5000/users/${id}`, {
    credentials: "include"
  })
  const data = await response.json()


  return data
}

export {
  getUsers,
  getUserByID
}
