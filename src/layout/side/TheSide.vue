<template>
    <a-layout-sider
        id="sidebar"
        hide-trigger
        collapsible
        :collapsed="collapsed">
        <div class="sidebar-logo">
            <div class="logo">
                <a href="" class="logo-expanded">
                    <img src="../../assets/logo/light.png" height="40" class="logo-light"
                         alt="三分">
                    <img src="../../assets/logo/dark.png" height="40" class="logo-light do-none"
                         alt="三分">
                </a>
                <a href="" class="logo-collapsed">
                    <img src="../../assets/logo/mini-logo.png" height="40" class="logo-dark do-none"
                         alt="三分">
                    <img src="../../assets/logo/mini-logo.png" height="40" class="logo-dark do-none"
                         alt="三分">
                </a>
            </div>
        </div>
        <div class="sidebar-menu">
            <a-menu>
                <a-menu-item>
                    <star theme="filled" size="20" fill="#515c6b"/>常用推荐
                </a-menu-item>
                <a-menu-item>
                    <tag-one theme="filled" size="20" fill="#515c6b"/>原站收录
                </a-menu-item>
                <a-menu-item>
                    <telegram theme="filled" size="20" fill="#515c6b"/>原创网页
                </a-menu-item>
                <a-menu-item>
                    <video-one theme="filled" size="20" fill="#515c6b"/>影音推荐
                </a-menu-item>
                <a-sub-menu>
                    <template #title>
                        <doc-detail theme="filled" size="20" fill="#515c6b"/>社区咨询
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
                    <folder-upload theme="filled" size="20" fill="#515c6b"/>网站提交
                </a-menu-item>
                <a-menu-item>
                    <like theme="filled" size="20" fill="#515c6b"/>关于导航
                </a-menu-item>
            </a-menu>
        </div>
    </a-layout-sider>
</template>

<script setup>
  import {ref} from "vue";
  import { Star, TagOne, Telegram, VideoOne, DocDetail, FolderUpload, Like } from '@icon-park/vue-next'
  const collapsed = ref(false)
  const onCollapse = () => {
      collapsed.value = !collapsed.value
  }
</script>

<style lang="less" scoped>
  .arco-layout-sider{
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
    display: flex;
    align-items: center;
  }
  .i-icon{
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  .sidebar-bottom{

  }

</style>