import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Movie from '@/components/movie/Movie'
import MovieList from '@/components/movie/MovieList'
import MovieDetail from '@/components/movie/MovieDetail'
import Music from '@/components/music/Music'
import MusicList from '@/components/music/MusicList'
import MusicAlbum from '@/components/music/MusicAlbum'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'
import PhotoList from '@/components/photo/PhotoList'
import PhotoDetail from '@/components/photo/PhotoDetail'

Vue.use(Router)

export default new Router({
  mode: 'history', //去除URL中的"#"
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/movie/movieList'
    }, {
      path: '/movie',
      name: 'Movie',
      component: Movie,
      children: [
        {
          path: 'movieList',
          name: 'MovieList',
          component: MovieList
        }, {
          path: 'movieDetail/:movieId',
          name: 'MovieDetail',
          component: MovieDetail,
        }
      ]
    },
    {
      path: '/music',
      name: 'Music',
      component: Music,
      redirect:'/music/musicList',
      children:[
        {
          path:'musicList',
          name:'MusicList',
          component:MusicList
        },{
          path:'musicAlbum/:musicId',
          name:'MusicAlbum',
          component:MusicAlbum
        }
      ]
    },{
      path: '/book',
      name: 'Book',
      component: Book,
    },{
      path: '/photo',
      name: 'Photo',
      component: Photo,
      redirect:'/photo/photoList',
      children:[
        {
          path:'photoList',
          component:PhotoList,
        },{
          path:'photoDetail/:index',
          component:PhotoDetail
        }
      ]
    },
  ]
})
