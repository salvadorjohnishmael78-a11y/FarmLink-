import { useEffect, useState } from "react";

export default function FarmerDashboard({ apiUrl }) {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({products:0,pending_orders:0,sales:0,stock:0});

  useEffect(() => {
    Promise.all([
      fetch(`${apiUrl}/me`, {credentials:"include"}).then(r=>r.json()),
      fetch(`${apiUrl}/farmer/dashboard`, {credentials:"include"}).then(r=>r.json())
    ]).then(([me, data]) => {
      if (me.user) setUser(me.user);
      if (data.stats) setStats(data.stats);
    }).catch(err => console.error(err));
  }, [apiUrl]);

  async function logout() {
    await fetch(`${apiUrl}/logout`, {method:"POST", credentials:"include"});
    localStorage.removeItem("farmlink_user");
    window.location.href="/login";
  }

  return (
    <div className="dashboard-page">
      <aside className="dashboard-sidebar">
        <a href="/" className="dashboard-logo">🌿 FarmLink</a>
        <div className="dashboard-profile">
          <div className="profile-circle">👨‍🌾</div>
          <strong>{user ? `${user.first_name} ${user.last_name}` : "Farmer"}</strong>
          <span>Farmer / Seller</span>
        </div>
        <nav>
          <a className="selected" href="/farmer">📊 Dashboard</a>
          <a href="/farmer/products">🥬 My Products</a>
          <a href="/farmer/orders">📦 Orders</a>
          <a href="/farmer/inventory">📋 Inventory</a>
          <a href="/farmer/sales">💰 Sales</a>
          <a href="/farmer/notifications">🔔 Notifications</a>
          <a href="/farmer/profile">👤 Profile</a>
        </nav>
        <button className="logout-button" onClick={logout}>↪ Logout</button>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-top">
          <div>
            <p className="dashboard-eyebrow">FARMER CENTER</p>
            <h1>Good day, {user?.first_name || "Farmer"}! 👋</h1>
            <p>Manage your products, orders, inventory, and sales.</p>
          </div>
          <a href="/farmer/products/add" className="dashboard-action">+ Add Product</a>
        </div>

        <div className="stat-grid">
          <div className="stat-card"><span>🥬</span><div><p>Total Products</p><strong>{stats.products}</strong></div></div>
          <div className="stat-card"><span>📦</span><div><p>Pending Orders</p><strong>{stats.pending_orders}</strong></div></div>
          <div className="stat-card"><span>💰</span><div><p>Total Sales</p><strong>₱{Number(stats.sales).toFixed(2)}</strong></div></div>
          <div className="stat-card"><span>📋</span><div><p>Stock Items</p><strong>{stats.stock}</strong></div></div>
        </div>

        <section className="dashboard-panel">
          <div className="panel-heading"><span>QUICK ACTIONS</span><h2>Manage Your Farm</h2></div>
          <div className="quick-grid">
            <a href="/farmer/products/add"><strong>🥬 Add Product</strong><span>List fresh produce</span></a>
            <a href="/farmer/orders"><strong>📦 View Orders</strong><span>Manage buyer orders</span></a>
            <a href="/farmer/inventory"><strong>📋 Inventory</strong><span>Monitor stock</span></a>
            <a href="/farmer/sales"><strong>💰 Sales</strong><span>Track earnings</span></a>
          </div>
        </section>
      </main>
    </div>
  );
}