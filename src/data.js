import axios from 'axios'

export const getPopularMovies = async () => {
  const url = 'http://localhost:3880/api/popular'

  const result = await axios.get(url)
  console.log(result)
}
