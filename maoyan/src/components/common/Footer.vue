<template>
    <div >
        <ul class="footer" :style="{background:bg}">
            <li><router-link to='/movie/MovieList'>电影</router-link>
                
            </li>
            <li><router-link to='/music'>音乐</router-link>
                
            </li>
            <li><router-link to='/book'>书籍</router-link>
                
            </li>
            <li><router-link to='/photo'>图片</router-link>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['bg']
}
</script>

<style scoped>
    .footer{
        width: 100%;
        height: 1rem;
        background: #2196f3;
        position: fixed;
        bottom:0;
        color: #fff;
        line-height: 1rem;
        display: flex;
        justify-content: space-around;
        font-size: 18px;
    }
    .footer li a{color:#ccc;}
    .footer li a router-link-active{color:#fff;}
    
</style>


