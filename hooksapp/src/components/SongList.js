import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1'
import NewSongForm from './NewSongForm'

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'Almost Home', id: 1 },
    { title: 'Memory Gospel', id: 2 },
    { title: 'This Wild Darkness', id: 3 }
  ])

  // On click, increment age by 1 from initial 20.
  const [age, setAge] = useState(20)

  const addSong = title => {
    setSongs([...songs, { title: title, id: uuid() }])
  }

  // useEffect's callback function will run every time the songs data changed, not the age data.
  useEffect(() => {
    console.log('useEffect hook ran', songs)
  }, [songs])

  // Likewise, this useEffect will run every time age is updated.
  useEffect(() => {
    console.log('useEffect hook ran', age)
  }, [age])

  return (
    <div className='song-list'>
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>
        })}
      </ul>

      <NewSongForm addSong={addSong} />

      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  )
}

export default SongList
