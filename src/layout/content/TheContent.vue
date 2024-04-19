<template>
    <a-layout-content>
        <div class="top">
            <div class="tool-box">
                <div class="search-type">
                    <div class="anchor" ref="anchorRef" style=""></div>
                    <ul class="tabList" ref="tabListRef">
                        <li
                            v-for="item in searchType"
                            :key="item.idx"
                            :class="item.type === activeTabIndex ? 'active' : ''"
                            @click="switchTab(item)">
                            <span>{{ item.name }}</span>
                        </li>
                    </ul>
                </div>
                <div class="search-input">
                    <form
                        ref="formRef"
                        :action="formAction"
                        @submit.prevent="handleFormSubmit">
                        <input
                            id="search-text"
                            type="text"
                            :placeholder="inputPlaceholder"
                            @keyup.enter="handleFormSubmit"
                            ref="formInputRef">
                        <button type="submit" id="submit-btn">
                            <font-awesome-icon icon="search"/>
                        </button>
                    </form>
                </div>
                <div id="search-list" class="hide-type-list">
                    <div
                        class="search-group"
                        v-for="type in searchList"
                        :key="type.idx"
                        :class="activeTabIndex === type.type ? 's-current' : ''">
                        <ul class="search-type">
                            <li
                                v-for="item in type.list"
                                :key="item.idx">
                                <input
                                    ref="inputRefs"
                                    :id="item.type"
                                    hidden=""
                                    type="radio"
                                    name="type"
                                    :value="item.url"
                                    :data-placeholder="item.placeholder"
                                    @click="handleInputClick">
                                <label :for="item.type">
                                    <span class="text-muted">{{ item.name }}</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="carousel-text">
                    <div class="icon">
                        <font-awesome-icon icon="bell"/>
                    </div>
                    <a-carousel
                        auto-play
                        direction="vertical"
                        show-arrow="never"
                        indicator-type="never">
                        <a-carousel-item v-for="item in carouselText">
                            <a href="" class="text">{{ item.text }}</a>
                        </a-carousel-item>
                    </a-carousel>
                    <div class="close">
                        <font-awesome-icon icon="xmark" class="fa-lg"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-content">
            <div class="item">
                <h2 class="title">
                    <icon-list style="stroke-width: 4;"/>
                    <a href="">常用推荐</a>
                </h2>
                <div class="row">
                    <a-row
                        :gutter="24">
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>

                    </a-row>
                </div>
            </div>
            <div class="item">
                <h2 class="title">
                    <icon-list style="stroke-width: 4;"/>
                    <a href="">常用推荐</a>
                </h2>
                <div class="row">
                    <a-row
                            :gutter="24">
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>

                    </a-row>
                </div>
            </div>
            <div class="item">
                <h2 class="title">
                    <icon-list style="stroke-width: 4;"/>
                    <a href="">常用推荐</a>
                </h2>
                <div class="row">
                    <a-row
                            :gutter="24">
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>

                    </a-row>
                </div>
            </div>
            <div class="item">
                <h2 class="title">
                    <icon-list style="stroke-width: 4;"/>
                    <a href="">常用推荐</a>
                </h2>
                <div class="row">
                    <a-row
                            :gutter="24">
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>

                    </a-row>
                </div>
            </div>
            <div class="item">
                <h2 class="title">
                    <icon-list style="stroke-width: 4;"/>
                    <a href="">常用推荐</a>
                </h2>
                <div class="row">
                    <a-row
                            :gutter="24">
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>

                    </a-row>
                </div>
            </div>
            <div class="item">
                <h2 class="title">
                    <icon-list style="stroke-width: 4;"/>
                    <a href="">常用推荐</a>
                </h2>
                <div class="row">
                    <a-row
                            :gutter="24">
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="8" :lg="6" :xl="6" :xxl="4">
                            <the-card></the-card>
                        </a-col>

                    </a-row>
                </div>
            </div>
        </div>
    </a-layout-content>
</template>

<script setup>
import {nextTick, onMounted, reactive, ref} from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faBell, faSearch, faXmark} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import { IconList } from '@arco-design/web-vue/es/icon';
import TheCard from "@/components/TheCard.vue";


library.add(faSearch, faBell, faXmark)

// tabList的锚点元素
const anchorRef = ref(null)
// tabList实例
const tabListRef = ref(null)
// form实例
const formRef = ref(null)
// 搜索框实例
const formInputRef = ref(null)
// 所有的搜索源列表input实例
const inputRefs = ref([])

// 默认被激活的tab
const activeTabIndex = ref('normal')

