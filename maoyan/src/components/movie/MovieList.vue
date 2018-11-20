<template>
    <div>
        <ul class="movie-list">
            <li @click="goDetail(movie.id)"  class="movie" v-for="movie in movieList" :key="movie.id">
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
            <div class="tip" v-show="tip">
                <h4>已到世界尽头</h4>
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
            tip:false,
        }
    },
    methods:{
        loadData(){ //封装为函数
            /* let url1=API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset="  */
            let url2='/static/data/moviedata.json'
            
            Axios.get(url2).then((res)=>{
                console.log(res)
                let list=res.data.data.movies;
                let data=list.slice(this.movieList.length,this.movieList.length+5)
                if(data.length<5){
                    this.tip=true;
                }
                this.movieList=this.movieList.concat(data);
                }).catch(
                    ()=>{
                    alert('错误')
                }
            )
        },
        goDetail(movieId){
            this.$router.push('/movie/MovieDetail/'+movieId)
        }
    },
    mounted(){
         this.loadData()
         window.onscroll=()=>{
             let clientHeight = document.documentElement.clientHeight;
             let scrollTop = document.documentElement.scrollTop;
             let scrollHeight = document.documentElement.scrollHeight;
             if( scrollTop+clientHeight >= scrollHeight-110){ //110是底部导航的高度.
                console.log('这里是世界尽头: '+this.tip, this.loadingShow);
                this.loadingShow = true; //当前页数据获取完毕后加载动画
                if(!this.tip){
                this.loadData();   
                }else{
                    this.loadingShow = false;
                }
            }     
         }    
    },
    
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
.tip{
    text-align: center;
}
</style>

