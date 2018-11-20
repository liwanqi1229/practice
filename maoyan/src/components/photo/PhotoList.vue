<template>
    <div class="list clearfix">
        <ul>
            <li v-for="(photo, index) in photoList" :key="index">
                <router-link :to="'/photo/photoDetail/'+index">
                    <img :src="photo.src" />
                </router-link>
                
            </li>
        </ul>
    </div>
</template>

<script>
import Axios from 'axios'

export default {
    data(){
        return {
            photoList: []
        }
    },
    mounted(){
        let url = '/static/data/photodata.json'

        Axios.get(url).then(res => {
            this.photoList = res.data.photoData

            //将数据存入vuex
            this.$store.dispatch('actionPhotoList', this.photoList);
           // console.log(this.photoList);
        }).catch()
    }
}
</script>

<style scoped>
@import url('../../assets/css/common.css');
.list{ margin: 1rem 0;}
.list li{width: 50%; float:left;}
.list li img{width: 100%;}
</style>

