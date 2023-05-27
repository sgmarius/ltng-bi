<script>
    export let data;
</script>
<div>
    {#each data.posts as post (post.slug)}
            <section class="post">
                <header class="post-header">
                    <h5 class="post-title">
                        <span class="ltng-bi-bolt">⚡</span>
                        <a href={`/posts/${post.slug}`}>{post.title}</a>
                    </h5>
                    <p class="post-meta">
                        Under
                        {#each post.tags as tag}
                            <a class="post-category" href="#">{tag}</a>
                        {/each}
                        <br>
                        <br>
                        Created on {post.createdon},
                        by <a href="#">{post.createdby}</a>
                    </p>
                </header>
               
                <div class="post-description">
                    <p>
                        {post.shortdesc}
                    </p>
                </div>
            </section>
    {/each}
</div>
