import { unstable_noStore as noStore } from "next/cache";

export async function fetchProductsByCategory(category) {
  // noStore();
  try {
    const res = await fetch(
      `http://localhost:3001/product/category/${category}`
    );

    if (!res.ok) {
      console.log(res);
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}

export async function fetchProductById(id) {
  noStore();
  await new Promise((resolve) => setTimeout(resolve, 5000));
  try {
    const res = await fetch(`http://localhost:3001/product/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function fetchFeaturedProducts(id) {
  noStore();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const res = await fetch(
      `http://localhost:3001/product/random?excludeId=${id}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
