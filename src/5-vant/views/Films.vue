<template>
    <div>

        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
            <van-swipe-item v-for="data in looplist" :key="data.id">
                <!-- {{ data.title }} -->
                <img :src="data.imgUrl" style="width:100%;"/>
            </van-swipe-item>

        </van-swipe>

        <ul class="header">
            <router-link custom to="/films/nowplaying" v-slot="{ isActive, navigate }">
                <li @click="navigate">
                    <span :class="isActive ? 'kerwinactive' : ''">正在热映</span>
                </li>
            </router-link>

            <router-link custom to="/films/comingsoon" v-slot="{ isActive, navigate }">
                <li @click="navigate">
                    <span :class="isActive ? 'kerwinactive' : ''">即将上映</span>
                </li>
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import { Swipe as vanSwipe, SwipeItem as vanSwipeItem } from 'vant';
//轮播
const looplist = ref([
    {
        "id": 1,
        "imgUrl": "https://pic.maizuo.com/usr/movie/2cdb0bb6ff287052eb39ae145bdf7bc9.jpg?x-oss-process=image/quality,Q_70",
        "title": "哈利波特"
    },
    {
        "id": 2,
        "imgUrl": "https://pic.maizuo.com/usr/movie/c2d038c3a5d2914290703197207b7d9e.jpg?x-oss-process=image/quality,Q_70",
        "title": "因果报应"
    },
    {
        "id": 3,
        "imgUrl": "https://pic.maizuo.com/usr/movie/02e5b8507b28a6417eb2712643f3b246.jpg?x-oss-process=image/quality,Q_70",
        "title": "毒液.最后一舞"
    }
])
</script>
<style scoped lang="scss">
.header {
    display: flex;
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: sticky;
    top:0;
    z-index: 100;
    background: white;
    li {
        flex: 1;

        span {
            padding: 10px 0;
        }
    }
}

.kerwinactive {
    color: red;
    border-bottom: 3px solid red;
}

</style>
