import React from 'react';


function Header() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
      <h1 style={{ margin: '0 0 8px 0', color: '#1a202c', fontSize: '28px' }}>Nguyễn Đức Khoa</h1>
      <p style={{ margin: '0 0 6px 0', fontWeight: 'bold', color: '#2b6cb0', fontSize: '16px' }}>
        Sinh viên ngành AIoT - PTIT
      </p>
      <p style={{ margin: 0, color: '#718096', fontSize: '14px' }}>
        Mã SV: B25DCTV036 | Email: b25dctv036@ptit.edu.vn
      </p>
      <hr style={{ marginTop: '16px', border: 'none', borderTop: '1px solid #e2e8f0' }} />
    </div>
  );
}


function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{
        color: '#2b6cb0',
        borderBottom: '2px solid #ebf8ff',
        paddingBottom: '6px',
        marginBottom: '10px',
        fontSize: '18px'
      }}>
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}


function SkillList({ skills }) {
  return (
    <ul style={{ paddingLeft: '20px', margin: 0 }}>
      {skills.map((item, index) => (
        <li key={index} style={{ marginBottom: '6px', color: '#2d3748', fontSize: '15px' }}>
          {item}
        </li>
      ))}
    </ul>
  );
}


function ProjectList({ projects }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {projects.map((proj, index) => (
        <div key={index} style={{
          backgroundColor: '#f7fafc',
          padding: '12px 16px',
          borderRadius: '6px',
          border: '1px solid #e2e8f0'
        }}>
          <h4 style={{ margin: '0 0 4px 0', color: '#2d3748', fontSize: '16px' }}>{proj.name}</h4>
          <p style={{ margin: '0 0 6px 0', fontSize: '14px', color: '#4a5568' }}>
            {proj.description}
          </p>
          <span style={{ fontSize: '13px', color: '#718096' }}>
            <strong>Công nghệ:</strong> {proj.tech}
          </span>
        </div>
      ))}
    </div>
  );
}


export default function App() {

  const skillsData = [
    'Lập trình cơ bản với Python',
    'Tìm hiểu phần cứng & Vi điều khiển IoT',
    'HTML, CSS và ReactJS cơ bản',
    'Sử dụng Git & GitHub'
  ];

  
  const projectsData = [
    {
      name: 'Ứng dụng Virtual Calculator',
      description: 'Máy tính cá nhân tính toán biểu thức cơ bản xây dựng bằng React Component.',
      tech: 'React, Vite, CSS'
    },
    {
      name: 'Mô hình giám sát nhiệt độ IoT cơ bản',
      description: 'Dự án tìm hiểu cảm biến và giao thức truyền dữ liệu trong hệ thống AIoT.',
      tech: 'C/C++, ESP32, MQTT'
    }
  ];

  return (
    <div style={{
      maxWidth: '650px',
      margin: '40px auto',
      padding: '28px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      fontFamily: 'Arial, sans-serif'
    }}>
  
      <Header />

      <Section title="Giới thiệu bản thân">
        <p style={{ margin: 0, color: '#4a5568', lineHeight: '1.6', fontSize: '15px' }}>
          Sinh viên năm 2 ngành Trí tuệ nhân tạo vạn vật (AIoT) tại Học viện Công nghệ Bưu chính Viễn thông (PTIT).
          Đang học tập các kiến thức về lập trình web, hệ thống nhúng và xử lý dữ liệu.
        </p>
      </Section>

     
      <Section title="Kỹ năng">
        <SkillList skills={skillsData} />
      </Section>

      
      <Section title="Dự án học tập">
        <ProjectList projects={projectsData} />
      </Section>
    </div>
  );
}