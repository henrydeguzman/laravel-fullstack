<template>
    <div>
        <h1 ref="myref">Hook tutorial</h1>
        <p>My name is: {{name}}</p>
    </div>
</template>
<script>
// Local memory of this template
export default {
    data(){
        return {
            name: 'Henry De Guzman'
        }
    },

    created(){
        // call mostly initial data from it...
        console.log('data and other function is available but not html', this.name);
    },

    mounted() {
        // can get element from html tags
        console.log(this.$refs.myref);
    },
}
</script>
