import { useEffect, useState } from "react";

export default function RiderDashboard({ apiUrl }) {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({assigned:0,delivered:0,earnings:0});

  useEffect(() => {
    Promise.all([
      fetch(`${apiUrl}/me`, {credentials:"include"}).then(r=>r.json()),
      fetch(`${apiUrl}/rider/dashboard`, {credentials:"include"}).then(r=>r.json())
    ]).then(([me, data]) => {
      if (me.user) setUser(me.user);
      if (data.stats) setStats(data.stats);
    }).catch(console.error);
  }, [apiUrl]);

  async function logout() {
    await fetch(`${apiUrl}/logout`, {method:"POST", credentials:"include"});
    localStorage.removeItem("farmlink_user");
    window.location.href="/login";
  }

  return (
    <div className="dashboard-page rider-dashboard">
      <aside className="dashboard-sidebar">
        <a href="/" className="dashboard-logo rider-logo">🌿 FarmLink</a>
        <div className="dashboard-profile">
          <div className="profile-circle rider-circle">🏍️</div>
          <strong>{user ? `${user.first_name} ${user.last_name}` : "Rider"}</strong>
          <span>Rider / Delivery</span>
        </div>
        <nav>
          <a className="selected" href="/rider">📊 Dashboard</a>
          <a href="/rider/deliveries">📦 Deliveries</a>
          <a href="/rider/current">🏍️ Current Delivery</a>
          <a href="/rider/tracking">📍 Live Tracking</a>
          <a href="/rider/history">🕒 Delivery History</a>
          <a href="/rider/earnings">💰 Earnings</a>
          <a href="/rider/profile">👤 Profile</a>
        </nav>
        <button className="logout-button" onClick={logout}>↪ Logout</button>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-top">
          <div>
            <p className="dashboard-eyebrow rider-eyebrow">RIDER CENTER</p>
            <h1>Ready for deliveries, {user?.first_name || "Rider"}! 🏍️</h1>
            <p>Manage deliveries and track your earnings.</p>
          </div>
          <a href="/rider/deliveries" className="dashboard-action rider-action">View Deliveries</a>
        </div>

        <div className="stat-grid">
          <div className="stat-card rider-stat"><span>📦</span><div><p>Assigned</p><strong>{stats.assigned}</strong></div></div>
          <div className="stat-card rider-stat"><span>✅</span><div><p>Delivered</p><strong>{stats.delivered}</strong></div></div>
          <div className="stat-card rider-stat"><span>💰</span><div><p>Earnings</p><strong>₱{Number(stats.earnings).toFixed(2)}</strong></div></div>
          <div className="stat-card rider-stat"><span>🛵</span><div><p>Status</p><strong>Available</strong></div></div>
        </div>

        <section className="dashboard-panel">
          <div className="panel-heading"><span>DELIVERY CENTER</span><h2>Quick Actions</h2></div>
          <div className="quick-grid">
            <a href="/rider/deliveries"><strong>📦 My Deliveries</strong><span>See assigned orders</span></a>
            <a href="/rider/current"><strong>🏍️ Current Delivery</strong><span>Manage active delivery</span></a>
            <a href="/rider/tracking"><strong>📍 Live Tracking</strong><span>Track delivery</span></a>
            <a href="/rider/earnings"><strong>💰 Earnings</strong><span>Review income</span></a>
          </div>
        </section>
      </main>
    </div>
  );
}