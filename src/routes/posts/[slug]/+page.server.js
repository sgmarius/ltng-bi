import { supabase } from "$lib/db";

export async function load({params}) {
  const { data } = await supabase
    .from("post")
    .select()
    .eq("slug", params.slug)
    .limit(1);
    
  return {
    post: data ?? [],
  };
}