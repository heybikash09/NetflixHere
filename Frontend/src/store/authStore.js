import axios from 'axios'
import toast from 'react-hot-toast'
import { create } from 'zustand'
import { ENV_VARS } from '../envVar'
console.log('ENV_VARS-->', ENV_VARS.BACKEND_URL)
export const useAuthStore = create((set) => ({
    user: null,
    isSignup: false,
    isChekingAuth: false,
    isLoggingOut: false,
    isLogin: false,
    signup: async (credential) => {
        set({ isSignup: true })
        try {
            const response = await axios.post(`${ENV_VARS.BACKEND_URL}/api/v1/auth/signup`, credential)
            // const response = await axios.post('/api/v1/auth/signup', credential)
            set({ user: response.data.user, isSignup: false })
            console.log('authStore-->', response.data.message)
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response.data.message || 'Signup Failed  !!')
            set({ user: null, isSignup: false })
        }
    },
    login: async (credential) => {
        set({ isLogin: true })
        try {
            const response = await axios.post(`${ENV_VARS.BACKEND_URL}/api/v1/auth/login`, credential)

            set({ user: response.data.user, isLogin: false })
            console.log('authStore-->', response.data)
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response.data.message || 'Login Failed !!')
            set({ user: null, isLogin: false })
        }
    },
    logout: async () => {
        set({ isLoggingOut: true })
        try {
            await axios.post(`${ENV_VARS.BACKEND_URL}/api/v1/auth/logout`)
            set({ user: null, isLoggingOut: false })
            toast.success('Logout Successfully')
        } catch (error) {
            set({ isLoggingOut: false })
            toast.error(error.response.data.message || 'Logout Failed !!')
        }
    },
    authCheck: async () => {
        set({ isChekingAuth: true })
        try {
            console.log('authCheck response called -->')
            const response = await axios.get(`${ENV_VARS.BACKEND_URL}/api/v1/auth/authCheck`)
            console.log('authCheck response-->', response.data)         
            set({ user: response.data.user, isChekingAuth: false })
        } catch (error) {
            console.log('error in authChek ',error.response.data.message)
            set({ user: null, isChekingAuth: false })

        }
    },
}))

