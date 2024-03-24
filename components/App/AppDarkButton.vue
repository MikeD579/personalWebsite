<script setup lang="ts">
const colorMode = useColorMode()

function toggleColorMode() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
    <div>
        <button
                @click="toggleColorMode()"
            >
            <ColorScheme placeholder="loading" tag="span" class="cursive">
                <a class="cursive" style="font-size: 300%;">{{ $colorMode.value }}</a>
            </ColorScheme>
            </button>
    </div>
</template>