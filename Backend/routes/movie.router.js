import express from 'express'
import {getMovieDetails, getMoviesByCategories, getMovieTrailer, getSimilarMovies, getTrendingMovies } from '../controller/movie.controller.js'
const router=express.Router()

router.get('/trending',getTrendingMovies)
router.get('/:id/trailer',getMovieTrailer)
router.get('/:id/details',getMovieDetails)
router.get('/:id/similar',getSimilarMovies)
router.get('/:category',getMoviesByCategories)
export default router
 