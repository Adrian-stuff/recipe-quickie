import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const res = await fetch('http://127.0.0.1:8080/recipes/' + params.recipe);
  const data = await res.json();
  return {
    recipeId: params.recipe,
    data: data[0],
  }

  error(404, 'Not found');
};