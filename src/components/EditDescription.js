import React, { useState, useEffect, useContext } from 'react'
import Modal from 'react-bootstrap/Modal'

import { UserContext } from '../contexts/UserContext'

const EditDescription = ({ onHide }) => {
  const { user, setUser } = useContext(UserContext)
  const [newDesciption, setNewDescription] = useState(user.description)

  const handleTextarea = (e) => {
    setNewDescription(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()    
    editInfos()
  }
  
  const editInfos = async () => {
    const editInfos = await fetch(`http://localhost:5000/users/${user._id}`, {
      method: 'put',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        description : newDesciption
      })
    })
    const profileEdited = await editInfos.json()
    setUser(profileEdited); // mise à jour des valeurs de l'user
  }
  
  console.log(newDesciption)
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="form-floating">
        <textarea 
          className="form-control" 
          placeholder="Leave a comment here" 
          id="floatingTextarea2" 
          style={{height:"200px"}}
          defaultValue={user.description}
          onChange={handleTextarea}
        />
        <label htmlFor="floatingTextarea2">Description</label>
      </div>
      <Modal.Footer>
        <button className="btn draw-border" onClick={() => onHide()}>Valider</button>
      </Modal.Footer>
    </form>
    </>
  )
}

export default EditDescription