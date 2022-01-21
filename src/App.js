import React, { useEffect } from 'react'
import { Container, Group } from '@mantine/core'
import styles from './app.module.css'
import { Link } from 'react-router-dom'
import { getPopularMovies } from './data'

const Movie = () => {
  return <Link to={`/movies/someMovie`} className={styles.movie}></Link>
}

const App = () => {
  useEffect(() => {
    const getMovies = async () => {
      await getPopularMovies()
    }

    getMovies()
  }, [])
  return (
    <>
      <header className={styles.header}></header>
      <Container>
        <Group>
          <Movie></Movie>
          <Movie></Movie>
          <Movie></Movie>
        </Group>
      </Container>
    </>
  )
}

export default App
