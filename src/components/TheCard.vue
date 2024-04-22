<template>
    <div class="card">
        <div class="icon">
            <a-image
              width="40"
              height="40"
              fit="contain"
              show-loader
              :src="avatar"
            />
        </div>
        <div class="info">
            <div class="title" data-hover="GitHubGitHubGitHubGitHub">GitHubGitHubGitHubGitHub</div>
            <div class="des">全球最大同性交友网站</div>
        </div>
        <div class="arrow">
            <icon-right style="color: #6c757d"/>
        </div>
    </div>
</template>

<script setup>
const avatar = new URL('../assets/github.png', import.meta.url).href
</script>

<style lang="less" scoped>
  .card{
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: .938rem;
    margin-bottom: 1.5rem;
    background: #fff;
    transition-property: all;
    box-shadow: 0 0 20px -5px rgba(158,158,158,.2);
    transition: linear .1s;
    .icon {
      .arco-image{
        opacity: .85;
        transition: opacity .35s,transform .35s;
      }
    }
    .info {
      position: relative;
      flex: 1;
      margin-left: 10px;
      overflow: hidden;
      cursor: pointer;
      .title{
        padding-bottom: 5px;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: .3s all
      }
      .title:before {
        background-image: linear-gradient(to right,#026abd,#4caf50);
        -webkit-background-clip: text;
        color: transparent;
        content: attr(data-hover);
        position: absolute;
        opacity: 0;
        transform: scale(1.1) translateX(10px) translateY(-10px) rotate(4deg);
        -webkit-transition: -webkit-transform .3s,opacity .3s;
        -moz-transition: -moz-transform .3s,opacity .3s;
        transition:transform .3s,opacity .3s;
        pointer-events: none
      }
      .des{
        font-size: .75rem;
        color: #6c757d;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .arrow{
      border: 1px solid #6c757d;
      border-radius: 50%;
      opacity: 0.7;
      transition: linear .1s;
    }
  }
  .card:hover{
    box-shadow:0 26px 40px -24px rgba(0,36,100,.3);
    transform: translateY(-4px);
  }
  .card:hover .arco-image{
    opacity: 1;
    transform: scale3d(1.2,1.2,1);
  }
  .card:hover .title{
    color: transparent;
  }
  .card:hover .title:before{
    transform: scale(1) translateX(0) translateY(0) rotate(0);
    opacity: 1
  }
  .card:hover .arrow{
    opacity: 1;
  }
</style>