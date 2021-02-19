<template>
  <div class="basic-example">
    <h1>Example</h1>
    <h3>someRef: {{ someRef }} </h3>
    <h3>someReactive: {{ someReactive.test }} </h3>
  </div>
</template>

<script>
import { value, ref, reactive, computed, watch, onMounted } from 'vue'

export default {
  name: 'BasicExample',
  components: {
  },
  setup() {
    // 透過 ref & reactive 包裝變數, 讓 vue 監聽變動
    const someRef = ref('defaultRef')
    // reactive 只接受 陣列|物件
    const someReactive = reactive({
      test: 'defaultReactive',
    })

    // ref => 需要使用 .value 取得數值
    const someComputed = computed(() => `現在的數值${someRef.value}`)

    // watch
    watch(() => someRef, (val) => {
      console.log(`現在的數值${val}`)
    }, { deep: true })

    // 常用生命週期
    onMounted(() => { })

    return {
      someRef,
      someReactive,
    }
  },
}
</script>
