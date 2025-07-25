import React, { useState } from "react";

const initialData = [
  { id: 1, name: "Găng tay y tế", code: "VT001", unit: "Hộp", quantity: 50 },
  { id: 2, name: "Khẩu trang", code: "VT002", unit: "Hộp", quantity: 100 },
  { id: 3, name: "Bông gòn", code: "VT003", unit: "Túi", quantity: 30 },
];

function QLVatTu() {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");

  const filtered = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 32, background: "#f4f4f4", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ color: "#2d4a7a", fontWeight: 600 }}>Quản lý Vật tư</h2>
        <button
          style={{
            background: "#2d4a7a",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "10px 28px",
            fontSize: 16,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          + Thêm vật tư
        </button>
      </div>
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Tìm kiếm theo tên, mã vật tư..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: 320,
            maxWidth: "100%",
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: 15,
          }}
        />
      </div>
      <div style={{ overflowX: "auto", background: "#fff", borderRadius: 10, boxShadow: "0 2px 8px #0001" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
          <thead>
            <tr style={{ background: "#e3ecfa", color: "#2d4a7a" }}>
              <th style={{ padding: 12, textAlign: "left" }}>STT</th>
              <th style={{ padding: 12, textAlign: "left" }}>Mã vật tư</th>
              <th style={{ padding: 12, textAlign: "left" }}>Tên vật tư</th>
              <th style={{ padding: 12, textAlign: "left" }}>Đơn vị</th>
              <th style={{ padding: 12, textAlign: "right" }}>Số lượng</th>
              <th style={{ padding: 12, textAlign: "center" }}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: 24, color: "#888" }}>
                  Không có vật tư nào phù hợp.
                </td>
              </tr>
            ) : (
              filtered.map((item, idx) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: 12 }}>{idx + 1}</td>
                  <td style={{ padding: 12 }}>{item.code}</td>
                  <td style={{ padding: 12 }}>{item.name}</td>
                  <td style={{ padding: 12 }}>{item.unit}</td>
                  <td style={{ padding: 12, textAlign: "right" }}>{item.quantity}</td>
                  <td style={{ padding: 12, textAlign: "center" }}>
                    <button style={{ background: "#e3ecfa", color: "#2d4a7a", border: "none", borderRadius: 4, padding: "6px 16px", marginRight: 8, cursor: "pointer" }}>Sửa</button>
                    <button style={{ background: "#fff0f0", color: "#d32f2f", border: "none", borderRadius: 4, padding: "6px 16px", cursor: "pointer" }}>Xóa</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default QLVatTu;
