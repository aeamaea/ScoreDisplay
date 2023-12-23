let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

homeScoreEl.innerText = homeScore
guestScoreEl.innerText = guestScore

const incScore = (team,incAmount) => {
    // console.log(team,incAmount)
    if (team === "home") {
        homeScore += incAmount
        homeScoreEl.innerText = homeScore 
    } else {
        guestScore += incAmount
        guestScoreEl.innerText = guestScore
    }
}

const clearScores = () => {
    homeScore = 0
    guestScore = 0
    homeScoreEl.innerText = homeScore
    guestScoreEl.innerText = guestScore
}