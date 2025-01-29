import {create} from 'zustand'
export const useContentStore=create((set)=>({
    contentType:'movie',
    setContentType:(type)=>{
        console.log('type-->',type)
set({contentType:type})
    }
}))