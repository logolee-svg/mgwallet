'use client';

export default function Settings() {
  return (
    <div style={{
      maxWidth: '375px',
      margin: '0 auto',
      minHeight: '100vh',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #ddd'
    }}>
      
      {/* Header */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px',
        paddingBottom: '15px',
        borderBottom: '1px solid #eee'
      }}>
        <button 
          onClick={() => window.location.href = '/wallet'}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            marginRight: '15px'
          }}
        >
          ←
        </button>
        <h1 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          margin: 0,
          color: '#333'
        }}>
          Settings
        </h1>
      </header>

      {/* Profile Section */}
      <section style={{ marginBottom: '30px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            border: '2px solid #ccc',
            borderRadius: '50%',
            marginRight: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px'
          }}>
            👤
          </div>
          <div>
            <div style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              John Smith
            </div>
            <div style={{
              fontSize: '12px',
              color: '#666'
            }}>
              john.smith@email.com
            </div>
            <div style={{
              fontSize: '12px',
              color: '#666'
            }}>
              +1 (555) 123-4567
            </div>
          </div>
        </div>
      </section>

      {/* Account Settings */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '15px',
          color: '#333'
        }}>
          Account
        </h3>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <button style={{
            padding: '15px 20px',
            backgroundColor: '#fff',
            border: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '14px' }}>Personal Information</span>
            <span style={{ fontSize: '18px', color: '#666' }}>›</span>
          </button>
          
          <div style={{ height: '1px', backgroundColor: '#eee' }} />
          
          <button style={{
            padding: '15px 20px',
            backgroundColor: '#fff',
            border: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '14px' }}>Change Password</span>
            <span style={{ fontSize: '18px', color: '#666' }}>›</span>
          </button>

          <div style={{ height: '1px', backgroundColor: '#eee' }} />

          <button style={{
            padding: '15px 20px',
            backgroundColor: '#fff',
            border: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '14px' }}>Identity Verification</span>
            <span style={{ fontSize: '12px', color: '#28a745', marginRight: '10px' }}>✓ Verified</span>
            <span style={{ fontSize: '18px', color: '#666' }}>›</span>
          </button>
        </div>
      </section>

      {/* Security Settings */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '15px',
          color: '#333'
        }}>
          Security
        </h3>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <button style={{
            padding: '15px 20px',
            backgroundColor: '#fff',
            border: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '14px' }}>Two-Factor Authentication</span>
            <span style={{ fontSize: '12px', color: '#28a745', marginRight: '10px' }}>On</span>
            <span style={{ fontSize: '18px', color: '#666' }}>›</span>
          </button>

          <div style={{ height: '1px', backgroundColor: '#eee' }} />

          <button style={{
            padding: '15px 20px',
            backgroundColor: '#fff',
            border: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '14px' }}>Biometric Login</span>
            <span style={{ fontSize: '12px', color: '#28a745', marginRight: '10px' }}>Face ID</span>
            <span style={{ fontSize: '18px', color: '#666' }}>›</span>
          </button>

          <div style={{ height: '1px', backgroundColor: '#eee' }} />

          <button style={{
            padding: '15px 20px',
            backgroundColor: '#fff',
            border: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '14px' }}>Transaction Limits</span>
            <span style={{ fontSize: '18px', color: '#666' }}>›</span>
          </button>
        </div>
      </section>

      {/* Support & Legal */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '15px',
          color: '#333'
        }}>
          Support & Legal
        </h3>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <button 
            onClick={() => window.location.href = '/support'}
            style={{
              padding: '15px 20px',
              backgroundColor: '#fff',
              border: 'none',
              textAlign: 'left',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span style={{ fontSize: '14px' }}>Help & Support</span>
            <span style={{ fontSize: '18px', color: '#666' }}>›</span>
          </button>

          <div style={{ height: '1px', backgroundColor: '#eee' }} />

          <button style={{
            padding: '15px 20px',
            backgroundColor: '#fff',
            border: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '14px' }}>Terms of Service</span>
            <span style={{ fontSize: '18px', color: '#666' }}>›</span>
          </button>

          <div style={{ height: '1px', backgroundColor: '#eee' }} />

          <button style={{
            padding: '15px 20px',
            backgroundColor: '#fff',
            border: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '14px' }}>Privacy Policy</span>
            <span style={{ fontSize: '18px', color: '#666' }}>›</span>
          </button>
        </div>
      </section>

      {/* Sign Out */}
      <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
        <button style={{
          width: '100%',
          padding: '16px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#fff',
          border: '1px solid #dc3545',
          borderRadius: '8px',
          cursor: 'pointer',
          color: '#dc3545'
        }}>
          Sign Out
        </button>
      </div>
    </div>
  );
} 