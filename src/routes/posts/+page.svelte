<script>
    export let data;
</script>
<div>
    {#each data.postList as post (post.slug)}
            <section class="post">
                <header class="post-header">
                    <h5 class="post-title">
                        <span class="ltng-bi-bolt">⚡</span>
                        <a href={`/posts/${post.slug}`}>{post.title}</a>
                    </h5>
                </header>
                <div class="post-description">
                    <p>
                        {post.sneak_peek}
                    </p>
                </div>
                <div class="post-meta">
                    Created by {post.user.username} on {post.created_at}
                </div>
                <br>
                {#if post.topic != []}
                    <p class="post-meta">
                        Under
                        {#each post.topic as topic}
                            <a class="post-category" href={`/posts?topic=${topic.slug}`}>{topic.topic}</a>
                        {/each}
                    </p>
                {/if}
            </section>
    {/each}
</div>
