<template>
  <div class="example">
    <img alt="Vue logo" src="../assets/logo.png">
    <BasicExample/>
  </div>
</template>

<script>
// @ is an alias to /src
import BasicExample from '@/components/BasicExample.vue'

export default {
  name: 'Example',
  components: {
    BasicExample,
  },
}
</script>
