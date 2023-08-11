const URL = "https://the-legend-of-the-cats-backend.onrender.com/get-universe-by-id/3833133292";
const ShortenedURL = "https://the-legend-of-the-cats-backend.onrender.com/get-universe-by-id/";
async function GetPlayers(ID, Visits, Playing) {
    const HTTPResponce = await fetch(ShortenedURL+ID);
    const HTTPData = await HTTPResponce.json();
    // const Visits = document.getElementById("GameVisitsValue")
    // const Playing = document.getElementById("PlayersActive")
    Visits.textContent = HTTPData["visits"]
    Playing.textContent = `${HTTPData["playing"]} Players Active`
    return HTTPData
}

async function Load() { //Gonna be when we release the 2nd game
    let TotalVisits = 0
    let TotalPlayersActive = 0
    const TheLegendOfTheCat = await GetPlayers("3833133292", document.getElementById("GameVisitsValue"), document.getElementById("PlayersActive")) //Copy And Paste This Line And The 2 Lines After This, Change The Universe ID and the Variable Names And You Have A New Game Added To The Total Visits And Playing(If You Uncomment Them in index.html) 
    TotalVisits += TheLegendOfTheCat["visits"]
    TotalPlayersActive += TheLegendOfTheCat["playing"]
}

Load()

setInterval(Load, 10000) //Time Is Milliseconds