// 搜索类型列表
const searchType = reactive([
    {
        idx: 1,
        type: 'normal',
        name: '常用',
    },
    {
        idx: 2,
        type: 'search',
        name: '搜索',
    },
    {
        idx: 3,
        type: 'tool',
        name: '工具',
    },
    {
        idx: 4,
        type: 'community',
        name: '社区',
    },
    {
        idx: 5,
        type: 'live',
        name: '生活',
    },
    {
        idx: 6,
        type: 'career',
        name: '求职',
    },
])
// 每个搜索类型对应的搜索源列表
const searchList = reactive([
    {
          idx: 1,
          type: 'normal',
          list: [
              {
                  idx: 1,
                  type: 'type-baidu',
                  name: '百度',
                  placeholder: '百度一下',
                  url: 'https://www.baidu.com/s?wd='
              },
              {
                  idx: 2,
                  type: 'type-google',
                  name: '谷歌',
                  placeholder: '谷歌两下',
                  url: 'https://www.google.com/search?q='
              },
              {
                  idx: 3,
                  type: 'type-zhannei',
                  name: '软件',
                  placeholder: '软件搜索',
                  url: 'https://www.iplaysoft.com/?s='
              },
              {
                  idx: 4,
                  type: 'type-taobao',
                  name: '淘宝',
                  placeholder: '淘宝',
                  url: 'https://s.taobao.com/search?q='
              },
              {
                  idx: 5,
                  type: 'type-bing',
                  name: '必应',
                  placeholder: '微软Bing搜索',
                  url: 'https://cn.bing.com/search?q='
              }
          ]
      },
    {
        idx: 2,
        type: 'search',
        list: [
            {
                idx: 1,
                name: "百度",
                type: "type-baidu1",
                placeholder: "百度一下",
                url: "https://www.baidu.com/s?wd="
            },
            {
                idx: 2,
                name: "谷歌",
                type: "type-google1",
                placeholder: "谷歌两下",
                url: "https://www.google.com/search?q="
            },
            {
                idx: 3,
                name: "360",
                type: "type-360",
                placeholder: "360好搜",
                url: "https://www.so.com/s?q="
            },
            {
                idx: 4,
                name: "搜狗",
                type: "type-sogo",
                placeholder: "搜狗搜索",
                url: "https://www.sogou.com/web?query="
            },
            {
                idx: 5,
                name: "必应",
                type: "type-bing1",
                placeholder: "微软Bing搜索",
                url: "https://cn.bing.com/search?q="
            },
            {
                idx: 6,
                name: "神马",
                type: "type-sm",
                placeholder: "UC移动端搜索",
                url: "https://yz.m.sm.cn/s?q="
            }
        ]

    },
    {
        idx: 3,
        type: 'tool',
        list: [
            {
                idx: 1,
                name: "权重查询",
                type: "type-br",
                placeholder: "请输入网址(不带https://)",
                url: "https://rank.chinaz.com/all/"
            },
            {
                idx: 2,
                name: "友链检测",
                type: "type-links",
                placeholder: "请输入网址(不带https://)",
                url: "https://link.chinaz.com/"
            },
            {
                idx: 3,
                name: "备案查询",
                type: "type-icp",
                placeholder: "请输入网址(不带https://)",
                url: "https://icp.aizhan.com/"
            },
            {
                idx: 4,
                name: "PING检测",
                type: "type-ping",
                placeholder: "请输入网址(不带https://)",
                url: "https://ping.chinaz.com/"
            },
            {
                idx: 5,
                name: "死链检测",
                type: "type-404",
                placeholder: "请输入网址(不带https://)",
                url: "https://tool.chinaz.com/Links/?DAddress="
            },
            {
                idx: 6,
                name: "关键词挖掘",
                type: "type-ciku",
                placeholder: "请输入关键词",
                url: "https://www.ciku5.com/s?wd="
            }
        ]
    },
    {
        idx: 4,
        type: 'community',
        list: [
            {
                idx: 1,
                name: "知乎",
                type: "type-zhihu",
                placeholder: "知乎",
                url: "https://www.zhihu.com/search?type=content&q="
            },
            {
                idx: 2,
                name: "微信",
                type: "type-wechat",
                placeholder: "微信",
                url: "https://weixin.sogou.com/weixin?type=2&query="
            },
            {
                idx: 3,
                name: "微博",
                type: "type-weibo",
                placeholder: "微博",
                url: "https://s.weibo.com/weibo/"
            },
            {
                idx: 4,
                name: "豆瓣",
                type: "type-douban",
                placeholder: "豆瓣",
                url: "https://www.douban.com/search?q="
            },
            {
                idx: 5,
                name: "搜外问答",
                type: "type-why",
                placeholder: "SEO问答社区",
                url: "https://ask.seowhy.com/search/?q="
            }
        ]

    },
    {
        idx: 5,
        type: 'live',
        list: [
            {
                idx: 1,
                name: "淘宝",
                type: "type-taobao1",
                placeholder: "淘宝",
                url: "https://s.taobao.com/search?q="
            },
            {
                idx: 2,
                name: "京东",
                type: "type-jd",
                placeholder: "京东",
                url: "https://search.jd.com/Search?keyword="
            },
            {
                idx: 3,
                name: "下厨房",
                type: "type-xiachufang",
                placeholder: "下厨房",
                url: "https://www.xiachufang.com/search/?keyword="
            },
            {
                idx: 4,
                name: "香哈菜谱",
                type: "type-xiangha",
                placeholder: "香哈菜谱",
                url: "https://www.xiangha.com/so/?q=caipu&s="
            },
            {
                idx: 5,
                name: "12306",
                type: "type-12306",
                placeholder: "12306",
                url: "https://www.12306.cn/?"
            },
            {
                idx: 6,
                name: "快递100",
                type: "type-kd100",
                placeholder: "快递100",
                url: "https://www.kuaidi100.com/?"
            },
            {
                idx: 7,
                name: "去哪儿",
                type: "type-qunar",
                placeholder: "去哪儿",
                url: "https://www.qunar.com/?"
            }
        ]

    },
    {
        idx: 6,
        type: 'career',
        list: [
            {
                idx: 1,
                name: "智联招聘",
                type: "type-zhaopin",
                placeholder: "智联招聘",
                url: "https://sou.zhaopin.com/jobs/searchresult.ashx?kw="
            },
            {
                idx: 2,
                name: "前程无忧",
                type: "type-51job",
                placeholder: "前程无忧",
                url: "https://search.51job.com/?"
            },
            {
                idx: 3,
                name: "拉钩网",
                type: "type-lagou",
                placeholder: "拉钩网",
                url: "https://www.lagou.com/jobs/list_"
            },
            {
                idx: 4,
                name: "猎聘网",
                type: "type-liepin",
                placeholder: "猎聘网",
                url: "https://www.liepin.com/zhaopin/?key="
            }
        ]

    },
])

