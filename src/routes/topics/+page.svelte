<script>
    export let data;
</script>
<div class="pure-g content">
    {#each data.topics as topic} 
        <br>
            <a class="post-category" href={`/posts?topic=${topic.slug}`}>{topic.topic}</a>
        <br>
    {/each}
</div>
