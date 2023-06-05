import { error } from '@sveltejs/kit';
import { posts } from '$lib/data/posts';
 
export function load({params}) {
	var allTags = [];
	posts.forEach(post => {
		allTags.push(post.tags)
	});
	const tagSet = new Set(allTags.flat().sort());
	const tags = Array.from(tagSet)
	
	// .forEach(tag => {
	// 	{tag: allTags.filter((_) => {_ == tag}).length}
	// });

	return {tags}
}