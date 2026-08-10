/**
 * NMO case study — gallery content.
 *
 * This array drives the entire NMO section (main viewer + thumbnail rail,
 * desktop and mobile). To swap in real screenshots:
 *
 *   1. Drop your image files into  src/assets/nmo/
 *   2. Import them at the top of this file, e.g.
 *        import homepage from "../assets/nmo/homepage.png";
 *   3. Replace the matching `image` value below with the import.
 *
 * Reordering, renaming, adding, or removing entries here automatically
 * updates the gallery — no changes needed in the component itself.
 */

import homepage from "../assets/nmo/homepage.png";
import productPage from "../assets/nmo/product-page.png";
import shopifyAdmin from "../assets/nmo/shipping-shopify.png";
import printfulSetup from "../assets/nmo/printful-products.png";
import orderLookup from "../assets/nmo/order-lookup.png";
import collectionPage from "../assets/nmo/shipping-regions.png";

export const nmoCaseStudy = {
  client: "NMO",
  fullName: "Next Move Only",
  summary:
    "I built a complete merchandise operation for Next Move Only, including the Shopify storefront, product catalog, Printful integration, shipping setup, order tracking, and the backend workflow needed to operate the store.\n\nThe store is no longer active, but the build and the systems behind it are documented here.",
  stack: ["Shopify", "Printful", "Track123", "Print-on-demand", "Fulfillment"],
};

export const nmoGallery = [
  {
    id: "homepage",
    ref: "NMO-01",
    title: "Homepage",
    description:
      "The main storefront built around NMO's existing brand and merchandise.",
    image: homepage,
  },
  {
    id: "product-page",
    ref: "NMO-02",
    title: "Product page",
    description: "Product presentation, variants, sizing, pricing, and purchase flow.",
    image: productPage,
  },
  {
    id: "order-lookup",
    ref: "NMO-03",
    title: "Order & fulfillment lookup",
    description: "The workflow connecting customer orders with production, shipping, and tracking.",
    image: orderLookup,
  },
  {
    id: "collection-page",
    ref: "NMO-04",
    title: "Shipping regions",
    description: "The collection page with shipping region selection, product filtering, and merchandise display.",
    image: collectionPage,
  },
  {
    id: "shopify-admin",
    ref: "NMO-05",
    title: "Shipping operations",
    description: "The backend operation inside Shopify integrated with Printful and Track123 for order management and fulfillment.",
    image: shopifyAdmin,
  },
  {
    id: "printful-setup",
    ref: "NMO-06",
    title: "Product setup inside Printful",
    description: "The product catalog and fulfillment setup inside Printful, including product variants, pricing, and shipping.",
    image: printfulSetup,
  },
];
