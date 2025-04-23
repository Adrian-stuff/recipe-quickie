import type { LayoutServerLoad } from './$types';

type RouteTitles = {
  [key: string]: string;

};
export const load: LayoutServerLoad = async ({ url }) => {
  const title: RouteTitles = { "/": "Recipe Quickie", "/about": "About Recipe Quickie", "/create": "Create Recipe" };
  const path = url.pathname;
  const isRecipe = path.startsWith("/recipes");
  if (isRecipe) {
    const recipeId = path.split("/").pop();
    const res = await fetch('http://127.0.0.1:8080/recipes/' + recipeId);
    const data = await res.json();

    return {
      title: data[0].title || "Not Found",
    };
  }

  return {
    title: title[path] || "Recipe Quickie",
  };
};