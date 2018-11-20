<template>
    <div>
        <ul class="movie-list">
            <li class="movie" v-for="movie in movieList" :key="movie.id">
            <div class="movie-img"><img :src="movie.img" alt=""></div>
            <div class="movie-info">
                <p class="movie-name">{{movie.nm}}</p>
                <p>{{movie.ver}}</p>
                <p>主演：{{movie.star}}</p>
                <p>{{movie.showInfo}}</p>
            </div>
            </li>
            <div class="loading" v-show="loadingShow">
            <img src="@/assets/img/loading.gif" alt="">
            </div>    
        </ul>
        
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            movieList:[],
            loadingShow:false,
        }
    },
    mounted(){
         /* let url1=API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset="  */
         let url2='/static/data/moviedata.json'
         Axios.get(url2).then((res)=>{
             this.movieList=res.data.data.movies;
             this.loadingShow=true;
         }).catch(
             ()=>{
                 alert('错误')
             }
         )
    }
}
</script>

<style scoped>
.movie-list{
    margin: 1rem 0;
}
.movie{
    display: flex;
    padding: 0.2rem;
    border: 1px solid #ccc;
}
.movie-img{
    flex:1 1 0;
    
}
.movie-info{
    flex:2 1 0;
}
.movie-info .movie-name{
    color:#CF0802;
    font-weight: bold;
}
.loading{
    margin-bottom: 1rem;
    text-align: center;
}
</style>

