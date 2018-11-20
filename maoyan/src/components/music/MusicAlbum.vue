<template>
   <div>
       <h2>{{$route.params.musicId}}</h2>
       
       <aplayer autoplay :list="songs" :showLrc="isLrc"
            :music="{
            title: 'secret base~卡哇伊',
            artist: 'Silent Siren',
            src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
            pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg',           
            lrc:'https://api.bzqll.com/music/netease/lrc?key=579621905&id=526307800'
            }"
       />
   </div>
</template>
<style scoped>

</style>
<script>
import Axios from 'axios'
import Aplayer from 'vue-aplayer'
export default {
    components:{
        Aplayer
    },
    data(){
        return{
            songs:[],
            isLrc:false
        }
    },
    mounted () {
        let url = '/static/data/musicdata.json'
        let list=[]
        Axios.get(url).then(res=>{           
            list = res.data.musicData;
            list.forEach(tune => {
                this.songs.push({
                    title: tune.title,
                    artist: tune.author,
                    src: tune.src,
                    pic: tune.musicImgSrc,
                    lrc: tune.lrc
                });
            });
            this.isLrc=true
        }).catch()
    },
    props:['showLrc']
}
</script>


