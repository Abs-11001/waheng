<template>
    <a-layout class="page-container">
        <the-side/>
        <a-scrollbar
            @scroll="handleScroll"
            outer-class="scroll-bar"
            style="height:100vh;overflow: auto;">
            <a-layout id="content-container" :class="sidebarCollapsed ? 'mini-sidebar' : ''">
                <the-header :scroll-flag="scrollFlag"/>
                <the-content />
                <the-footer :scroll-flag="scrollFlag"/>
            </a-layout>
        </a-scrollbar>
    </a-layout>
</template>

<script setup>
import TheHeader from "../layout/header/TheHeader.vue";
import TheSide from "../layout/side/TheSide.vue";
import TheFooter from "../layout/footer/TheFooter.vue";
import TheContent from "@/layout/content/TheContent.vue";
import {useStatusStore} from "@/stores/status.js";
import {storeToRefs} from "pinia";
import {ref} from "vue";

const statusStore = useStatusStore()
const { sidebarCollapsed } = storeToRefs(statusStore)

// 页面是否滚动标记
const scrollFlag = ref(false)
const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop
    if(scrollTop > 0) {
        scrollFlag.value = true
    } else {
        scrollFlag.value = false
    }
}
</script>

<style lang="less">
    //统一管理页面及header的左侧距离
    #content-container{
      overflow-x: visible !important;
      margin-left: 170px;
      transition: linear .2s;
    }

    #content-container.mini-sidebar {
      margin-left: 48px;
    }
    #content-container.mini-sidebar .header{
      left: 48px;
    }
    .scroll-bar .arco-scrollbar-thumb-direction-vertical {
      width: 11px;
    }
    .scroll-bar .arco-scrollbar-thumb-direction-vertical .arco-scrollbar-thumb-bar {
      width: 5px;
      background: #cd84f1;
    }
</style>