import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMGMxNmM0MC05ZmYwLTQxMzEtYjgwMy1lMDhhYTIzMGUzODgiLCJlbWFpbCI6Im1hbm8ubWFydGluczI5QGdtYWlsLmNvbSIsIm5hbWUiOiJNYW5vZWwgTWFydGlucyIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY1Mzk2MjI5MywiZXhwIjoxNjU0MDQ4NjkzfQ.gLitW4JEpHSoNrpDXS8bb6mJi_SOOix3NqJGJJXJghc',
  },
});

export default api;
