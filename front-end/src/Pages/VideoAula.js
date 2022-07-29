import React from 'react'
import useAulas from "../context/AulaContext"

const VideoAula = (props) => {

  const [aula, setAula] = useAulas()

  return (
    <div>
      {props.titulo}
    </div>
  )
}

export default VideoAula