
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import appIcon from '../../assets/appicon.png';

const sidebarItems = [
  { label: "Trang chủ", icon: "🏠", route: "/main" },
  { label: "Giấy khám bệnh", icon: "📄", route: "/qlgkb" },
  { label: "Bệnh nhân", icon: "👤", route: "/qlbenhnhan" },
  { label: "Đơn thuốc", icon: "📝", route: "/qldonthuoc" },
  { label: "Thuốc", icon: "➕", route: "/thuoc" },
  { label: "Vật tư", icon: "🔧", route: "/qlvattu" },
  { label: "Thanh toán", icon: "💲", route: "/thanhtoan" },
  { label: "Hỗ trợ kỹ thuật", icon: "💡", route: "/hotro" },
  { label: "Cài đặt", icon: "⚙️", route: "/caidat" },
];

const CreateBN = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("Bệnh nhân");
  const [menuOpen, setMenuOpen] = useState(false);
  // Form state
  // const [form, setForm] = useState({
  //   code: '',
  //   name: '',
  //   gender: '',
  //   phone: '',
  //   dob: '',
  //   address: '',
  // });

  React.useEffect(() => {
    const found = sidebarItems.find(item => item.route === location.pathname);
    if (found) setActive(found.label);
  }, [location.pathname]);

  const handleSidebarClick = (item: typeof sidebarItems[0]) => {
    navigate(item.route);
  };
  const handleMenuSelect = (option: string) => {
    setMenuOpen(false);
    if (option === "Thông tin cá nhân") navigate("/profile");
    else if (option === "Đổi mật khẩu") navigate("/changepassword");
    else if (option === "Thoát") navigate("/login");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ minHeight: '100vh', width: '100vw', display: 'flex', background: '#f5f6fa' }}>
      {/* Sidebar */}
      <div style={{ width: 250, minWidth: 70, background: '#2d4a7a', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 24, position: 'relative' }}>
        <img src={appIcon} alt="logo" style={{ width: '70%', maxWidth: 90, minWidth: 50, borderRadius: '50%', marginBottom: 24, background: '#fff', objectFit: 'cover' }} />
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
      <div style={{ flex: 1, padding: '32px 0 0 0', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        {/* Top right menu */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 16, flexWrap: 'wrap', padding: '0 32px' }}>
          <img src={appIcon} alt="logo" style={{ width: 40, borderRadius: '50%' }} />
          <span style={{ fontWeight: 500, fontSize: 18, color: '#2d4a7a' }}>Mạnh</span>
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
        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 32px', marginTop: 18 }}>
          <div style={{ fontSize: '1.6rem', fontWeight: 500 }}>Tạo thông tin bệnh nhân</div>
        </div>
        {/* Form card */}
        <div style={{ padding: '0 32px', marginTop: 18, marginBottom: 24 }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: 40, maxWidth: 650, margin: '0 auto', boxShadow: '0 2px 12px #0001' }}>
            <form>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div style={{ display: 'flex', gap: 32 }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ fontWeight: 500, marginBottom: 4 }}>Mã bệnh nhân</label>
                    <input name="code" value={form.code} onChange={handleChange} style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid #ccc', fontSize: 16 }} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ fontWeight: 500, marginBottom: 4 }}>Tên bệnh nhân</label>
                    <input name="name" value={form.name} onChange={handleChange} style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid #ccc', fontSize: 16 }} />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 32 }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ fontWeight: 500, marginBottom: 4 }}>Giới tính</label>
                    <select name="gender" value={form.gender} onChange={handleChange} style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid #ccc', fontSize: 16 }}>
                      <option value="">Chọn</option>
                      <option value="Nam">Nam</option>
                      <option value="Nữ">Nữ</option>
                    </select>
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ fontWeight: 500, marginBottom: 4 }}>Số điện thoại</label>
                    <input name="phone" value={form.phone} onChange={handleChange} style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid #ccc', fontSize: 16 }} />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 32 }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ fontWeight: 500, marginBottom: 4 }}>Ngày sinh</label>
                    <input name="dob" value={form.dob} onChange={handleChange} style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid #ccc', fontSize: 16 }} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{ fontWeight: 500, marginBottom: 4 }}>Địa chỉ</label>
                    <input name="address" value={form.address} onChange={handleChange} style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid #ccc', fontSize: 16 }} />
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 24, marginTop: 18 }}>
                  <button type="button" style={{ background: '#888', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 40px', fontWeight: 500, fontSize: 17, cursor: 'pointer' }} onClick={() => navigate('/qlbenhnhan')}>Hủy</button>
                  <button type="submit" style={{ background: '#1ec9a4', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 40px', fontWeight: 500, fontSize: 17, cursor: 'pointer' }}>Lưu</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBN;
