<template>
    <a-layout-sider
        id="sidebar"
        hide-trigger
        collapsible
        :width=170
        :collapsed="sidebarCollapsed">
        <div class="sidebar-logo">
            <div class="logo">
                <a href="#" class="logo-expanded">
                    <img src="../../assets/logo/light.png" height="40" class="logo-light"
                         alt="三分">
                    <img src="../../assets/logo/dark.png" height="40" class="logo-dark do-none"
                         alt="三分">
                </a>
                <a href="#" class="logo-collapsed">
                    <img src="../../assets/logo/mini-logo.png" height="40" class="do-none"
                         alt="三分">
                    <img src="../../assets/logo/mini-logo.png" height="40" class="do-none"
                         alt="三分">
                </a>
            </div>
        </div>
        <div class="sidebar-menu">
            <a-menu>
                <a-menu-item>
                    <font-awesome-icon icon="star" class="icon fa-lg" /> 常用推荐
                </a-menu-item>
                <a-menu-item>
                    <font-awesome-icon icon="tag" class="icon fa-lg" /> 原站收录
                </a-menu-item>
                <a-menu-item>
                    <font-awesome-icon icon="paper-plane" class="icon fa-lg" /> 原创网页
                </a-menu-item>
                <a-menu-item>
                    <font-awesome-icon icon="video" class="icon fa-lg" /> 影音推荐
                </a-menu-item>
                <a-sub-menu>
                    <template #title>
                        <font-awesome-icon icon="newspaper" class="icon fa-lg" /> 社区咨询
                    </template>
                    <a-menu-item>
                        咨询
                    </a-menu-item>
                    <a-menu-item>
                        社区
                    </a-menu-item>
                </a-sub-menu>

            </a-menu>
        </div>
        <div class="sidebar-bottom">
            <a-menu>
                <a-menu-item>
                    <font-awesome-icon :icon="['fas', 'file-arrow-up']" class="icon fa-lg"/> 网站提交
                </a-menu-item>
                <a-menu-item>
                    <font-awesome-icon :icon="['fas', 'heart']" class="icon fa-lg"/> 关于导航
                </a-menu-item>
            </a-menu>
        </div>
    </a-layout-sider>
</template>

<script setup>
  import {ref} from "vue";
  import { FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
  import {library} from "@fortawesome/fontawesome-svg-core";
  import {
      faFileArrowUp,
      faHeart,
      faNewspaper,
      faPaperPlane,
      faStar,
      faTag,
      faVideo
  } from "@fortawesome/free-solid-svg-icons";

  library.add(faStar, faTag, faPaperPlane, faVideo, faNewspaper, faFileArrowUp, faHeart)

  import {useStatusStore} from "@/stores/status.js";
  import {storeToRefs} from "pinia";

  const statusStore = useStatusStore()
  const { sidebarCollapsed } = storeToRefs(statusStore)
</script>

<style lang="less" scoped>
  .arco-layout-sider{
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    max-width: 170px;
    :deep(.arco-layout-sider-children) {
      display: flex;
      flex-direction: column;
    }
  }

  .sidebar-logo{
    height: 75px;
    .logo{
      line-height: 75px;
      text-align: center;
      img{
        vertical-align: middle;
      }
      .do-none{
        display: none;
      }
    }
  }
  .sidebar-menu{
    flex: 1;
  }
  .arco-menu-item,  :deep(.arco-menu-inline-header){
    //display: flex;
    //align-items: center;
  }
  .icon{
    //display: flex;
    //align-items: center;
    margin-right: 10px;
  }
  .sidebar-bottom{

  }

</style>