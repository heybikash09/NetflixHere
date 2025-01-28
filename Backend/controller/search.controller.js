import { User } from "../models/user.model.js"
import { fetchFromTMDB } from "../services/tmdb.services.js"

export const searchPerson = async (req, res) => {
    const { query } = req.params
    try {
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`)
        if (response.results.length === 0)
            return res.status(404).send(null)

        //For save the search person in searchHistory 
        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                searchHistory: {
                    id: response.results[0].id,
                    image: response.results[0].profile_path,
                    name: response.results[0].name,
                    searchType: "person",
                    createdAt: new Date(),
                }
            }
        })

        return res.status(200).json({ success: true, data: response.results })
    } catch (err) {
        console.log('error-->', err.message)
        return res.status(500).json({ success: false, message: 'Internal Server Error !!!!' })
    }

}

export const searchTV = async (req, res) => {
    const { query } = req.params
    try {
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`)
        if (response.results.length === 0)
            return res.status(404).send(null)

        //for save the seach data in history 
        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                searchHistory: {
                    id: response.results[0].id,
                    image: response.results[0].poster_path,
                    title: response.results[0].title,
                    searchType: "tv",
                    createdAt: new Date(),
                }
            }
        })
        return res.status(200).json({ success: true, data: response.results })
    } catch (err) {
        console.log('error-->', err.message)
        return res.status(500).json({ success: false, message: 'Internal Server Error !!!!' })
    }



}
export const searchMovie = async (req, res) => {

    const { query } = req.params
    try {
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`)
        if (response.results.length === 0)
            return res.status(404).send(null)

        //for save the seach data in history 
        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                searchHistory: {
                    id: response.results[0].id,
                    image: response.results[0].poster_path,
                    title: response.results[0].title,
                    searchType: "movies",
                    createdAt: new Date(),
                }
            }
        })
        return res.status(200).json({ success: true, data: response.results })
    } catch (err) {
        console.log('error-->', err.message)
        return res.status(500).json({ success: false, message: 'Internal Server Error !!!!' })
    }
}

export const getSearchHistory = async (req, res) => {
    try {
        return res.status(200).json({ success: true, data: req.user.searchHistory })
    } catch (err) {
        console.log('error-->', err.message)
        return res.status(500).json({ success: false, message: 'Internal Server Error !!'})
    }
}


export const removeItemFromSearchHistory=async (req,res)=>{
    let {id}=req.params

        id=parseInt(id)
    try{
            await User.findByIdAndUpdate(req.user._id,
               {
                $pull:{
                    searchHistory:{id:id}
                }
               }
            )
            res.status(200).json({success:true,message:'item remove from searchHistory !!'})
    }
    catch(err)
    {
            console.log('error in removing item from history -->',err.message)
            return res.status(500).json({success:false,message:'Internal server Error !!'})
    }

}