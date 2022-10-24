<template>
   <h2 class="section-title">{{subtitle}}</h2>
</template>

<script>
export default {
    name: 'SubTitle',
    props:{
        subtitle: String
    }
}
</script>

<style scoped lang="scss">
.section-title {
    font-size: 50px;
}

</style>