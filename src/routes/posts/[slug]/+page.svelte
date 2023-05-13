<script>
    export let data;
</script>

<div class="posts">

    <!-- A single blog post -->
    <section class="post">
        <header class="post-header">
            <h2 class="post-title">{data.title}</h2>

            <!-- <p class="post-meta">
                By <a href="#" class="post-author">Tilo Mitra</a> under <a class="post-category post-category-design" href="#">CSS</a> <a class="post-category post-category-pure" href="#">Pure</a>
            </p> -->
        </header>

        <div class="post-description">
            <p>
                {data.content}
            </p>
        </div>
    </section>
</div>
