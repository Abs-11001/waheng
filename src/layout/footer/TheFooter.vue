<template>
  <a-layout-footer>
      <div class="copyright">
          <span>Copyright © 2021 三分</span>
          <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">浙ICP备20023304号</a>
      </div>
      <div class="tool">
          <div class="to-top tool-item" v-show="scrollFlag" @click="scrollToTop">
              <font-awesome-icon icon="angles-up" class="fa-lg"/>
          </div>
          <div class="contact-me tool-item" @click="addQQ">
              <font-awesome-icon :icon="['fab', 'qq']" class="fa-lg"/>
          </div>
          <div class="switch-theme tool-item" @click="switchTheme">
              <font-awesome-icon :icon="['fas', 'shirt']"/>
          </div>
      </div>
  </a-layout-footer>
</template>

<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faAnglesUp, faShirt} from "@fortawesome/free-solid-svg-icons";
import {faQq} from "@fortawesome/free-brands-svg-icons";
import {onMounted, ref} from "vue";
library.add(faAnglesUp, faQq, faShirt)

const scrollFlag = ref(false)
onMounted(() => {
    window.addEventListener('scroll', function (e) {
        const scrollY = window.scrollY
        scrollFlag.value = scrollY > 0;
    })
})

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const switchTheme = () => {
    // 判断是否有dark类名
    const flag = document.body.classList.contains("dark");
    if(flag) {
        document.body.classList.remove('dark')
    } else {
        document.body.classList.add('dark')
    }
}

const addQQ = () => {
    window.open('http://wpa.qq.com/msgrd?v=3&uin=1196399230&site=qq&menu=yes', '_blank')
}
</script>

<style lang="less" scoped>
  .arco-layout-footer{
    padding: 20px 30px;
    font-size: .8rem;
    .copyright{
      span{
        margin-right: .8rem;;
      }
      a:hover{
        color: red;
      }
    }
    .tool{
      position: fixed;
      right: 20px;
      bottom: 20px;
      .tool-item{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        margin: 10px 0;
        border-radius: 20px;
        opacity: .7;
        transition: linear .1s;
        cursor: pointer;
        background: #eee;
      }
      .tool-item:hover{
        opacity: 1;
      }
    }
  }
</style>