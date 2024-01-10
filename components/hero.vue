<template>
    <div class="hero-section">
        <span class="divider"><img :src="divider" alt=""></span>

        <div class="content-wrap">
            <img src="public/assets/moaaz.png" />
            <div class="text-wrap">
                <h1>
                    <span>Hello, I’m Moaaz</span> - an
                    Creative Front-end Developer.
                </h1>
                <p>
                    Passioned in building UI’s using technologies such as ReactJs, Sass, Typescript and enhancing my design
                    sense to present user best experince.</p>
            </div>
        </div>
        <span class="divider"><img :src="divider" alt=""></span>
        <span class="vector"><img src="../public/assets/Vector01.svg" alt=""></span>

    </div>
</template>
<script>
import divider from 'public/assets/divider.svg';
</script>
<style lang="scss" src="../styling/components.scss"></style>
