import { ENV_VARS } from "../config/envVars.js"
import { fetchFromTMDB } from "../services/tmdb.services.js"

export const getTrendingTv = async (req, res) => {
    try {
        const data = await fetchFromTMDB('https://api.themoviedb.org/3/trending/tv/day?language=en-US')
        console.log('Data-->', data.results)
        return res.status(200).json({ succes: true, data: data })
    } catch (err) {
        console.log('error--> ', err)
        return res.status(400).json({ success: false, message: 'Got a error ' })
    }
}


export const getTvTrailer = async (req, res) => {
    const { id } = req.params
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`)
        console.log('Data-->', data.results)
        return res.status(200).json({ succes: true, data: data })
    } catch (err) {
        console.log('error--> ', err)
        return res.status(400).json({ success: false, message: 'Got a error ' })
    }
}

export const getTvDetails = async (req, res) => {
    const { id } = req.params
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`)
        console.log('Data-->', data.results)
        return res.status(200).json({ succes: true, data: data })
    } catch (err) {
        console.log('error--> ', err)
        return res.status(400).json({ success: false, message: 'Got a error ' })
    }
}


export const getSimilarTv = async (req, res) => {
    const { id } = req.params
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`)
        console.log('Data-->', data.results)
        return res.status(200).json({ succes: true, data: data })
    } catch (err) {
        console.log('error--> ', err)
        return res.status(400).json({ success: false, message: 'Got a error ' })
    }
}

export const getTvByCategories = async (req, res) => {
    const { category } = req.params
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`)
        console.log('Data-->', data.results)
        return res.status(200).json({ succes: true, data: data })
    } catch (err) {
        console.log('error--> ', err)
        return res.status(400).json({ success: false, message: 'Got a error ' })
    }
}


