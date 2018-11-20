<template>
   <div >
       <ul class="music-list">
           <li v-for="music in musicList" :key="music.id">
                <router-link :to="'/music/MusicAlbum/'+music.id" >
                  <img :src="music.bg" alt="">
                </router-link>
   
           </li>
       </ul>
   </div>
</template>
<style scoped>
.music-list{margin: 0.8rem 0;display: flex;flex-wrap: wrap;}
.music-list li{width: 50%;}
.music-list li img{width: 100%;}

</style>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            musicList:[]
        }
    },
    mounted() {
        let url = '/static/data/musiclist.json'
        Axios.get(url).then((res)=>{
            this.musicList=res.data.albums
            console.log(this.musicList)
        }).catch()
    },
}
</script>


