<template>
    <div class="header">
        <a href="#" class="name">Michael Dominguez</a>
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