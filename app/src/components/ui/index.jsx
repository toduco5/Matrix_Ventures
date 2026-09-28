import React from 'react';

export function RoleCard({ title, desc, action }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{desc}</p>
      <button className="btn btn-outline" style={{ width: '100%' }}>{action}</button>
    </div>
  );
}

export function ProcessStepper() {
  const steps = ['Đăng ký & xác thực', 'Vào cộng đồng', 'Ghép nối', 'Thẩm định', 'Đồng hành'];
  return (
    <div className="stepper">
      {steps.map((s, i) => (
        <div key={i} className={`step ${i === 2 ? 'active' : ''}`}>
          {i + 1}. {s}
        </div>
      ))}
    </div>
  );
}
