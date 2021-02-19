<template>
  <div class="basic-example">
    <h1>Example</h1>
    <h3>someRef: {{ someRef }} </h3>
    <h3>someComputed: {{ someComputed }}</h3>
    <input v-model="someRef">
    <input @keyup="handleInputKeyUp" :value="someRef">
    <h3>someReactive: {{ someReactive.test }} </h3>
  </div>
</template>

<script>
import { value, ref, reactive, computed, watch, watchEffect, onMounted } from 'vue'

export default {
  name: 'BasicExample',
  components: {
  },
  setup() {
    // 透過 ref & reactive 包裝變數, 讓 vue 監聽變動
    const someRef = ref('defaultRef')
    const otherRef = ref('defaultOtherRef')

    // reactive 只接受 陣列|物件
    const someReactive = reactive({
      test: 'defaultReactive',
    })

    // ref => 需要使用 .value 取得數值
    const someComputed = computed(() => `現在的數值${someRef.value}`)

    // 模擬 v-model
    const handleInputKeyUp = (e) => {
      const currentVal = e.target.value
      someRef.value = currentVal
    }

    // watchEffect 不需要指定監聽誰, 且在元件初始化時會執行一次, 缺點: 取不到變動前的數值
    watchEffect(() => {
      // 只需要此 Function 內有引用到該變數即會觸發
      log({ content: `watchEffect: someRef 當前值為 ${someRef.value}` })
    })

    // watch 監聽數值變動
    watch([someRef, otherRef], ([currentSomeRef, currentOtherRef], [prevSomeRef, prevOtherRef]) => {
      log({ content: `watch: someRef 當前值為 ${currentSomeRef.value}`, color: 33 })
    }, { deep: true })

    // 常用生命週期
    onMounted(() => { })

    function log({ content, color = 36 }) {
      console.log(`\x1b[${color}m%s\x1b[0m`, '======', content)
    }

    return {
      someRef,
      someReactive,
      someComputed,
      handleInputKeyUp,
    }
  },
}
</script>
