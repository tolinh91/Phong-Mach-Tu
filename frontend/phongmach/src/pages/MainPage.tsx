import { useState } from "react";
import appIcon from '../assets/appicon.png';

const sidebarItems = [
  { icon: "🏠", label: "Trang chủ" },
  { icon: "📄", label: "Giấy khám bệnh" },
  { icon: "👤", label: "Bệnh nhân" },
  { icon: "📝", label: "Đơn thuốc" },
  { icon: "💊", label: "Thuốc" },
  { icon: "💳", label: "Thẻ BHYT" },
  { icon: "📦", label: "Vật tư" },
  { icon: "💰", label: "Thanh toán" },
  { icon: "📋", label: "Bảng chấm công" },
  { icon: "💵", label: "Lương" },
  { icon: "⚙️", label: "Cài đặt" },
];

function MainPage() {
  const [user] = useState({
    name: "Mạnh",
    role: "Trưởng phòng khám",
    code: "TPK",
    gender: "Nam",
  });

  return (
    <div style={{ minHeight: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f4f4f4' }}>
      <div style={{ display: "flex", width: '100%', height: '100%', maxWidth: 1200, maxHeight: 800, boxShadow: '0 2px 8px #0001', borderRadius: 12, overflow: 'hidden', background: '#f4f4f4' }}>
        {/* Sidebar */}
        <aside style={{ width: 220, background: "#2d4a7a", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", padding: 0 }}>
          <div style={{ width: "100%", padding: 24, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src={appIcon} alt="logo" style={{ width: 70, marginBottom: 8, background: "#fff", borderRadius: 8 }} />
          </div>
          <nav style={{ width: "100%" }}>
            <div style={{ fontWeight: 500, margin: "8px 0 8px 24px", color: "#cfd8e3", fontSize: 15 }}>Quản lý</div>
            {sidebarItems.map((item, idx) => (
              <div key={item.label} style={{
                display: "flex", alignItems: "center", padding: "8px 24px", background: idx === 0 ? "#fff" : "none", color: idx === 0 ? "#2d4a7a" : "#fff", borderRadius: idx === 0 ? 8 : 0, fontWeight: idx === 0 ? 600 : 400, margin: idx === 0 ? "0 8px 0 8px" : 0, cursor: "pointer", fontSize: 16
              }}>
                <span style={{ marginRight: 12 }}>{item.icon}</span> {item.label}
              </div>
            ))}
          </nav>
        </aside>
        {/* Main content */}
        <main style={{ flex: 1, padding: 0, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          {/* Top bar */}
          <header style={{ height: 60, background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px 0 0", borderBottom: "1px solid #e0e0e0" }}>
            <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
              <button style={{ background: "none", border: "none", fontSize: 28, marginLeft: 16, cursor: "pointer" }}>☰</button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img src={appIcon} alt="logo" style={{ width: 36, borderRadius: 18, background: "#fff" }} />
              <span style={{ fontWeight: 500, color: "#2d4a7a" }}>{user.name}</span>
              <span style={{ fontSize: 18, marginLeft: 4 }}>▼</span>
            </div>
          </header>
          {/* Breadcrumb */}
          <div style={{ padding: "18px 0 0 32px", color: "#222", fontWeight: 500, fontSize: 20 }}>Trang chủ</div>
          <div style={{ padding: "0 32px 0 32px", color: "#888", fontSize: 15, textAlign: "right" }}>Trang chủ / Trang chủ</div>
          {/* Main dashboard */}
          <div style={{ display: "flex", gap: 24, padding: 32 }}>
            {/* Welcome card */}
            <div style={{ background: "#e3ecfa", borderRadius: 8, padding: 0, width: 260, minHeight: 180, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "100%", background: "#e3ecfa", borderTopLeftRadius: 8, borderTopRightRadius: 8, padding: 12, textAlign: "center", fontWeight: 500, color: "#2d4a7a", fontSize: 18 }}>Chào mừng trở lại!</div>
              <img src={appIcon} alt="logo" style={{ width: 60, margin: "12px 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between", width: "90%", margin: "8px 0" }}>
                <div>
                  <div style={{ fontSize: 15, color: "#222" }}>Mã</div>
                  <div style={{ fontWeight: 600 }}>{user.name}</div>
                </div>
                <div>
                  <div style={{ fontSize: 15, color: "#222" }}>TPK</div>
                  <div style={{ fontWeight: 600 }}>Giới tính</div>
                  <div style={{ fontWeight: 400 }}>{user.gender}</div>
                </div>
              </div>
              <div style={{ marginTop: 8 }}>
                <span style={{ background: "#222", color: "#fff", borderRadius: 6, padding: "2px 10px", fontSize: 13 }}>{user.role}</span>
              </div>
            </div>
            {/* Stat cards */}
            <div style={{ display: "flex", gap: 18, flex: 1 }}>
              <div style={{ background: "#fff", borderRadius: 8, padding: 18, minWidth: 140, minHeight: 80, display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 1px 4px #0001" }}>
                <div style={{ fontWeight: 500, color: "#2d4a7a", marginBottom: 8 }}>Giấy khám bệnh</div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>10</div>
                <div style={{ fontSize: 28, marginTop: 8 }}>📄</div>
              </div>
              <div style={{ background: "#fff", borderRadius: 8, padding: 18, minWidth: 140, minHeight: 80, display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 1px 4px #0001" }}>
                <div style={{ fontWeight: 500, color: "#2d4a7a", marginBottom: 8 }}>Đơn thuốc</div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>10</div>
                <div style={{ fontSize: 28, marginTop: 8 }}>📝</div>
              </div>
              <div style={{ background: "#fff", borderRadius: 8, padding: 18, minWidth: 140, minHeight: 80, display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 1px 4px #0001" }}>
                <div style={{ fontWeight: 500, color: "#2d4a7a", marginBottom: 8 }}>Thanh toán</div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>10</div>
                <div style={{ fontSize: 28, marginTop: 8 }}>💰</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