const formAction = ref('')
const inputPlaceholder = ref('')

onMounted(() => {
    // 移动anchor
    activeAnchor()
    // 激活对应的input
    activeSearchListType(activeTabIndex.value)
})

async function switchTab(item) {
    const { type } = item
    activeTabIndex.value = type
    await nextTick()
    // 当模板渲染完后移动anchor
    activeAnchor()
    // tab切换完成后，对应的搜索源也需要切换
    activeSearchListType(type)
}

const activeSearchListType = (type) => {
    /**
     * 切换tab对应的搜索源
     * type: tab的类型，搜索源type与其唯一对应
     */
    // 遍历所有的搜索源列表
    for (const searchListElement of searchList) {
        // 寻找type对应的list
        if(searchListElement.type === type) {
            // 取出对应的list的第一项的type
            const activeType = searchListElement.list[0].type
            // 再通过该type寻找对应的input，使其被checked，达到切换type时对应的list会自动勾选
            for (const inputRef of inputRefs.value) {
                if(inputRef.id === activeType) {
                    inputRef.checked = true
                    formAction.value = inputRef.value
                    inputPlaceholder.value = inputRef.getAttribute('data-placeholder')
                    break
                }
            }
            break
        }
    }
}
const handleInputClick = (e) => {
    const target = e.target
    formAction.value = target.value
    inputPlaceholder.value = target.getAttribute('data-placeholder')
}

const activeAnchor = () => {
    /**
     * 将anchor移动到点击的tab上
     */
    const tabList = tabListRef.value
    // 找到激活的active
    const activeLi = tabList.querySelector(".active")

    const anchor = anchorRef.value
    // 找到激活的actvie下的span元素
    const span = activeLi.firstElementChild

    // 获取active的偏移量
    const left = activeLi.offsetLeft
    // 获取span的width，其中包括content、padding
    const spanWidth = span.getBoundingClientRect().width
    const spanStyle = window.getComputedStyle(span);
    const paddingLeft = parseFloat(spanStyle.paddingLeft);
    const paddingRight = parseFloat(spanStyle.paddingRight);
    // 计算span content的宽度
    const contentWidth = spanWidth - paddingRight - paddingLeft
    // 计算spanleft的偏移量，其中应该left应该加上paddingLeft
    const contentLeft = left + paddingLeft

    anchor.style.left = contentLeft + 'px'
    anchor.style.width = contentWidth + 'px'
}

const carouselText = reactive([
    {
        idx: 1,
        text: '眼宽，看天下景；'
    },
    {
        idx: 2,
        text: '人生似一束鲜花，仔细观赏，才能看到它的美丽；'
    },
    {
        idx: 3,
        text: '海洋接纳每一条河流，不论其大小，所以海洋广才能看到它的美丽；'
    },
    {
        idx: 4,
        text: '没有什么绝对,如果你觉得温暖,我很温暖'
    },
])

