const scores = { home: 0, guest: 0 }

function addPoints(team, points) {
    scores[team] += points
    document.getElementById(team + 'points').textContent = scores[team]
}
