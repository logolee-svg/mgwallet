'use client';

export default function WelcomeLanding() {
  return (
    <div style={{
      maxWidth: '375px',
      margin: '0 auto',
      minHeight: '100vh',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #ddd' // Wireframe border
    }}>
      
      {/* Header with MoneyGram Logo */}
      <header style={{
        textAlign: 'center',
        paddingBottom: '20px',
        borderBottom: '1px solid #eee',
        marginBottom: '30px'
      }}>
        <div style={{
          width: '120px',
          height: '40px',
          border: '1px solid #ccc',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          color: '#666'
        }}>
          MoneyGram Logo
        </div>
      </header>

      {/* Welcome Message */}
      <section style={{ marginBottom: '30px' }}>
        <div style={{
          border: '1px solid #ddd',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            margin: '0 0 10px 0',
            color: '#333'
          }}>
            Money from John Smith
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#666',
            margin: '0 0 15px 0'
          }}>
            "For your birthday! Hope you can treat yourself to something nice."
          </p>
          <div style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#000'
          }}>
            $150.00 USD
          </div>
        </div>
      </section>

      {/* Why Use This Wallet */}
      <section style={{ marginBottom: '40px' }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '15px',
          color: '#333'
        }}>
          Why use this wallet?
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            border: '1px solid #eee'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              border: '1px solid #ccc',
              marginRight: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px'
            }}>
              ✓
            </div>
            <span style={{ fontSize: '14px', color: '#333' }}>
              Safe & secure - your money is protected
            </span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            border: '1px solid #eee'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              border: '1px solid #ccc',
              marginRight: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px'
            }}>
              ✓
            </div>
            <span style={{ fontSize: '14px', color: '#333' }}>
              No bank account needed
            </span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            border: '1px solid #eee'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              border: '1px solid #ccc',
              marginRight: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px'
            }}>
              ✓
            </div>
            <span style={{ fontSize: '14px', color: '#333' }}>
              Instant access to your money
            </span>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
        <button 
          onClick={() => window.location.href = '/onboarding'}
          style={{
            width: '100%',
            padding: '16px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: '#fff',
            border: '2px solid #333',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Download App to Get Your Money
        </button>
        
        <p style={{
          textAlign: 'center',
          fontSize: '12px',
          color: '#666',
          marginTop: '15px'
        }}>
          MoneyGram Trusted Worldwide
        </p>
      </div>
    </div>
  )
} 