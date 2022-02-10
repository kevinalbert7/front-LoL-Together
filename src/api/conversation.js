const getConversation = async (sender_id, receiver_id) => {
  const response = await fetch(`http://localhost:5000/conversations/users?ids=${sender_id},${receiver_id}`, {
    credentials: "include"
  })
  const data = await response.json()

  return (data)
}

export {
  getConversation
}