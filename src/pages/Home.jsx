import React from 'react'
import { Link } from 'react-router-dom'
import './src/home.css'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className="home-cont">
        <h1>AI-Factory</h1>
        <div className="home-inn">
            <Link to={'/image-generator'}>
                <div className="ai-items">
                    <img className={'first-img'} src="https://play-lh.googleusercontent.com/Zsk_jNGcPjP8seH7LMREHb8pNXQZ-BKkiD_38tiw1mijgfnSnrxnyuHfTsZIG1jaKS4" alt="" />
                    <button>Generate images</button>
                </div>
            </Link>
            <Link to={'/resume-generator'}>
                <div className="ai-items">
                    <img src="https://d31kzl7c7thvlu.cloudfront.net/ghost/2022/07/Resume-Builder.png" alt="" />
                    <button>Generate Resume</button>
                </div>
            </Link>
        </div>
        <Footer/>
    </div>
  )
}

export default Home