import axios from "axios";

const API_KEY = "RGAPI-efbfa2bb-1335-4db1-afbe-59c1d040b8f7";

export async function getPlayerData(searchProfile) {
  try {
    const response = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchProfile}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

/*export async function getChampionRotationData(championRotation) {
  try {
    const response = await axios.get(`/https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}*/
