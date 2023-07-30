const mainData = () => {
    // fetch('./db.json')
    fetch('https://anime-db-7dcbc-default-rtdb.europe-west1.firebasedatabase.app/anime.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
        })
}

mainData()