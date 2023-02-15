import '../styles/Footer.css'

export default function Footer() {
    return (
        <div class="container-fluid g-0" className="footer">
            <div className='logo-position'>
                <a href="mailto:murphey.charlotte@gmail.com"><img src={require('../images/email.png')} alt="Email Clip Art" className='logos'></img></a>
            </div>
            <div className='logo-position'>
                <a href="https://github.com/cmurphgarv" target="_blank"><img src={require('../images/github.png')} alt="Github Logo" className='logos'></img></a>
            </div>
            <div className='logo-position'>
                <a href="https://www.linkedin.com/in/charlotte-murphey-b6b95942" target="_blank"><img class="logos" src={require('../images/linkedIn.png')} alt="LinkedIn Logo" className='logos'></img></a>
            </div>
        </div>

    )
};