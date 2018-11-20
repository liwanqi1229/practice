<template>
    <div>
        <common-header bg="rgb(111,73,63)">
            <span slot="title">Book</span>
        </common-header>
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
        <common-footer bg="rgb(111,73,63)"></common-footer>
        
    </div>
</template>

<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'
import {Swipe,SwipeItem} from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css'
export default {
    components: {
        CommonHeader,
        CommonFooter,
        'swipe':Swipe,
        'swipe-item':SwipeItem,
    }
}
</script>

<style scoped>

.my-swipe {
  margin: 1rem 0;
  height:210px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-image: url('/static/img/nm1.jpg');
  color: #fff;
  background-size: 100%;
}

.slide2 {
  background-image: url('/static/img/nm2.jpg');
  color: #000;
  background-size: 100%;
}

.slide3 {
  background-image: url('/static/img/nm3.jpg');
  color: #fff;
  background-size: 100%;
}
</style>



