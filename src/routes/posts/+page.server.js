import { supabase } from "$lib/db";

export async function load({params, url}) {
  const { data } = await supabase
    .from("post")
    .select(
      `slug,
      created_at,
      user!left(username),
      title,
      sneak_peek,
      topic!left(topic, slug)`
    )
    .eq(
      'topic.slug', url.searchParams.get('topic')
    );
    

  console.log(params.topic);
  return {
    postList: data ?? [],
  };
}