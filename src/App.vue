<template>
  <div id="app">
      <div class="header">
            <div class="tab" :class="{active: currentTab==='singleSelect'}" @click="toggleTab('singleSelect')">选择题</div>
            <div class="tab" :class="{active: currentTab==='multiple'}" @click="toggleTab('multiple')">多选题</div>
            <div class="tab" :class="{active: currentTab==='decide'}" @click="toggleTab('decide')">判断题</div>
      </div>
      <multiple class="content" :is="currentTab" keep-alive ></multiple>
  </div>
</template>

<script>
import singleSelect from '@/components/single-select'
import multiple from '@/components/multiple'
import decide from '@/components/decide'
export default {
  name: 'App',
  data () {
    return {
      currentTab: 'multiple'
    }
  },
  components: {
    singleSelect,
    multiple,
    decide
  },
  methods: {
    toggleTab (tab) {
      this.currentTab = tab
    }
  }
}
</script>
<style lang="scss" scoped>
    #app {
        width: 100%;
        background: #beceeb;
        .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            height: 50px;
            line-height: 50px;
            background: #ffffff;
        }
        .tab {
            display: inline-block;
            width: 33%;
            text-align: center;
        }
        .active {
            color: red;
            background: aquamarine;
        }
        .content {
            margin-top: 50px;
        }
    }
</style>
