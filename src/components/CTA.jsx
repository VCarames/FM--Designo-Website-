import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-section__content">
        <h2 className="cta-section__heading">Let’s talk about your project</h2>
        <p className="cta-section__text">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <Link className="cta-section__btn" to="/contact">
          Get In Touch
        </Link>
      </div>
    </section>
  );
}

export default CTA;