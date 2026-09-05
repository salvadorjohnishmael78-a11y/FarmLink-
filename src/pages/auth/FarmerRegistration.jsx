import { useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Leaf,
} from "lucide-react";

export default function FarmerRegistration() {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    farmName: "",
    farmLocation: "",
    farmType: "",
    farmSize: "",

    password: "",
    confirmPassword: "",

    agree: false,
  });


  const [submitted, setSubmitted] =
    useState(false);


  const handleChange = (event) => {

    const {
      name,
      value,
      type,
      checked,
    } = event.target;


    setForm((previous) => ({
      ...previous,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

  };


  const handleSubmit = (event) => {

    event.preventDefault();


    if (
      form.password !==
      form.confirmPassword
    ) {

      alert(
        "Passwords do not match."
      );

      return;
    }


    console.log(
      "Farmer Registration:",
      form
    );


    setSubmitted(true);

  };


  return (
    <div className="registration-page">

      {/* HEADER */}

      <header className="registration-header">

        <div className="landing-container registration-nav">

          <button
            className="registration-logo"
            onClick={() =>
              (window.location.href = "/")
            }
          >

            <span>
              <Leaf size={19} />
            </span>

            <div>
              <strong>FarmLink</strong>

              <small>
                Connect. Grow. Thrive.
              </small>
            </div>

          </button>


          <button
            className="back-home"
            onClick={() =>
              (window.location.href = "/")
            }
          >

            <ArrowLeft size={15} />

            Back to Home

          </button>

        </div>

      </header>


      <main className="registration-main">

        <div className="registration-layout">

          {/* LEFT */}

          <section className="registration-intro">

            <div className="landing-eyebrow">
              FARMLINK FARMER REGISTRATION
            </div>


            <h1>

              Bring your farm
              <br />

              <span>
                to more buyers.
              </span>

            </h1>


            <p>

              Create your FarmLink farmer
              account and start building your
              digital farm profile.

            </p>


            <div className="registration-checks">

              <div>
                <CheckCircle2 />

                Showcase your farm products
              </div>

              <div>
                <CheckCircle2 />

                Reach more potential buyers
              </div>

              <div>
                <CheckCircle2 />

                Manage your farm information
              </div>

            </div>


            <div className="registration-decoration">
              🌱 🥕 🍅 🌾
            </div>

          </section>


          {/* FORM */}

          <section className="registration-card">

            <div className="registration-title">

              <h2>
                Create Farmer Account
              </h2>

              <p>
                Fill in your details to register.
              </p>

            </div>


            {submitted && (

              <div className="registration-success">

                <CheckCircle2 size={18} />

                Registration submitted
                successfully!

              </div>

            )}


            <form
              onSubmit={handleSubmit}
            >

              {/* PERSONAL */}

              <div className="registration-section">

                <h3>
                  Personal Information
                </h3>


                <div className="registration-two-columns">

                  <label>
                    First Name

                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Juan"
                      required
                    />
                  </label>


                  <label>
                    Last Name

                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Dela Cruz"
                      required
                    />
                  </label>

                </div>


                <div className="registration-two-columns">

                  <label>
                    Email Address

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="juan@email.com"
                      required
                    />
                  </label>


                  <label>
                    Phone Number

                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="09XX XXX XXXX"
                      required
                    />
                  </label>

                </div>

              </div>


              {/* FARM */}

              <div className="registration-section">

                <h3>
                  Farm Information
                </h3>


                <label>
                  Farm Name

                  <input
                    type="text"
                    name="farmName"
                    value={form.farmName}
                    onChange={handleChange}
                    placeholder="Juan's Family Farm"
                    required
                  />
                </label>


                <div className="registration-two-columns">

                  <label>
                    Farm Location

                    <input
                      type="text"
                      name="farmLocation"
                      value={form.farmLocation}
                      onChange={handleChange}
                      placeholder="Barangay / Municipality"
                      required
                    />
                  </label>


                  <label>
                    Farm Type

                    <select
                      name="farmType"
                      value={form.farmType}
                      onChange={handleChange}
                      required
                    >

                      <option value="">
                        Select type
                      </option>

                      <option value="vegetable">
                        Vegetable Farm
                      </option>

                      <option value="fruit">
                        Fruit Farm
                      </option>

                      <option value="rice">
                        Rice Farm
                      </option>

                      <option value="mixed">
                        Mixed Farm
                      </option>

                      <option value="other">
                        Other
                      </option>

                    </select>

                  </label>

                </div>


                <label>
                  Farm Size

                  <select
                    name="farmSize"
                    value={form.farmSize}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select farm size
                    </option>

                    <option>
                      Less than 1 hectare
                    </option>

                    <option>
                      1–5 hectares
                    </option>

                    <option>
                      6–10 hectares
                    </option>

                    <option>
                      More than 10 hectares
                    </option>

                  </select>

                </label>

              </div>


              {/* SECURITY */}

              <div className="registration-section">

                <h3>
                  Account Security
                </h3>


                <div className="registration-two-columns">

                  <label>
                    Password

                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Minimum 6 characters"
                      minLength="6"
                      required
                    />
                  </label>


                  <label>
                    Confirm Password

                    <input
                      type="password"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      placeholder="Re-enter password"
                      required
                    />
                  </label>

                </div>

              </div>


              {/* TERMS */}

              <label className="registration-terms">

                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  required
                />

                <span>
                  I agree to the FarmLink
                  Terms of Service and
                  Privacy Policy.
                </span>

              </label>


              {/* SUBMIT */}

              <button
                type="submit"
                className="farm-primary-btn registration-submit"
              >

                Create Farmer Account

                <ArrowRight size={17} />

              </button>


              <p className="already-account">

                Already have an account?

                <button
                  type="button"
                  onClick={() =>
                    (window.location.href =
                      "/login")
                  }
                >
                  Log in
                </button>

              </p>

            </form>

          </section>

        </div>

      </main>

    </div>
  );
}