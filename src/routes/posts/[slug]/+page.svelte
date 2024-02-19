<script>
    export let data;
</script>

<div class="posts">

    <!-- A single blog post -->
    <section class="post">
        <header class="post-header">
            <h2 class="post-title">{data.post[0].title}</h2>

        </header>

        <div class="post-description">
            <p>
                {data.post[0].body}
            </p>
        </div>
    </section>
</div>
