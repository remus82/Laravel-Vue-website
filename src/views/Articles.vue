<script>
    import Article from './Article.vue';

        export default{
            name: "Articles", 
            
             components: {
                Article,
              },
        }
</script>
<template>
     <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Article></Article>
        <Article></Article>
        <Article></Article>
    </div>
        
</template>
