import React, { useEffect, useState } from 'react'
import { useContentStore } from '../store/content'
import axios from 'axios'

function useGetTrendingContent() {
    const [trendingContent,setTrendingContent]=useState([])
    //i am spending 3.4 hrs here bcz i wrote null instead of [] !!!!
    const {contentType,setContentType}=useContentStore()
    // setContentType('tv')
    console.log('first Upper')
    
    useEffect(()=>{
        console.log('second Under')
        const getTrendingContent=async ()=>{
            const res=await axios.get(`api/v1/${contentType}/trending`)
            console.log('res-->',res.data)
            setTrendingContent(res.data.content.results)
        }
        getTrendingContent()
    },[contentType])
    console.log('first Upper-->',contentType)
  return {trendingContent}
}

export default useGetTrendingContent
