import React, { useState, useContext } from 'react'
import Modal from 'react-bootstrap/Modal'

import { UserContext } from '../contexts/UserContext'
import { AnnouncementContext } from '../contexts/AnnouncementContext'

import { getAnnouncementById } from '../api/announcement'

const CreateAnnouncement = ({ onHide }) => {
  const { user, setUser } = useContext(UserContext)
  const [newAnnouncement, setNewAnnouncement] = useState(null)
  const { setAnnouncement } = useContext(AnnouncementContext)

  const handleTextarea = (e) => {
    setNewAnnouncement(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()    
    createAnnouncement()
  }

  const createAnnouncement = async () => {
    await fetch(`http://localhost:5000/announcements`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        user : user._id,
        text : newAnnouncement
      })
    })
    const updatedAnnouncement = await getAnnouncementById(user._id)
    setAnnouncement(updatedAnnouncement)
  }

  // console.log(newAnnouncement)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <textarea 
            className="form-control" 
            placeholder="Leave a comment here" 
            id="floatingTextarea2" 
            style={{height:"200px"}}
            onChange={handleTextarea}
          />
          <label htmlFor="floatingTextarea2">Annonce</label>
        </div>
        <Modal.Footer>
          <button className="btn draw-border" onClick={() => onHide()}>Valider</button>
        </Modal.Footer>
      </form>
    </div>
  )
}

export default CreateAnnouncement