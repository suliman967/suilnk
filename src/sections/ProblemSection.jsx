import RevealOnScroll from "../components/ui/RevealOnScroll.jsx";
import "./ProblemSection.css";

const overlooked = [
  {
    ref: "01",
    title: "The store",
    detail: "A storefront that actually fits the creator's brand and makes the products easy to buy.",
  },
  {
    ref: "02",
    title: "Products",
    detail: "Product setup, variants, pricing, mockups, and collection organization.",
  },
  {
    ref: "03",
    title: "Fulfillment",
    detail: "Connecting the store to print-on-demand production and making sure the order flow works.",
  },
  {
    ref: "04",
    title: "After checkout",
    detail: "Shipping, tracking, order flow, and the operational side customers actually experience.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section problem">
      <div className="container-wide problem__grid">
        <div className="problem__lead">
          <RevealOnScroll>
            <span className="eyebrow">The problem</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <h2 className="problem__headline">Merch is more than putting a logo on a hoodie.</h2>
          </RevealOnScroll>
        </div>

        <div className="problem__body">
          <RevealOnScroll delay={0.1}>
            <p className="problem__intro">
              A creator can have the audience, the designs, and the products and still end up with a messy merch operation.

              The store needs to work.

              Products need to be set up properly. Orders need somewhere to go. Fulfillment needs to be connected. Shipping needs to make sense. Customers need to be able to track what they bought.

              Those details are easy to overlook until they become someone else's problem.
            </p>
          </RevealOnScroll>

          <ul className="problem__list">
            {overlooked.map((item, i) => (
              <RevealOnScroll as="li" key={item.ref} delay={0.14 + i * 0.06}>
                <span className="problem__list-ref">{item.ref}</span>
                <div>
                  <h3 className="problem__list-title">{item.title}</h3>
                  <p className="problem__list-detail">{item.detail}</p>
                </div>
              </RevealOnScroll>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
