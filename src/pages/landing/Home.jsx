import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Package,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Connect Farmers",
    text: "Help farmers reach more buyers and grow their business.",
  },
  {
    icon: Package,
    title: "Smart Decisions",
    text: "Use farm data to plan inventory, pricing, and sales.",
  },
  {
    icon: ShoppingCart,
    title: "Better Distribution",
    text: "Connect fresh produce with buyers through an organized marketplace.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    text: "Track farm-to-door deliveries for a smoother buying experience.",
  },
];

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Farmer Registers",
    text: "Create an account and register your farm.",
  },
  {
    number: "02",
    icon: Package,
    title: "Add Products",
    text: "List your fresh produce and manage inventory.",
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "Buyer Orders",
    text: "Buyers explore products and place orders.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Rider Delivers",
    text: "Riders deliver the products safely to buyers.",
  },
];

const challenges = [
  ["Limited market access", "Direct digital access to buyers"],
  ["Unpredictable prices", "Clearer demand and pricing information"],
  ["Difficult inventory management", "Easy-to-use inventory tools"],
  ["Limited buyer information", "Buyer and order visibility"],
  ["Delivery coordination", "Organized delivery workflow"],
];

function FarmerIllustration() {
  return (
    <div className="farmer-illustration">
      <div className="illustration-sun" />

      <div className="illustration-cloud cloud-one" />
      <div className="illustration-cloud cloud-two" />

      <div className="illustration-hill hill-one" />
      <div className="illustration-hill hill-two" />

      <div className="illustration-field" />

      <div className="farmer-character">
        <div className="farmer-hat" />
        <div className="farmer-face" />
        <div className="farmer-body" />
        <div className="farmer-arm arm-left" />
        <div className="farmer-arm arm-right" />
      </div>

      <div className="sales-card">
        <div className="sales-brand">
          <span />
          FarmLink
        </div>

        <strong>₱12,450</strong>

        <small>Weekly Sales</small>

        <div className="sales-bars">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="produce produce-one">🥕</div>
      <div className="produce produce-two">🥬</div>
      <div className="produce produce-three">🍅</div>

      <div className="farm-basket">🧺</div>

      <MapPin
        className="farm-pin"
        size={28}
        fill="currentColor"
      />

      <div className="farm-motorcycle">🛵</div>
    </div>
  );
}

export default function Home() {
  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <main>
      {/* HERO */}

      <section className="landing-hero" id="home">
        <div className="landing-container hero-grid">
          <div className="hero-content">
            <div className="landing-eyebrow">
              FARM-TO-MARKET PLATFORM
            </div>

            <h1>
              Connecting Farmers
              <br />
              to{" "}
              <span>Better Opportunities</span>
            </h1>

            <p>
              FarmLink connects farmers, buyers, and riders
              through one easy-to-use platform for smarter
              farm-to-market distribution.
            </p>

            <div className="hero-buttons">
              <button
                className="farm-primary-btn"
                onClick={() =>
                  (window.location.href =
                    "/register/farmer")
                }
              >
                <Users size={17} />

                Register as Farmer

                <ArrowRight size={17} />
              </button>

              <button
                className="farm-secondary-btn"
                onClick={() =>
                  scrollTo("features")
                }
              >
                <ShoppingCart size={17} />

                Shop Farm Products
              </button>
            </div>

            <div className="trust-items">
              <span>
                <CheckCircle2 size={15} />
                Trusted by Farmers
              </span>

              <span>
                <CheckCircle2 size={15} />
                Secure & Reliable
              </span>

              <span>
                <CheckCircle2 size={15} />
                Data-Driven Platform
              </span>
            </div>
          </div>

          <FarmerIllustration />
        </div>
      </section>

      {/* WHY FARMLINK */}

      <section
        className="landing-section"
        id="why"
      >
        <div className="landing-heading">
          <div className="landing-eyebrow">
            WHY FARMLINK?
          </div>

          <h2>
            Built for the people behind
            every harvest
          </h2>

          <p>
            One simple platform designed to make
            the agricultural supply chain easier.
          </p>
        </div>

        <div className="landing-container benefit-grid">
          {benefits.map(
            ({ icon: Icon, title, text }) => (
              <article
                className="benefit-card"
                key={title}
              >
                <div className="benefit-icon">
                  <Icon size={22} />
                </div>

                <h3>{title}</h3>

                <p>{text}</p>
              </article>
            )
          )}
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section
        className="landing-section how-section"
        id="how"
      >
        <div className="landing-heading">
          <div className="landing-eyebrow">
            HOW IT WORKS
          </div>

          <h2>
            Simple steps to connect
            communities
          </h2>

          <p>
            From farm registration to doorstep delivery.
          </p>
        </div>

        <div className="landing-container steps-grid">
          {steps.map(
            (
              {
                number,
                icon: Icon,
                title,
                text,
              },
              index
            ) => (
              <React.Fragment key={number}>
                <article className="step-card">
                  <span className="step-number">
                    {number}
                  </span>

                  <div className="step-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{title}</h3>

                  <p>{text}</p>
                </article>

                {index < 3 && (
                  <ChevronRight className="step-arrow" />
                )}
              </React.Fragment>
            )
          )}
        </div>
      </section>

      {/* ABOUT */}

      <section
        className="landing-section"
        id="about"
      >
        <div className="landing-heading">
          <div className="landing-eyebrow">
            WHY FARMLINK IS IMPORTANT
          </div>

          <h2>
            Turning agricultural challenges
            into opportunities
          </h2>
        </div>

        <div className="landing-container about-grid">
          <div className="comparison-table">
            <div className="comparison-header">
              <strong>Challenges</strong>
              <strong>FarmLink Solution</strong>
            </div>

            {challenges.map(
              ([challenge, solution]) => (
                <div
                  className="comparison-row"
                  key={challenge}
                >
                  <span>{challenge}</span>

                  <span>{solution}</span>
                </div>
              )
            )}
          </div>

          <div className="join-farmer-card">
            <div className="join-icon">
              🌱
            </div>

            <h2>
              Bring Your Farm
              <br />
              to FarmLink
            </h2>

            <p>
              Register your farm, showcase your
              products, reach more buyers, and
              manage your farm information in
              one place.
            </p>

            <button
              className="farm-primary-btn white-btn"
              onClick={() =>
                (window.location.href =
                  "/register/farmer")
              }
            >
              Register as Farmer

              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section
        className="landing-section"
        id="features"
      >
        <div className="landing-container feature-banner">
          <div>
            <div className="landing-eyebrow">
              ONE PLATFORM. THREE COMMUNITIES.
            </div>

            <h2>
              Farmers, buyers, and riders
              <br />
              work better together.
            </h2>

            <p>
              FarmLink is designed to simplify
              the path from farm to customer.
            </p>
          </div>

          <div className="role-pills">
            <span>
              <Users size={17} />
              Farmers
            </span>

            <span>
              <ShoppingCart size={17} />
              Buyers
            </span>

            <span>
              <Truck size={17} />
              Riders
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}