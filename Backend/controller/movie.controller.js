import { ENV_VARS } from "../config/envVars.js"
import { fetchFromTMDB } from "../services/tmdb.services.js"

export const getTrendingMovies = async (req, res) => {
    try {
        const data = await fetchFromTMDB('https://api.themoviedb.org/3/trending/movie/day?language=en-US')
        console.log('Data-->', data.results)
        return res.status(200).json({ succes: true, content: data })
    } catch (err) {
        console.log('error--> ', err)
        return res.status(400).json({ success: false, message: 'Got a error ' })
    }
}


export const getMovieTrailer = async (req, res) => {
    const { id } = req.params
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`)
        console.log('Data-->', data.results)
        return res.status(200).json({ succes: true, data: data })
    } catch (err) {
        console.log('error--> ', err)
        return res.status(400).json({ success: false, message: 'Got a error ' })
    }
}

export const getMovieDetails = async (req, res) => {
    const { id } = req.params
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
        console.log('Data-->', data.results)
        return res.status(200).json({ succes: true, data: data })
    } catch (err) {
        console.log('error--> ', err)
        return res.status(400).json({ success: false, message: 'Got a error ' })
    }
}


export const getSimilarMovies = async (req, res) => {
    const { id } = req.params
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`)
        console.log('Data-->', data.results)
        return res.status(200).json({ succes: true, data: data })
    } catch (err) {
        console.log('error--> ', err)
        return res.status(400).json({ success: false, message: 'Got a error ' })
    }
}

export const getMoviesByCategories = async (req, res) => {
    const { category } = req.params
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`)
        console.log('Data-->', data.results)
        return res.status(200).json({ succes: true, data: data })
    } catch (err) {
        console.log('error--> ', err)
        return res.status(400).json({ success: false, message: 'Got a error ' })
    }
}


