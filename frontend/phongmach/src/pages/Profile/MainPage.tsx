import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appIcon from '../../assets/appicon.png';

const menuItems = [
  { label: 'Trang chủ', route: '/profile/main' },
  { label: 'Giấy khám bệnh', route: '/giaykhambenh/danhsachkhambenh' },
  { label: 'Bệnh nhân', route: '/benhnhan' },
  { label: 'Đơn thuốc', route: '/donthuoc' },
  { label: 'Thuốc', route: '/thuoc' },
  { label: 'Vật tư', route: '/vattu' },
  { label: 'Thanh toán', route: '/thanhtoan' },
  { label: 'Cài đặt', route: '/caidat' },
];

const userMenu = [
  { label: 'Thông tin cá nhân', route: '/profile/main' },
  { label: 'Đổi mật khẩu', route: '/profile/changepassword' },
  { label: 'Thoát', route: '/login', color: 'red' },
];

const MainPage: React.FC = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f6fa' }}>
      {/* Sidebar */}
      <aside style={{ width: 250, background: '#43536b', color: '#fff', padding: '24px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={appIcon} alt="Logo" style={{ width: 120, borderRadius: '50%', marginBottom: 16, objectFit: 'cover', aspectRatio: '1/1', background: '#fff' }} />
        <nav style={{ width: '100%' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {menuItems.map(item => (
              <li key={item.label} style={{ padding: '12px 32px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', fontWeight: item.label === 'Trang chủ' ? 600 : 400, background: item.label === 'Trang chủ' ? '#fff2' : 'none', color: item.label === 'Trang chủ' ? '#fff' : '#fff' }} onClick={() => navigate(item.route)}>
                {/* You can add icons here if needed */}
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <main style={{ flex: 1, padding: '32px 0 0 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 32px' }}>
          <div style={{ fontSize: '1.4rem', fontWeight: 600 }}>Trang chủ</div>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src={appIcon} alt="Logo" style={{ width: 40, borderRadius: '50%', cursor: 'pointer', objectFit: 'cover', aspectRatio: '1/1', background: '#fff' }} onClick={() => setUserMenuOpen(v => !v)} />
            <span style={{ fontWeight: 500 }}>Mạnh</span>
            <span style={{ fontSize: 18, cursor: 'pointer' }} onClick={() => setUserMenuOpen(v => !v)}>▼</span>
            {userMenuOpen && (
              <div style={{ position: 'absolute', top: 48, right: 0, background: '#fff', boxShadow: '0 2px 8px #0002', borderRadius: 8, minWidth: 180, zIndex: 10 }}>
                {userMenu.map(item => (
                  <div key={item.label} onClick={() => { setUserMenuOpen(false); navigate(item.route); }} style={{ padding: '12px 20px', cursor: 'pointer', color: item.color || '#222', borderBottom: '1px solid #eee', fontWeight: 500 }}>
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Welcome Card and Info */}
        <div style={{ display: 'flex', gap: 32, marginTop: 32, padding: '0 32px' }}>
          <section style={{ background: '#e8f0fc', borderRadius: 12, padding: 24, flex: '0 0 340px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={appIcon} alt="Avatar" style={{ width: 100, borderRadius: '50%', objectFit: 'cover', aspectRatio: '1/1', background: '#fff' }} />
            <div style={{ marginTop: 12, fontWeight: 600, fontSize: 18 }}>Mạnh</div>
            <div style={{ marginTop: 8, background: '#222', color: '#fff', borderRadius: 6, padding: '2px 12px', fontSize: 14 }}>Trưởng phòng khám</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 18 }}>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: 14, color: '#888' }}>Mã</div>
                <div style={{ fontWeight: 500 }}>TPK</div>
              </div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: 14, color: '#888' }}>Giới tính</div>
                <div style={{ fontWeight: 500 }}>Nam</div>
              </div>
            </div>
            <div style={{ marginTop: 18, color: '#2a5ca4', fontWeight: 500, fontSize: 18 }}>Chào mừng trở lại!</div>
          </section>
          <section style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', gap: 24 }}>
            <div style={{ flex: 1 }}>
              <div style={{ background: '#fff', borderRadius: 8, padding: 24, boxShadow: '0 2px 8px #0001', textAlign: 'center' }}>
                <div style={{ fontSize: 18, color: '#222', marginBottom: 8 }}>Giấy khám bệnh</div>
                <div style={{ fontSize: 32, fontWeight: 600 }}>10</div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: '#fff', borderRadius: 8, padding: 24, boxShadow: '0 2px 8px #0001', textAlign: 'center' }}>
                <div style={{ fontSize: 18, color: '#222', marginBottom: 8 }}>Đơn thuốc</div>
                <div style={{ fontSize: 32, fontWeight: 600 }}>10</div>
              </div>
            </div>
            {/* Add more cards here if needed */}
          </section>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
