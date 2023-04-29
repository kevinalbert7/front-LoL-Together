import Emblem_Bronze from '../assets/images/ranked-emblems/Emblem_Bronze.png'
import Emblem_Challenger from '../assets/images/ranked-emblems/Emblem_Challenger.png'
import Emblem_Diamond from '../assets/images/ranked-emblems/Emblem_Diamond.png'
import Emblem_Gold from '../assets/images/ranked-emblems/Emblem_Gold.png'
import Emblem_Grandmaster from '../assets/images/ranked-emblems/Emblem_Grandmaster.png'
import Emblem_Iron from '../assets/images/ranked-emblems/Emblem_Iron.png'
import Emblem_Master from '../assets/images/ranked-emblems/Emblem_Master.png'
import Emblem_Platinum from '../assets/images/ranked-emblems/Emblem_Platinum.png'
import Emblem_Silver from '../assets/images/ranked-emblems/Emblem_Silver.png'


const getEmblem = (tier) => {
  if (tier === "BRONZE") {
    return Emblem_Bronze
  }
  if (tier === "CHALLENGER") {
    return Emblem_Challenger
  }
  if (tier === "DIAMOND") {
    return Emblem_Diamond
  }
  if (tier === "GOLD") {
    return Emblem_Gold
  }
  if (tier === "GRANDMASTER") {
    return Emblem_Grandmaster
  }
  if (tier === "IRON") {
    return Emblem_Iron
  }
  if (tier === "MASTER") {
    return Emblem_Master
  }
  if (tier === "PLATINUM") {
    return Emblem_Platinum
  }
  if (tier === "SILVER") {
    return Emblem_Silver
  }
}

export { getEmblem }