'use client';

import { useRouter } from 'next/navigation';

export default function WelcomeLanding() {
  const router = useRouter();

  return (
    <div style={{
      maxWidth: '375px',
      margin: '0 auto',
      height: '100dvh', // Use dynamic viewport height for mobile
      maxHeight: '923px', // iPhone 14/15 Pro max height
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #ddd',
      overflow: 'hidden', // Prevent content overflow
      boxSizing: 'border-box'
    }}>
      
      {/* Header with MoneyGram Logo */}
      <header style={{
        textAlign: 'center',
        paddingBottom: '20px',
        borderBottom: '1px solid #eee',
        marginBottom: '20px', // Reduced from 30px
        flexShrink: 0 // Prevent header from shrinking
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
      <section style={{ 
        marginBottom: '20px', // Reduced from 30px
        flexShrink: 0 // Prevent from shrinking
      }}>
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

      {/* Why Use This Wallet - Scrollable if needed */}
      <section style={{ 
        marginBottom: '20px', // Reduced from 40px
        flex: '1 1 auto', // Allow to grow/shrink as needed
        overflowY: 'auto', // Allow scrolling if content is too long
        minHeight: 0 // Allow flexbox to shrink below content size
      }}>
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

      {/* CTA Button - Always visible at bottom */}
      <div style={{ 
        paddingTop: '20px',
        flexShrink: 0 // Always preserve button space
      }}>
        <button 
          onClick={() => router.push('/onboarding')}
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
          marginTop: '15px',
          marginBottom: 0 // Remove bottom margin
        }}>
          MoneyGram Trusted Worldwide
        </p>
      </div>
    </div>
  )
} 