<template>
    <div class="header">
        <p class="name">Michael Dominguez</p>
        <nav>
            <li>Home</li>
            <li>About</li>
        </nav>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
}
.name {
    font-family: 'Tangerine' cursive, serif ;
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