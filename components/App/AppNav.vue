<script setup lang="ts">
const viewport = useViewport()
const hide = ref(true)


function showNav() {
    hide.value = !hide.value
}

const isHidden = computed(() => {
    if (viewport.isLessThan('tablet')) {
        return hide.value
    }
    return false
})

</script>

<template>
    <div class="nav-container">
        <button v-if="viewport.isLessThan('tablet')" class="hamburger" @click="showNav">
            menu
        </button>
        <nav class="app-nav" :class="{ 'hide': isHidden }">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
        </nav>
    </div>
</template>

<style scoped>
.hide {
    display: none;
}
</style>