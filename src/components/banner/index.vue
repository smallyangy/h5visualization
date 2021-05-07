<template>
    <a :href="obj.link">
        <img
            :src="obj.src"
            alt="图片"
        >
    </a>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Banner',
        props: {
            obj: {
                type: Object,
                default: () => ({
                    src: '',
                    link: '',
                }),
            },
        },
        setup() {},
    });
</script>

<style lang="scss">
a {
    display: block;
    width: 100%;
}
</style>
