export default async function handler(req, res) {
    const reponse = await fetch('https://reactnative.dev/movies.json')
    const movies = await reponse.json()
    res.status(200).json(movies.movies)
}