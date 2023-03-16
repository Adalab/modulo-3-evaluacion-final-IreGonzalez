
// API RICK Y MORTY
// const callToApi = (op) => {
//     return (
//         fetch(`https://rickandmortyapi.com/api/character/?page=${op}`)
//             .then(response => response.json())
//             .then(list => {
//                 return (list.results.map(character => {
//                     return {
//                         id: character.id,
//                         photo: character.image,
//                         name: character.name,
//                         species: character.species,
//                         gender: character.gender,
//                         origin: character.origin.name,
//                         status: character.status,
//                         episode: character.episode.length
//                     }
//                 }))
//             })
//     );
// };
const callToApi = async (headers, op) => {
	fetch("https://the-one-api.dev/v2/quote", {
		headers: headers,
	})
		.then((response) => response.json())
		.then(
			fetch(`https://the-one-api.dev/v2/character?page=${op}`, { headers: headers })
				.then((response) => response.json())
				.then((list) => {
					return list.docs.map((character) => {
						console.log(character);
						return {
							id: character._id,
							name: character.name,
							species: character.race,
							gender: character.gender,
							origin: character.realm,
							status: character.death,
						};
					});
				})
		);
};

export default callToApi;

// {
// 	list.docs.map((character) => {
// 		return {
// 			id: character._id,
// 			name: character.name,
// 			species: character.race,
// 			gender: character.gender,
// 			origin: character.realm,
// 			status: character.death,
// 		};
// 	});
// }
