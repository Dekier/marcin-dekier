<template>
  <div class="Dashboard__main-container">
    <div
    :class="{'Dashboard__title-container--active': section === 'MenuUp', 'Dashboard__title-container--show': sectionStyle === 'MenuUp'}"
    class="Dashboard__title-container">
      <div @click="titleActive('MenuUp')">
        <svg
        v-if="section === 'MenuUp'"
        viewBox="0 0 330 330" width="15" height="15">
          <g fill="#32c5f6">
            <path d="M165 0C74.019 0 0 74.02 0 165.001 0 255.982 74.019 330 165 330s165-74.018 165-164.999S255.981 0 165 0zm0 300c-74.44 0-135-60.56-135-134.999S90.56 30 165 30s135 60.562 135 135.001C300 239.44 239.439 300 165 300z"/>
            <path d="M164.998 70c-11.026 0-19.996 8.976-19.996 20.009 0 11.023 8.97 19.991 19.996 19.991 11.026 0 19.996-8.968 19.996-19.991 0-11.033-8.97-20.009-19.996-20.009zM165 140c-8.284 0-15 6.716-15 15v90c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15z"/>
          </g>
        </svg>
        <span v-if="section !== 'MenuUp'">
          01.
        </span>
        Menu górne
      </div>
      <div
      :class="{'Dashboard__boxes-item--active': sectionBox === 'MenuUp'}"
      class="Dashboard__boxes-item">
        <div class="Dashboard__boxes-container">
          <div class="Dashboard__box">
          </div>
          <div class="Dashboard__box">
          </div>
          <div class="Dashboard__box">
          </div>
          <div class="Dashboard__box">
          </div>
        </div>
      </div>
    </div>
    <div
    :class="{'Dashboard__title-container--active': section === 'Boxes', 'Dashboard__title-container--show': sectionStyle === 'Boxes'}"
    class="Dashboard__title-container">
      <div @click="titleActive('Boxes')">
        <svg
        v-if="section === 'Boxes'"
        viewBox="0 0 330 330" width="15" height="15">
          <g fill="#32c5f6">
            <path d="M165 0C74.019 0 0 74.02 0 165.001 0 255.982 74.019 330 165 330s165-74.018 165-164.999S255.981 0 165 0zm0 300c-74.44 0-135-60.56-135-134.999S90.56 30 165 30s135 60.562 135 135.001C300 239.44 239.439 300 165 300z"/>
            <path d="M164.998 70c-11.026 0-19.996 8.976-19.996 20.009 0 11.023 8.97 19.991 19.996 19.991 11.026 0 19.996-8.968 19.996-19.991 0-11.033-8.97-20.009-19.996-20.009zM165 140c-8.284 0-15 6.716-15 15v90c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15z"/>
          </g>
        </svg>
        <span v-if="section !== 'Boxes'">
          02.
        </span>
        Pudełka
      </div>
      <div
      :class="{'Dashboard__boxes-item--active': sectionBox === 'Boxes'}"
      class="Dashboard__boxes-item">
        <draggable
        :list="list"
        return :move="onMove"
        class="Dashboard__boxes-container"
        :options="{group:{ name:'people',  pull:'clone', put:false }, sort: false, ghostClass: '.Dashboard__box-ghost-customer', animation: 150}">
          <div
          class="Dashboard__box"
          v-for="(element, index) in list" :key="index">{{element.name}}</div>
        </draggable>
      </div>
    </div>
    <div
    :class="{'Dashboard__title-container--active': section === 'BoxesImages', 'Dashboard__title-container--show': sectionStyle === 'BoxesImages'}"
    class="Dashboard__title-container">
      <div @click="titleActive('BoxesImages')">
        <svg
        v-if="section === 'BoxesImages'"
        viewBox="0 0 330 330" width="15" height="15">
          <g fill="#32c5f6">
            <path d="M165 0C74.019 0 0 74.02 0 165.001 0 255.982 74.019 330 165 330s165-74.018 165-164.999S255.981 0 165 0zm0 300c-74.44 0-135-60.56-135-134.999S90.56 30 165 30s135 60.562 135 135.001C300 239.44 239.439 300 165 300z"/>
            <path d="M164.998 70c-11.026 0-19.996 8.976-19.996 20.009 0 11.023 8.97 19.991 19.996 19.991 11.026 0 19.996-8.968 19.996-19.991 0-11.033-8.97-20.009-19.996-20.009zM165 140c-8.284 0-15 6.716-15 15v90c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15z"/>
          </g>
        </svg>
        <span v-if="section !== 'BoxesImages'">
          03.
        </span>
        Pudełka z zdjęciami
      </div>
      <div
      :class="{'Dashboard__boxes-item--active': sectionBox === 'BoxesImages'}"
      class="Dashboard__boxes-item">
        <draggable
        :list="list"
        class="Dashboard__boxes-container"
        :options="{group:{ name:'people',  pull:'clone', put:false }}">
          <div
          class="Dashboard__box"
          v-for="(element, index) in list" :key="index">{{element.name}}</div>
        </draggable>
      </div>
    </div>
    <div
    :class="{'Dashboard__title-container--active': section === 'MenuDown', 'Dashboard__title-container--show': sectionStyle === 'MenuDown'}"
    class="Dashboard__title-container">
      <div @click="titleActive('MenuDown')">
        <svg
        v-if="section === 'MenuDown'"
        viewBox="0 0 330 330" width="15" height="15">
          <g fill="#32c5f6">
            <path d="M165 0C74.019 0 0 74.02 0 165.001 0 255.982 74.019 330 165 330s165-74.018 165-164.999S255.981 0 165 0zm0 300c-74.44 0-135-60.56-135-134.999S90.56 30 165 30s135 60.562 135 135.001C300 239.44 239.439 300 165 300z"/>
            <path d="M164.998 70c-11.026 0-19.996 8.976-19.996 20.009 0 11.023 8.97 19.991 19.996 19.991 11.026 0 19.996-8.968 19.996-19.991 0-11.033-8.97-20.009-19.996-20.009zM165 140c-8.284 0-15 6.716-15 15v90c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15z"/>
          </g>
        </svg>
        <span v-if="section !== 'MenuDown'">
          04.
        </span>
        Menu Stopki
      </div>
      <div
      :class="{'Dashboard__boxes-item--active': sectionBox === 'MenuDown'}"
      class="Dashboard__boxes-item">
        <div class="Dashboard__boxes-container">
          <div class="Dashboard__box">
          </div>
          <div class="Dashboard__box">
          </div>
          <div class="Dashboard__box">
          </div>
          <div class="Dashboard__box">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',

  data () {
    return {
      section: '',
      sectionBox: '',
      sectionStyle: '',
      list:[
        {name:"John"},
        {name:"Lol"},
        {name:"Jean"},
        {name:"Marcin"}
      ],
      mousePositionOnCustomerList: false
    }
  },

  computed: {
    switchGhostClass () {
      if (this.mousePositionOnCustomerList) {
        return 'Dashboard__box-ghost-customer'
      } else {
        return 'Dashboard__box-ghost'
      }
    },
  },

  methods: {
    onMove (event, oEvent) {
      if (event.to.className.toString() === 'CustomerPage__boxes-container') {
        this.mousePositionOnCustomerList = true
      } else {
        this.mousePositionOnCustomerList = false
      }
    },
    titleActive (title) {
      if (title === this.section) {
        this.sectionBox = ''
        window.setTimeout(() => {
          this.section = ''
        }, 300)
        window.setTimeout(() => {
          this.sectionStyle = ''
        }, 301)
      } else {
        if (this.section === '') {
          this.section = title
          window.setTimeout(() => {
            this.sectionBox = title
          }, 300)
          window.setTimeout(() => {
            this.sectionStyle = title
          }, 299)
        } else {
          this.sectionBox = ''
          window.setTimeout(() => {
            this.section = ''
          }, 300)
          window.setTimeout(() => {
            this.sectionStyle = ''
          }, 301)
          window.setTimeout(() => {
            this.section = title
            window.setTimeout(() => {
              this.sectionBox = title
            }, 300)
            window.setTimeout(() => {
              this.sectionStyle = title
            }, 299)
          }, 500)
        }
      }
    }
  }
}
</script>

<style lang="scss">
  @import 'Dashboard';
</style>

