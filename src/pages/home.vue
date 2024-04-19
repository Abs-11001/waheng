<template>
    <a-layout class="page-container">
        <the-side/>
        <a-layout id="content-container" :class="sidebarCollapsed ? 'mini-sidebar' : ''">
            <the-header/>
            <the-content />
            <the-footer/>
        </a-layout>
    </a-layout>
</template>

<script setup>
import TheHeader from "../layout/header/TheHeader.vue";
import TheSide from "../layout/side/TheSide.vue";
import TheFooter from "../layout/footer/TheFooter.vue";
import TheContent from "@/layout/content/TheContent.vue";
import {useStatusStore} from "@/stores/status.js";
import {storeToRefs} from "pinia";

const statusStore = useStatusStore()
const { sidebarCollapsed } = storeToRefs(statusStore)

</script>

<style lang="less">
    //统一管理页面及header的左侧距离
    #content-container{
      overflow-x: visible !important;
      margin-left: 170px;
      transition: linear .2s;
      background: #f9f9f9;
    }
    #content-container.mini-sidebar {
      margin-left: 48px;
    }
    #content-container.mini-sidebar .header{
      left: 48px;
    }
</style>