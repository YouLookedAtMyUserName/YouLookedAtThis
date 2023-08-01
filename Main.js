const URL = "http://localhost:3001/get-universe-by-id/3833133292";
async function GetPlayers() {
    const HTTPResponce = await fetch(URL);
    const HTTPData = await HTTPResponce.json();
    const Visits = document.getElementById("GameVisitsValue")
    const Playing = document.getElementById("PlayersActive")
    Visits.textContent = HTTPData["visits"]
    Playing.textContent = `${HTTPData["playing"]} Players Active`
}

GetPlayers();