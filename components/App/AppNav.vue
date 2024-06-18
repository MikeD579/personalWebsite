<script setup lang="ts">
const viewport = useViewport()
const hide = ref(true)

const floatMenu = computed(() => {
    return {
        'absolute right-0 z-10': !viewport.isLessThan('tablet')
    }
})

function showNav() {
    hide.value = !hide.value
}
</script>

<template>
    <div class="relative task-bar">
        <div class="flex justify-between py-1 px-4">
            <button>
                <img src="/LOGO.svg" />
            </button>
            <button class="px-2 text-white" @click="showNav">
                ^
            </button>

        </div>
        <div class="menu" :class="floatMenu">
            <nav v-if="!hide" class="flex flex-col gap-3 items-center px-3 py-1"
                :class="{ 'items-start': !viewport.isLessThan('tablet') }">
                <li><a href="#home" class="text-white">Home</a></li>
                <li><a href="#about" class="text-white">About</a></li>
            </nav>
        </div>
    </div>
</template>

<style scoped></style>