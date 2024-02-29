import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_API_KEY

axios.defaults.baseURL = BASE_URL
axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.params = { api_key: API_KEY }

export const getMovies = async (page, callback) => {
  await axios
    .get(`movie/now_playing?language=en-US&page=${page}`)
    .then((res) => {
      callback(res.data)
    })
    .catch((err) => {
      callback(err)
    })
}

export const getMovieDetail = async (id, callback) => {
  await axios
    .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
    .then((res) => {
      callback(res.data)
    })
    .catch((err) => {
      callback(err)
    })
}

export const getPopularMovies = async (page, callback) => {
  await axios
    .get(`movie/popular?language=en-US&page=${page}`)
    .then((res) => {
      callback(res.data)
    })
    .catch((err) => {
      callback(err)
    })
}

export const getTopMovies = async (page, callback) => {
  await axios
    .get(`movie/top_rated?language=en-US&page=${page}`)
    .then((res) => {
      callback(res.data)
    })
    .catch((err) => {
      callback(err)
    })
}

export const searchMovies = async (query, page, callback) => {
  await axios
    .get(`search/movie?query=${query}&language=en-US&page=${page}`)
    .then((res) => {
      callback(res.data)
    })
    .catch((err) => {
      callback(err)
    })
}
