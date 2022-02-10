const api_key = "RGAPI-dc1fb3d9-16c6-4268-9dc0-0c2a0e548764"

const getLolProfile = async (summoner_name) => {
  const LoL_Response = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner_name}?api_key=${api_key}`, {
  })
  const lolProfile = await LoL_Response.json()

  return lolProfile
}

const getLolStats = async (summoner_id) => {
  const LoL_Response = await fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summoner_id}?api_key=${api_key}`, {
  })
  const lolStats = await LoL_Response.json()
  
  return lolStats
}

export {
  getLolProfile,
  getLolStats
}