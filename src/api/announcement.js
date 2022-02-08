const getAnnouncementById = async (id) => {
  const response = await fetch(`http://localhost:5000/announcements/${id}`, {
  })
  const data = await response.json()
  
  return data
}
const getAnnouncements = async () => {
  const response = await fetch(`http://localhost:5000/announcements/`, {
  })
  const data = await response.json()
  
  return data
}

export {
  getAnnouncementById,
  getAnnouncements
}