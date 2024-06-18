<script setup>
const links = [
    {
        title: 'github',
        href: 'https://github.com/MikeD579',
        img: '',
        alt: 'Octocat'
    },
    {
        title: 'spotify',
        href: 'https://open.spotify.com/user/1274606569',
        img: '',
        alt: 'spotify circle'
    },
]
</script>

<template>
    <div>
        <ul>
            <li v-for="link in links" class="icons">
                <a :href="link.href">
                    <img :src="link.img" :alt="link.alt">
                    <div>
                        {{link.title}}
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>