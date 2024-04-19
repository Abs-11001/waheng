<template>
    <div class="card">
        <div class="icon">
            <a-image
              width="40"
              height="40"
              fit="contain"
              :src="avatar"
            />
        </div>
        <div class="info">
            <div class="title">GitHub</div>
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

    }
    .info {
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
  .card:hover .title{
    color: red;
  }
  .card:hover .arrow{
    opacity: 1;
  }
</style>