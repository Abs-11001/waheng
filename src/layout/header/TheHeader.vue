<template>
  <a-layout-header>
      <div class="left">
          <div class="collapse item">

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

          </div>
      </div>
      <div class="right">
          <div class="Hitokoto">
              <span>燕子来时新社，梨花落后清明。</span>
          </div>
          <div class="search"></div>
      </div>
  </a-layout-header>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faHouse, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
library.add(faHouse, faInfoCircle)
</script>

<style lang="less" scoped>
  .arco-layout-header{
    display: flex;
    height: 75px;
    .left{
      display: flex;
      flex: 1;
      .item{
        display: flex;
        align-items: center;
        margin: 0 15px;
        span{
          margin-left: 5px;
        }
      }
    }
  }
</style>