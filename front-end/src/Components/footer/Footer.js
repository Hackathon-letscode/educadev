import React, { Link } from 'react'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='Footer'>
        <div className='redes_sociais'>
            <a href="https://github.com/Hackathon-letscode/educadev" target="_blank"><FaFacebook /></a>
            <a href="https://github.com/Hackathon-letscode/educadev" target="_blank"><FaInstagram/></a>
            <a href="https://github.com/Hackathon-letscode/educadev" target="_blank"><FaGithub/></a>
            <a href="https://github.com/Hackathon-letscode/educadev" target="_blank"><FaLinkedin/></a>
        </div>

        <div>
            <p>Todos os direitos reservados &copy;2022</p>
        </div>
    </footer>
  )
}

export default Footer