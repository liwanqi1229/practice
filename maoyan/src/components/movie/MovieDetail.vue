<template>
<div class="detail">
        <!-- <h2>Detail: {{$route.params.movieId}}</h2> -->
    <div class="detail-content">
        <div class="detail-img">
            <img :src="movieDetail.img" alt="">
        </div>
        <div class="detail-info">
            <h2 v-text="movieDetail.nm"></h2>
            <p v-text="movieDetail.sc+' 分'"></p>
            <p>{{movieDetail.cat}}</p>
            <p>{{movieDetail.src}}/{{movieDetail.dur}}</p>
            <p>{{movieDetail.rt}}</p>
        </div>    
    </div>
    <hr/>
        <div>
            <h3>主演</h3>
            <p>{{movieDetail.star}}</p>
        </div>
        <hr/>
        <div class="introduce">
            <h3>简介</h3>
            <p>{{movieDetail.star}}</p>
        </div>
</div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            movieDetail:{}
        }
    },
    mounted(){
        /* let url1 = API_PROXY + "http://m.maoyan.com/movies/"+this.$route.params.movieId+'.json' */
        let url2 = "/static/data/moviedetail.json"

        Axios.get(url2).then( res => {
            //console.log(res)
            this.movieDetail = res.data.data.MovieDetailModel;
        }).catch()

    }
    
}
</script>

<style scoped>
 .detail-content{
     margin:1rem 0;
     padding: 0 0.2rem;
     margin-bottom: 0.2rem;
     display: flex;
 }
.detail-img{
    flex:1 1 0;
    margin-right: 0.2rem;
}
.detail-info{
    flex:2 1 0;
}
.detail .introduce{
    margin-bottom: 1.2rem;
}
.detail h3{
    text-align: center;
}

</style>

