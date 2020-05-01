<template>
    <div>
        <toolbar></toolbar>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Toolbar from './Toolbar';
    import AppFooter from './AppFooter';
    export default {
        name: 'AppHome',
        components: {
            Toolbar,
            AppFooter
        },
    }
</script>

<style lang="scss" scoped>

</style>
