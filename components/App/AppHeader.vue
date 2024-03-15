<template>
    <div class="header">
        <nav>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
        </nav>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-around;
    padding: 0 2rem;
}
.name {
    font-family: 'Tangerine';
    font-size: 3rem;
    margin: 0;
}
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