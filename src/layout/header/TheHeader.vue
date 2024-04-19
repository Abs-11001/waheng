<template>
  <a-layout-header>
      <div class="header">
          <div class="nav-bar" :class="scrollFlag ? 'has-bg': ''">
              <div class="container">
                  <div class="left">
                      <div class="collapse item" @click="handleCollapse">
                          <font-awesome-icon v-if="sidebarCollapsed" icon="arrow-right" class="fa-lg"/>
                          <font-awesome-icon v-else icon="arrow-left" class="fa-lg"/>
                      </div>
                      <div class="home item">
                          <a href="">
                              <font-awesome-icon icon="home" class="fa-lg"/><span>首页</span>
                          </a>
                      </div>
                      <div class="about item">
                          <a href="">
                              <font-awesome-icon icon="info-circle" class="fa-lg"/><span>关于</span>
                          </a>
                      </div>
                      <div class="temperature item">
                          <iframe allowtransparency="true" frameborder="0" width="180" height="36" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=3&z=2&t=0&v=0&d=3&bd=0&k=000000&f=&ltf=009944&htf=cc0000&q=1&e=1&a=1&c=54511&w=180&h=36&align=center"></iframe>
                      </div>
                  </div>
                  <div class="right">
                      <div class="Hitokoto">
                          <a href="" target="_blank" ref="hitokotoRef"></a>
                      </div>
                      <div class="search">
                          <font-awesome-icon icon="search" class="fa-2x"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="placeholder"></div>
  </a-layout-header>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faArrowLeft,
    faArrowRight,
    faHouse,
    faInfoCircle,
    faSearch
} from '@fortawesome/free-solid-svg-icons'
import { onMounted, ref} from "vue";
import {useStatusStore} from "@/stores/status.js";
import {storeToRefs} from "pinia";
import {getHitokoto} from "@/api/common.js";

library.add(faHouse, faInfoCircle, faSearch, faArrowRight, faArrowLeft)

const statusStore = useStatusStore()
const { sidebarCollapsed } = storeToRefs(statusStore)

// 页面是否滚动标记
const scrollFlag = ref(false)
// hitokotoRef
const hitokotoRef = ref(null)

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    getHitokoto().then(res => {
        const { hitokoto, uuid } = res
        hitokotoRef.value.href = `https://hitokoto.cn/?uuid=${uuid}`
        hitokotoRef.value.innerText = hitokoto
    })
})

const handleCollapse = () => {
    statusStore.changeCollapseStatus()
}

const handleScroll = () => {
    const scrollY = window.scrollY
    if(scrollY > 0) {
        scrollFlag.value = true
    } else {
        scrollFlag.value = false
    }
}
</script>

<style lang="less" scoped>
  .arco-layout-header{
    .header {
      position: fixed;
      left: 170px;
      right: 0;
      .nav-bar{
        .container{
          display: flex;
          height: 75px;
          align-items: center;
          color: white;
          a{
            color: inherit;
          }
          .left{
            display: flex;
            flex: 1;
            .collapse{
              cursor: pointer;
              transition: linear .25s;
            }
            .collapse:hover{
              transform: rotate(360deg * 2);
            }
            .item{
              display: flex;
              align-items: center;
              margin: 0 15px;
              span{
                margin-left: 5px;
              }
            }
          }
          .right{
            display: flex;
            align-items: center;
            .search{
              margin: 0 20px 0 10px;
            }
          }
        }
      }
      .nav-bar.has-bg .container{
        background:rgba(255,255,255,.7);
        backdrop-filter: blur(10px);
        color: #000;
      }
    }
    .placeholder{
      height: 75px;
    }
  }
</style>