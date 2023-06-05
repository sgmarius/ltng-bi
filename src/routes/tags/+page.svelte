<script>
    export let data;

</script>
<div class="pure-g content">
    {#each data.tags as tag} 
        <br>
            <a class="post-category" href={`/posts?tag=${tag}`}>{tag}</a>
        <br>   
    {/each}
</div>
