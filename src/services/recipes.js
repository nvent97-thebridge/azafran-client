// src/services/recipes.js

export async function fetchUserRecipes(token) {
  const res = await fetch("http://localhost:8080/recipes/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to load recipes (${res.status})`);
  }
  const { recipes } = await res.json();
  return recipes;
}
