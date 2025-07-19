import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import appIcon from '../../assets/appicon.png';

const sidebarItems = [
  { label: "Trang chủ", icon: "🏠", route: "/main" },
  { label: "Giấy khám bệnh", icon: "📄", route: "/qlgkb" },
  { label: "Bệnh nhân", icon: "👤", route: "/qlbenhnhan" },
  { label: "Đơn thuốc", icon: "📝", route: "/qldonthuoc" },
  { label: "Thuốc", icon: "➕", route: "/thuoc" },
  { label: "Vật tư", icon: "🔧", route: "/qlvattu" },
  { label: "Thanh toán", icon: "💲", route: "/thanhtoan" },
  { label: "Cài đặt", icon: "⚙️", route: "/caidat" },
];

function MainPage() {
  const navigate = useNavigate();
  const [active, setActive] = useState("Trang chủ");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSidebarClick = (item: typeof sidebarItems[0]) => {
    setActive(item.label);
    switch (item.label) {
      case "Trang chủ":
        navigate("/main");
        break;
      case "Giấy khám bệnh":
        navigate("/qlgkb");
        break;
      case "Bệnh nhân":
        navigate("/qlbenhnhan");
        break;
      case "Đơn thuốc":
        navigate("/qldonthuoc");
        break;
      case "Vật tư":
        navigate("/qlvattu");
        break;
      case "Thanh toán":
        navigate("/thanhtoan");
        break;
      case "Cài đặt":
        navigate("/caidat");
        break;
      default:
        break;
    }
  };

  const handleMenuSelect = (option: string) => {
    setMenuOpen(false);
    if (option === "Thông tin cá nhân") navigate("/profile");
    else if (option === "Đổi mật khẩu") navigate("/changepassword");
    else if (option === "Thoát") navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        background: '#f4f4f4',
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: 250,
          minWidth: 70,
          background: '#2d4a7a',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 24,
          position: 'relative',
        }}
      >
        <img
          src={appIcon}
          alt="logo"
          style={{
            width: '70%',
            maxWidth: 90,
            minWidth: 50,
            borderRadius: '50%',
            marginBottom: 24,
            background: '#fff',
            objectFit: 'cover',
          }}
        />
        {sidebarItems.map(item => (
          <div
            key={item.label}
            onClick={() => handleSidebarClick(item)}
            style={{
              width: '90%',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 18px',
              marginBottom: 8,
              borderRadius: 8,
              background: active === item.label ? '#fff' : 'transparent',
              color: active === item.label ? '#2d4a7a' : '#fff',
              fontWeight: active === item.label ? 600 : 400,
              cursor: 'pointer',
              boxShadow: active === item.label ? '0 2px 8px #0001' : 'none',
              transition: 'all 0.2s',
              fontSize: '1rem',
            }}
          >
            <span style={{ fontSize: 20, color: active === item.label ? '#2d4a7a' : '#e0e6ef', filter: active === item.label ? '' : 'grayscale(1)' }}>{item.icon}</span>
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
          </div>
        ))}
      </div>
      {/* Main content */}
      <div
        style={{
          flex: 1,
          padding: '32px 16px 0 16px',
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <img src={appIcon} alt="logo" style={{ width: 40, borderRadius: '50%' }} />
          <span style={{ fontWeight: 500, fontSize: 18, color: '#2d4a7a' }}>Admin</span>
          <div style={{ position: 'relative' }}>
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18 }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ▼
            </button>
            {menuOpen && (
              <div style={{ position: 'absolute', right: 0, top: 32, background: '#fff', boxShadow: '0 2px 8px #0002', borderRadius: 8, minWidth: 220, zIndex: 10 }}>
                <div onClick={() => handleMenuSelect('Thông tin cá nhân')}
                  style={{ padding: '12px 28px', cursor: 'pointer', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: 12, whiteSpace: 'nowrap' }}>
                  <span>👤</span> Thông tin cá nhân
                </div>
                <div onClick={() => handleMenuSelect('Đổi mật khẩu')}
                  style={{ padding: '12px 28px', cursor: 'pointer', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: 12, whiteSpace: 'nowrap' }}>
                  <span>🔑</span> Đổi mật khẩu
                </div>
                <div onClick={() => handleMenuSelect('Thoát')}
                  style={{ padding: '12px 28px', cursor: 'pointer', color: 'red', display: 'flex', alignItems: 'center', gap: 12, whiteSpace: 'nowrap' }}>
                  <span>⏻</span> Thoát
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Main content area */}
        <div style={{ marginTop: 32 }}>
          <h2 style={{ color: '#2d4a7a', fontWeight: 500, fontSize: '1.3rem', marginBottom: 16 }}>Trang chủ</h2>
          <div
            style={{
              background: '#fff',
              borderRadius: 12,
              padding: '18px 12px',
              boxShadow: '0 2px 8px #0001',
              marginBottom: 16,
              maxWidth: 400,
              minWidth: 220,
              width: '100%',
              display: 'inline-block',
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 500, color: '#2d4a7a', marginBottom: 8 }}>Chào mừng trở lại!</div>
            <div style={{ marginTop: 8, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              <div>ID: Admin</div>
              <div>Vai trò: Quản trị viên</div>
            </div>
          </div>
          {/* Các card thống kê */}
          <div
            style={{
              display: 'flex',
              gap: 24,
              marginTop: 8,
              flexWrap: 'wrap',
            }}
          >
            <div style={{ background: '#fff', borderRadius: 10, padding: 18, minWidth: 160, boxShadow: '0 2px 8px #0001', textAlign: 'center', flex: '1 1 160px', marginBottom: 12 }}>
              <div style={{ fontWeight: 500 }}>Giấy khám bệnh</div>
              <div style={{ fontSize: 22, fontWeight: 700, margin: '8px 0' }}>10</div>
              <span style={{ fontSize: 22, color: '#bfc8d8' }}>📄</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 10, padding: 18, minWidth: 160, boxShadow: '0 2px 8px #0001', textAlign: 'center', flex: '1 1 160px', marginBottom: 12 }}>
              <div style={{ fontWeight: 500 }}>Đơn thuốc</div>
              <div style={{ fontSize: 22, fontWeight: 700, margin: '8px 0' }}>10</div>
              <span style={{ fontSize: 22, color: '#bfc8d8' }}>📝</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 10, padding: 18, minWidth: 160, boxShadow: '0 2px 8px #0001', textAlign: 'center', flex: '1 1 160px', marginBottom: 12 }}>
              <div style={{ fontWeight: 500 }}>Thanh toán</div>
              <div style={{ fontSize: 22, fontWeight: 700, margin: '8px 0' }}>10</div>
              <span style={{ fontSize: 22, color: '#bfc8d8' }}>💲</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
