import { error } from '@sveltejs/kit';
import { posts } from '$lib/data/posts';
 
export function load({params, url}) {
	const tag = url.searchParams.get('tag')
	const postList = posts.filter(
		(post) => tag ? post.tags.includes(tag): true
	);
	return { postList }
}
