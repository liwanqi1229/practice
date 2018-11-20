<template>
    <div class="header" :style="{background:bg}">
        <span class="home" @click="goHome" >首页</span>
        <h2 class="title">
            <slot name="title">webapp</slot>
        </h2>
    </div>
</template>

<script>
export default {
    props:['bg'],
    methods:{
        goHome(){
            this.$router.push('/')
    }
    }
    
}
</script>

<style scoped>
 .header{
     width: 100%;
     height: 1rem;
     background: #2196f3;
     position: fixed;
     top: 0rem;
     line-height: 1rem;}
.home{
    color: #fff;
    margin-left: 0.2rem;}
.title{
    position: absolute;
    left: 50%;
    top: 50%;
    color: #fff;
    transform: translate(-50%,-50%);
}
</style>