const handleFormSubmit = () => {
    /*
    点击搜索后打开对应搜索界面
     */
    const action = formRef.value.action
    // 获取输入框内容
    const key = formInputRef.value.value
    if(key === "")
        return false;
    else{
        window.open( action + key, '_blank');
        return false;
    }
}


</script>

<style lang="less" scoped>
.arco-layout-content {
  .top{
    margin-top: -75px;
    padding-top: 90px;
    padding-bottom: 20px;
    .tool-box {
      max-width: 800px;
      margin: 0 auto;

      .search-type {
        position: relative;
        .anchor {
          position: absolute;
          width: 10px;
          height: 4px;
          bottom: 5px;
          left: 50%;
          background: #fff;
          border-radius: 100px;
          transition: .25s;
        }
        ul {
          position: relative;
          text-align: center;

          li {
            position: relative;
            display: inline-block;
            padding: 2px 0;
            color: #fff;
            font-size: 15px;
            cursor: pointer;
            span {
              display: block;
              padding: 10px 20px;
            }
          }

          li:not(.active) {
            opacity: 0.5;
            transition: opacity 0.3s;
          }

          li:after{
            @size: 5px;
            position: absolute;
            bottom: 4.5px;
            left: 50%;
            content: '';
            width: @size;
            height: @size;
            margin-left: -(@size / 2);
            border-radius: (@size / 2);
            background: transparent;
          }

          li:hover{
            opacity: 1 !important;
            transition: opacity 0.3s;
          }
          li:hover:after{
            background: #fff;
            opacity: 1 !important;
            transition: opacity 0.3s;
          }
        }
      }

      .search-input {
        position: relative;
        #search-text {
          width: 100%;
          height: 50px;
          border-radius: 50px;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, .05);
          padding: 9px 20px;
          backdrop-filter: blur(5px);
          background-color: rgba(0, 0, 0, 0.6) !important;
          transition: .3s;
        }
        #submit-btn {
          position: absolute;
          top: 0;
          right: 0;
          margin: 15px 20px;
          background: transparent;
          outline: none;
          border: none;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
        }
      }

      #search-list{
        position: relative;
        text-align: center;
        .search-group{
          display: none;
          padding: 0;
          margin: 0 auto;
          .search-type{
            white-space: nowrap;
            margin: 0;
            overflow: auto;
            li{
              list-style: none;
              display: inline-block;
              label{
                position: relative;
                display: inline-block;
                margin: 0;
                padding: 5px 20px;
                line-height: 31px;
                border-radius: 3px 3px 0 0;
                opacity: .5;
                cursor: pointer;
                color: #fff;
                font-size: 14px;
                font-weight: 400;
                transition: opacity .3s;
              }
            }
          }
          .search-type input:checked+label{
            opacity: 1;
          }
          .search-type input:checked+label:before {
            content: '';
            position: absolute;
            left: 50%;
            top: 1px;
            margin-left: -8px;
            border-width: 8px 8px 0 8px;
            border-style: solid;
            border-color: rgba(0, 0, 0, 0.6) transparent transparent;
          }
        }
        .search-group.s-current {
          display: block;
        }
      }

      .carousel-text{
        display: flex;
        width: 600px;
        margin: 10px auto;
        align-items: center;
        border-radius: 50px;
        background: rgba(0, 0, 0, 0.6);
        font-size: 0.75rem;
        .icon{
          margin: 0 15px;
          color: white;
          font-size: inherit;
        }
        .arco-carousel{
          flex: 1;
          height: 30px;
          .text{
            display: block;
            line-height: 30px;
            color: #fff;
            font-size: inherit;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .close{
          width: 20px;
          color: white;
          opacity: 0.5;
          transition: linear .1s;
          cursor: pointer;
        }
      }
      .carousel-text:hover .close{
        opacity: 1;
      }
    }

    //background-image: linear-gradient(45deg, #17EAD9 0%, #A7F995 50%, #F9F871 100%);
    background-image: linear-gradient(45deg, #C93CE7 0%, #30a1e3 25%, #00BB9D 75%, #5CBAB3 100%);
    background-size: 400%;
    background-position: 0 100%;
    animation: gradient 7.5s ease-in-out infinite;
    @keyframes gradient {
      50% {
        background-position: 100% 0
      }
    }
  }
  .main-content{
    background: #f9f9f9;
    padding: 0 30px;
    .title{
      margin: 1.5rem 0;
      font-weight: 500;
      font-size: 1.25rem;
      color: #555;
      font-family: "SF Pro SC","SF Pro Text","SF Pro Icons",PingFang SC,Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif;
      a{
        color: #555;
        margin-left: 10px;
      }
    }
  }
}
</style>