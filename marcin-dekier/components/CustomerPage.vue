<template>
  <div
  @mouseover="mouseOndiv()"
  @mouseleave="mouseOutDiv()"
  id="customerPage"
  class="CustomerPage__main-container">
    <div>
      <draggable v-model="list2" class="CustomerPage__boxes-container" :options="{group:'people', ghostClass: '.CustomerPage__boxes-containerx', animation: 150}">
        <div
        class="CustomerPage__box"
        :options="{ghostClass: 'CustomerPage__box-ghost'}"
        v-for="(element, index) in list2" :key="index">
          {{element.name}}
        </div>
        <div class="CustomerPage__placeholder-container">
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerPage',

  data () {
    return {
      list2: []
    }
  },

  methods: {
    mouseOndiv () {
      this.$store.dispatch('dashboard/mouseOnDiv')
    },
    mouseOutDiv () {
      this.$store.dispatch('dashboard/mouseOutDiv')
    }
  }
}
</script>

<style lang="scss">
  @import 'CustomerPage';
</style>
