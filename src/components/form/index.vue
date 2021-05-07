<template>
    <div>
        <button @click="handleSubmit">
            {{ obj.btnText }}
        </button>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        props: {
            obj: {
                type: Object,
                default: () => ({
                    btnText: '',
                    action: '',
                }),
            },
        },
        setup(props) {
            const handleSubmit = () => {
                console.log(props.obj.action);
            };

            return {
                handleSubmit,
            };
        },
    });
</script>

<style>

</style>
