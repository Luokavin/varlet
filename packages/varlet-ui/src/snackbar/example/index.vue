<script setup>
import Snackbar from '../index'
import VarButton from '../../button'
import VarSpace from '../../space'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import dark from '../../themes/dark'
import { reactive, toRefs } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

const shows = reactive({
  show1: false,
  show2: false,
  show3: false,
  show4: false,
  show9: false,
})

const VarSnackbar = Snackbar.Component

const { show1, show2, show3, show4, show9 } = toRefs(shows)

const changeValue = (type) => {
  shows[type] = !shows[type]
}

const create = (type) => {
  const text = type === 'loading' ? pack.value.wait : pack.value.text
  const snackbar = Snackbar[type](text)

  if (type === 'loading') {
    setTimeout(() => {
      snackbar.clear()
      Snackbar.success(pack.value.loaded)
    }, 2000)
  }
}

const createSnackbar = (type) => {
  if (type === 'time') {
    Snackbar({
      content: pack.value.text,
      duration: 1000,
    })
  }

  if (type === 'position') {
    Snackbar({
      content: pack.value.text,
      position: 'bottom',
    })
  }

  if (!type) {
    Snackbar(pack.value.text)
  }
}

const openMultiple = () => {
  Snackbar.allowMultiple(true)

  const snackbar1 = Snackbar('Snackbar 1')
  Snackbar.success('Snackbar 2')

  setTimeout(() => {
    snackbar1.clear()
  }, 1000)
}

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <app-type>{{ pack.componentCall }}</app-type>
  <var-space direction="column" :size="['3vw', '4vw']">
    <var-button type="primary" block @click="changeValue('show1')">{{ pack.basicUsage }}</var-button>
    <var-button type="primary" block @click="changeValue('show3')">{{ pack.multiLine }}</var-button>
    <var-button type="primary" block @click="changeValue('show2')">{{ pack.bottomDisplay }}</var-button>
    <var-button type="primary" block @click="changeValue('show4')">{{ pack.hiddenTime }}</var-button>
    <var-button type="primary" block @click="changeValue('show9')">{{ pack.forbidClick }}</var-button>
  </var-space>

  <app-type>{{ pack.functionCall }}</app-type>
  <var-space direction="column" :size="['3vw', '4vw']">
    <var-button type="warning" block @click="createSnackbar()">{{ pack.basicUsage }}</var-button>
    <var-button type="warning" block @click="createSnackbar('time')">{{ pack.hiddenTime }}</var-button>
    <var-button type="warning" block @click="createSnackbar('position')">{{ pack.bottomDisplay }}</var-button>
  </var-space>

  <app-type>{{ pack.type }}</app-type>
  <var-space direction="column" :size="['3vw', '4vw']">
    <var-button type="success" block @click="create('success')">{{ pack.success }}</var-button>
    <var-button type="warning" block @click="create('warning')">{{ pack.warning }}</var-button>
    <var-button type="info" block @click="create('info')">{{ pack.info }}</var-button>
    <var-button type="danger" block @click="create('error')">{{ pack.error }}</var-button>
    <var-button type="primary" block @click="create('loading')">{{ pack.loading }}</var-button>
  </var-space>

  <app-type>{{ pack.multiple }}</app-type>
  <var-button type="primary" block @click="openMultiple">{{ pack.multiple }}</var-button>

  <div class="snackbar-demo">
    <var-snackbar v-model:show="show1">
      {{ pack.text }}
    </var-snackbar>

    <var-snackbar v-model:show="show2" position="bottom">
      {{ pack.text }}
      <template #action>
        <var-button type="primary" @click="show2 = false">{{ pack.close }}</var-button>
      </template>
    </var-snackbar>

    <var-snackbar v-model:show="show3" :vertical="true">
      {{ pack.text }}
      <template #action>
        <var-button type="primary" @click="show3 = false">{{ pack.close }}</var-button>
      </template>
    </var-snackbar>

    <var-snackbar v-model:show="show4" :duration="1000">
      {{ pack.text }}
    </var-snackbar>

    <var-snackbar v-model:show="show9" :forbid-click="true">
      {{ pack.text }}
    </var-snackbar>
  </div>
</template>
