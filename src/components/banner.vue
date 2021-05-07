<template>
    <div>
        <a :href="obj.link">
            <img
                :src="obj.src"
                alt="图片"
                width="100%"
            >
        </a>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Banner',
        props: {
            obj: {
                type: Object,
                default: () => ({
                    link: '',
                    src: '',
                }),
            },
        },
        setup() {},
    });
</script>

<style></style>
