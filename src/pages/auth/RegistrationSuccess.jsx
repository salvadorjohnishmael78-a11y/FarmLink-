import {
  CheckCircle2,
  ArrowRight,
  Leaf,
} from "lucide-react";

export default function RegistrationSuccess() {

  return (
    <div className="success-page">

      <div className="success-card">

        <div className="success-logo">

          <Leaf size={25} />

        </div>


        <CheckCircle2
          className="big-success-icon"
          size={70}
        />


        <h1>
          Registration Successful!
        </h1>


        <p>

          Your FarmLink farmer account
          has been created successfully.

          You can now continue to your
          farmer dashboard.

        </p>


        <button
          className="farm-primary-btn"
          onClick={() =>
            (window.location.href =
              "/farmer/dashboard")
          }
        >

          Continue to Dashboard

          <ArrowRight size={17} />

        </button>


        <button
          className="success-home"
          onClick={() =>
            (window.location.href = "/")
          }
        >

          Back to Home

        </button>

      </div>

    </div>
  );
}