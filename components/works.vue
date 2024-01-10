<template>
    <div class="projects-section">
        <span class="divider"><img src="public/assets/divider.svg" alt=""></span>

        <h1>Selected Projects</h1>

        <div class="projects-wrap">
            <Project v-for="dato in dataao" :data="dato" />
        </div> 
        <span class="divider"><img src="public/assets/divider.svg" alt=""></span>
    </div>
</template>
<script lang="ts">

type respon = {
    results: Array<any>,
}
export default {
    data() {
        return { dataao: {} };
    },
    mounted() {
        fetch("http://172.20.10.2:3000/api/projects-list")
            .then(async response => {
                let thing: respon, otherThing;
                otherThing = await response.json();
                thing = otherThing.results;
                this.dataao = thing;
            });

    }
}
</script>
<style lang="scss" src="../styling/components.scss"></style>