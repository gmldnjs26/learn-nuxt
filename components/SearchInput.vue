<template>
  <div>
    <input type="text" :value="value" @input="$emit('input', $event.target.value)" />
    <button @click="$emit('search')">search</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      // v-model로 엮어있기때문에 value로 해야한다.
      type: String,
      default: () => '',
    },
  },
}
</script>

<style></style>
