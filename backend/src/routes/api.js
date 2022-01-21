import asynchandler from 'express-async-handler'
import express from 'express'
import axios from 'axios'

const router = express.Router()

// helper -- TODO: cleanup
const movieDB = async (endpoint) => {
  const response = await axios.get(
    `${process.env.MOVIEDB_BASE_URL}/${endpoint}`,
    {
      headers: { Authorization: `Bearer ${process.env.MOVIE_TOKEN}` },
    }
  )

  console.log(response.result[0])

  return response
}
/**
 *  @desc     Connects with the MovieDB api
 *  @route    Get /api
 *  @access   Public
 */
router.get(
  '/api',
  asynchandler(async (req, res) => {
    // Set the options

    const response = await axios.get(
      `${process.env.MOVIEDB_BASE_URL}/movie/popular`,
      {
        headers: { Authorization: `Bearer ${process.env.MOVIE_TOKEN}` },
      }
    )
    console.log(response.data)
    res.send(response.data)
  })
)

/**
 *  @desc     Returns the most popular movies using the Movie DB`
 *  @route    Get /api/popular
 *  @access   Public
 */
router.get(
  '/api/popular',
  asynchandler(async (req, res) => {
    // Set the options

    const response = await axios.get(
      `${process.env.MOVIEDB_BASE_URL}/movie/popular`,
      {
        headers: { Authorization: `Bearer ${process.env.MOVIE_TOKEN}` },
      }
    )
    console.log(response.data)
    res.send(response.data)
  })
)

export default router
