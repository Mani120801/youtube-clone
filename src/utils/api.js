import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: {
        q: 'desp',
        hl: 'en',
        gl: 'US'
      },
      headers: {
        'X-RapidAPI-Key': 'e8cf10f2cdmsha344e62595b9c9ap1bf6aejsnb03b0525600c',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
      },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
