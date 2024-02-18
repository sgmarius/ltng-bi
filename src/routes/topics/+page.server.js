import { supabase } from "$lib/db";

export async function load() {
  const { data } = await supabase
    .from("topic")
    .select(
      `slug,
      topic,
      post!left(slug, title, sneak_peek)`
    );

  return {
    topics: data ?? [],
  };
}