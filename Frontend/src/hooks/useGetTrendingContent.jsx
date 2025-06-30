import React, { useEffect, useState } from 'react'
import { useContentStore } from '../store/content'
import axios from 'axios'
import { ENV_VARS } from '../envVar'
function useGetTrendingContent() {
    
    const [trendingContent,setTrendingContent]=useState([])
    //i am spending 3.4 hrs here bcz i wrote null instead of [] at the time of debug !!!!
    const {contentType}=useContentStore()
    console.log('trending from root')
    useEffect(()=>{
        const getTrendingContent=async ()=>{
            const res=await axios.get(`${ENV_VARS.BACKEND_URL}/api/v1/${contentType}/trending`)
            console.log('res-->',res.data)
            setTrendingContent(res.data.content.results)
        }
        getTrendingContent()
    },[contentType])
  return {trendingContent}
}

export default useGetTrendingContent
