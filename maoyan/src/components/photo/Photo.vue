<template>
    <div>
        <common-header bg="rgb(55,71,173)">
            <span slot="title">Photo</span>
        </common-header>
        <router-view></router-view>
        <common-footer bg="rgb(55,71,173)"></common-footer>
    </div>
</template>

<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'

export default {
    components: {
        CommonHeader,
        CommonFooter
    }
}
</script>

<style scoped>

</style>

