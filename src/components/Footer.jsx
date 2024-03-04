import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer-text" style={{color:"white",textAlign:"center"}}>
                Made with ❤️ by{' '}
                <a href="https://kinsta.com/" target="_blank" rel="noreferrer">
                    Team
                </a>
                . Read more articles on our {' '}
                <a href="https://kinsta.com/docs/kinsta-api-intro/" target="_blank" rel="noreferrer">
                    Blog
                </a>{' '}
                .
            </p>
        </div>
    )
}

export default Footer