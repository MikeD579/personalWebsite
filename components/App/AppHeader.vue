<template>
    <div class="header">
        <nav>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
        </nav>
        <div>
            <button
                @click="toggleColorMode()"
            >
            <ColorScheme placeholder="loading" tag="span" class="cursive">
                <a class="cursive">{{ $colorMode.value }}</a>
            </ColorScheme>
            </button>
        </div>
    
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

function toggleColorMode() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    
}

li {
    list-style-type: none;
    margin-right: 1rem;
}
</style>