import '../../styles/Portfolio.css'

export default function Portfolio() {
    return (
        <div className="portfolioContainer" class="row">
                <div className="images" class="card col-sm-12">
                    <div class="card-body">
                        <a href="https://terryboufis.github.io/Dine-and-Wine-App/" target="_blank"><img src={require('../../images/dineNwine.png')} alt="Image of Restaraunt" class="card-img-top" /></a><div class="caption">DINE AND WINE <a href="https://github.com/TerryBoufis/Dine-and-Wine-App" target="_blank"><img src={require('../../images/github.png')} className="githubLogo" alt="Github Logo" /></a></div>
                    </div>
                </div>
                <div className="images" class="card col-sm-6">
                    <div class="card-body">
                        <a href="https://project-management-2022-but.herokuapp.com/login" target="_blank"><img src={require('../../images/trackerApp1.png')} alt="Task Management App" class="card-img-top projectPreview" /></a><div class="caption">TASK TRACKER <a href="https://github.com/cmurphgarv/Project-Management-App" target="_blank"><img src={require('../../images/github.png')} className="githubLogo" alt="Github Logo" /></a></div>
                    </div>
                </div>
                <div className="images" class="card col-sm-6">
                    <div class="card-body">
                        <a href="https://cmurphgarv.github.io/Code-Quiz/" target="_blank"><img src={require('../../images/quizGame.png')} alt="Quiz Game Site" class="card-img-top projectPreview" /></a><div class="caption">CODE QUIZ <a href="https://github.com/cmurphgarv/Code-Quiz" target="_blank"><img src={require('../../images/github.png')} className="githubLogo" alt="Github Logo" /></a></div>
                    </div>
                </div>
                <div className="images" class="card col-sm-6">
                    <div class="card-body">
                        <a href="https://cmurphgarv.github.io/Weather-Dashboard/" target="_blank"><img src={require('../../images/weatherDash.png')} alt="Weather Lookup App" class="card-img-top projectPreview" /></a><div class="caption">WEATHER DASHBOARD <a href="https://github.com/cmurphgarv/Weather-Dashboard" target="_blank"><img src={require('../../images/github.png')} className="githubLogo" alt="Github Logo" /></a></div>
                    </div>
                </div>
                <div className="images" class="card col-sm-6">
                    <div class="card-body">
                        <a href="https://cmurphgarv.github.io/Password-Generator/" target="_blank"><img src={require('../../images/passwordGen.png')} alt="Password Generator App" class="card-img-top projectPreview" /></a><div class="caption">PASSWORD GENERATOR <a href="https://github.com/cmurphgarv/Password-Generator" target="_blank"><img src={require('../../images/github.png')} className="githubLogo" alt="Github Logo" /></a></div>
                    </div>
                </div>
        </div>
    )
}