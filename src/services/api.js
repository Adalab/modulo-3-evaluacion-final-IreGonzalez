
const callToApi = () => {

    return (
        fetch('https://raw.githubusercontent.com/Adalab/ricky-morty/master/data/rick-y-morty.json')
            .then(response => response.json())
            .then(list => {
                return (list.results.map(character => {
                    return {
                        id: parseInt(character.id),
                        photo: character.image,
                        name: character.name,
                        species: character.species,
                        gender: character.gender,
                        origin: character.origin.name,
                        status: character.status,
                        episode: character.episode.length
                    }
                }))
            })

    );
};


export default callToApi;