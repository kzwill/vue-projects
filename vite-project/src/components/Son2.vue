<template>
    <span>这是子组件Son2.vue</span>
    <br>
       son2: <input type="text" v-model="_modelValue.name">
    <br>
       son2: <input type="text" v-model="_modelValue.age">
</template>
<script setup lang="ts">
import { useVModel } from '../hooks/useVModel';

const props = defineProps({
    modelValue: Object
})
const emit = defineEmits(['update:modelValue'])
const _modelValue = useVModel(props, 'modelValue', emit)
</script>
<style lang="">
    
</style>