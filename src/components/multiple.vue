<template>
    <div class="select">
        <div v-for="(item, index) in data" :key="index">
            <div v-if="item.tiku_info.dati_type === '2'" class="question">
                <p class="question-title">{{item.id}}.{{item.tiku_info.ask_title}}</p>
                <p class="question-option"  v-for="(item, index) in item.option_info" :key="index">
                    <label :class="{'selected': item.istrue === '1'}">{{item.title}}</label>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'decide',
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('../../../static/data.json').then(result => {
        this.data = result.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
