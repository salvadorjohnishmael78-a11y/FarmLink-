import { useState } from "react";

export default function FarmerRegistration({ apiUrl }) {
  const [form, setForm] = useState({
    role: "farmer",
    first_name:"", last_name:"", email:"", phone:"",
    password:"", confirm_password:"", farm_name:"",
    farm_description:"", farm_address:"", barangay:"",
    city:"", province:""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const change = e => setForm({...form, [e.target.name]: e.target.value});

  async function submit(e) {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirm_password) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/register/${form.role}`, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(form)
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Registration failed.");

      window.location.href = "/registration-success";
    } catch (err) {
      if (err instanceof TypeError && err.message === "Failed to fetch") {
        localStorage.setItem(
          "farmlink_user",
          JSON.stringify(form)
        );
        window.location.href = "/registration-success";
        return;
      }

      setError(err.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="registration-page">
      <div className="auth-brand"><a href="/">🌿 FarmLink</a></div>

      <div className="registration-card">
        <div className="registration-header">
          <span>FARMLINK COMMUNITY</span>
          <h1>Register as a {form.role === "farmer" ? "Farmer" : "Rider"}</h1>
          <p>Create your account and join the FarmLink community.</p>
        </div>

        {error && <div className="form-error">{error}</div>}

        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="role">Register as *</label>
            <select id="role" name="role" value={form.role} onChange={change} required>
              <option value="farmer">Farmer / Seller</option>
              <option value="rider">Rider / Delivery Partner</option>
            </select>
          </div>

          <h2>Personal Information</h2>
          <div className="form-row">
            <div className="form-group"><label>First Name *</label>
              <input name="first_name" value={form.first_name} onChange={change} required /></div>
            <div className="form-group"><label>Last Name *</label>
              <input name="last_name" value={form.last_name} onChange={change} required /></div>
          </div>

          <div className="form-row">
            <div className="form-group"><label>Email *</label>
              <input type="email" name="email" value={form.email} onChange={change} required /></div>
            <div className="form-group"><label>Phone</label>
              <input name="phone" value={form.phone} onChange={change} /></div>
          </div>

          <div className="form-row">
            <div className="form-group"><label>Password *</label>
              <input type="password" name="password" minLength="8" value={form.password} onChange={change} required /></div>
            <div className="form-group"><label>Confirm Password *</label>
              <input type="password" name="confirm_password" minLength="8" value={form.confirm_password} onChange={change} required /></div>
          </div>

          {form.role === "farmer" && (
            <>
              <h2>Farm Information</h2>
              <div className="form-group"><label>Farm Name *</label>
                <input name="farm_name" value={form.farm_name} onChange={change} required /></div>

              <div className="form-group"><label>Farm Description</label>
                <textarea name="farm_description" rows="3" value={form.farm_description} onChange={change} /></div>
            </>
          )}

          <h2>Farm Address</h2>
          <div className="form-group"><label>Farm Address</label>
            <input name="farm_address" value={form.farm_address} onChange={change} /></div>

          <div className="form-row three">
            <div className="form-group"><label>Barangay</label>
              <input name="barangay" value={form.barangay} onChange={change} /></div>
            <div className="form-group"><label>City</label>
              <input name="city" value={form.city} onChange={change} /></div>
            <div className="form-group"><label>Province</label>
              <input name="province" value={form.province} onChange={change} /></div>
          </div>

          <label className="terms-check">
            <input type="checkbox" required />
            <span>I agree to the FarmLink Terms & Conditions.</span>
          </label>

          <button className="registration-submit" disabled={loading}>
            {loading ? "Creating account..." : `Create ${form.role === "farmer" ? "Farmer" : "Rider"} Account`}
          </button>
        </form>

        <p className="login-prompt">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
}