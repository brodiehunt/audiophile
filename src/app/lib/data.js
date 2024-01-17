import { unstable_noStore as noStore } from "next/cache";

export async function fetchProductsByCategory(category) {
  // throw new Error("Failed to fetch data");

  noStore();
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(
      `http://localhost:3001/product/category/${category}`
    );

    if (!res.ok) {
      console.log(res);
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    return error;
  }
}
