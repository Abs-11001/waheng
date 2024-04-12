<template>
    <a-layout>
        <the-side/>
        <a-layout>
            <the-header/>
            <a-layout-content>content</a-layout-content>
            <the-footer></the-footer>
        </a-layout>
    </a-layout>
</template>

<script setup>
import TheHeader from "../layout/header/TheHeader.vue";
import TheSide from "../layout/side/TheSide.vue";
import TheFooter from "../layout/footer/TheFooter.vue";
</script>

<style scoped>

</style>