export default function Portfolio() {
    return (
        <div class="portfolio" id="portfolio">
            <div class="images">
                <a href="https://terryboufis.github.io/Dine-and-Wine-App/" target="_blank"><img src={require('../../images/dineNwine.png')} alt="Image of Restaraunt" /></a><div class="caption">DINE AND WINE</div>
            </div>
            <div class="images">
                <a href="https://project-management-2022-but.herokuapp.com/login" target="_blank"><img src={require('../../images/trackerApp1.png')} alt="Task Management App" /></a><div class="caption">TASK TRACKER</div>
            </div>
            <div class="images">
                <a href="https://cmurphgarv.github.io/Code-Quiz/" target="_blank"><img src={require('../../images/quizGame.png')} alt="Quiz Game Site" /></a><div class="caption">CODE QUIZ</div>
            </div>
            <div class="images">
                <a href="https://cmurphgarv.github.io/Weather-Dashboard/" target="_blank"><img src={require('../../images/weatherDash.png')} alt="Weather Lookup App" /></a><div class="caption">WEATHER DASHBOARD</div>
            </div>
            <div class="images">
                <a href="https://cmurphgarv.github.io/Password-Generator/" target="_blank"><img src={require('../../images/passwordGen.png')} alt="Password Generator App" /></a><div class="caption">PASSWORD GENERATOR</div>
            </div>

        </div>
    )
}