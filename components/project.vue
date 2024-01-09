<template>
    <div class="project">
        <div class="row">
            <p><span v-for="tech in data.technologies">{{ tech }}</span></p>
            <a href=""></a>
        </div>
        <div class="content-row">
            <h2>
                {{ data.title }}
            </h2>
            <img :src="`http://172.20.10.2:3000/api/img/${data.img}`" alt="">
        </div>
        <div class="row">
            <p>{{data.describtion}}</p>
            <ul>
                <li><a :href="data.links.repo">Repo</a></li>
                <li><a :href="data.links.preview">Preview</a></li>
                <li><a :href="data.links.figma">Design</a></li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
type project = {
    title: string,
    describtion: string,
    img: string,
    technologies: Array<string>,
    links: {
        repo: string,
        preview: string,
        figma: string
    }
}
defineProps<{
    data: project
}>()
</script>
<style lang="scss" src="../styling/components.scss"></style>