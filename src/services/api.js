
const callToApi = () => {

    return (
        fetch('https://rickandmortyapi.com/api/character/?page=4')
            .then(response => response.json())
            .then(list => {
                return (list.results.map(character => {
                    return {
                        id: character.id,
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