const scores = { home: 0, guest: 0 }

function addPoints(team, points) {
    scores[team] += points
    document.getElementById(team + 'points').textContent = scores[team]
}
function resetpoints() {
    homescore = 0
    guestscore = 0
    document.getElementById("homepoints").textContent = 0
    document.getElementById("guestpoints").textContent = 0
}