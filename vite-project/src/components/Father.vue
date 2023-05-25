<template>
    <div>
        <h3>{{ modelValue }}</h3>
        <hr>
        <Son v-model:name="modelValue.name"/>
        <br><hr>
        <Son2 v-model="modelValue"/>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Son from './Son.vue';
import Son2 from './Son2.vue';

const modelValue = ref({
    name: 'xxx',
    age: 33
})
</script>
<style lang="">
    
</style>