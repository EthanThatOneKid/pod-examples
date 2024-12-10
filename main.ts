import { PrintfulClient } from "printful-sdk-js-v2";

if (import.meta.main) {
  const client = new PrintfulClient({
    TOKEN: Deno.env.get("PRINTFUL_TOKEN"),
  });

  const products = await client.catalogV2.getProducts();
  await Deno.writeTextFile("products.json", JSON.stringify(products, null, 2));
}
