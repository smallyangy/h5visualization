<template>
    <div>123</div>
    <Banner
        :obj="{
            src: 'https://imgcdn.huanjutang.com/file/2021/05/07/36f9c8fe8b8496fdb5d051feaa5367fc.png',
            link: 'https://www.google.com'
        }"
    />

    <Form
        :obj="{
            btnText: '按钮123',
            action: '/api/postform'
        }"
    />
</template>

<script>
    import { defineComponent } from 'vue';
    import Banner from '@/components/banner/index.vue';
    import Form from '@/components/form/index.vue';

    export default defineComponent({
        components: {
            Banner,
            Form,
        },
    });
</script>

<style></style>
