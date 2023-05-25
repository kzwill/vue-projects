<template>
    <span>这是子组件Son.vue</span>
    <br>
       son: <input type="text" v-model="_modelValue">
    <br>
</template>
<script setup lang="ts">
import { useVModel } from '../hooks/useVModel';

const props = defineProps({
    name: String
})
console.log(props);
const emit = defineEmits(['update:name'])
const _modelValue = useVModel(props, 'name', emit)
</script>
<style lang="">
    
</style>