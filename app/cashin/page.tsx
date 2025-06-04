'use client';

import { useState } from 'react';

export default function CashIn() {
  const [amount, setAmount] = useState('50.00');
  const [showCode, setShowCode] = useState(false);
  const [generatedCode] = useState('MG-789456123'); // Mock code

  const generateCode = () => {
    setShowCode(true);
  };

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
          Add Cash
        </h1>
      </header>

      {!showCode ? (
        // Amount Selection Flow
        <>
          {/* Info Section */}
          <section style={{ marginBottom: '30px', textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              border: '2px solid #ccc',
              borderRadius: '50%',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px'
            }}>
              💰
            </div>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '0 0 10px 0',
              color: '#333'
            }}>
              Add Money to Your Wallet
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#666',
              margin: 0
            }}>
              Visit any MoneyGram agent location to add cash
            </p>
          </section>

          {/* Amount Selection */}
          <section style={{ marginBottom: '30px' }}>
            <div style={{
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#333'
              }}>
                Amount to add
              </label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '15px'
              }}>
                <span style={{ marginRight: '8px' }}>$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    width: '120px',
                    outline: 'none'
                  }}
                />
                <span style={{ 
                  marginLeft: '8px', 
                  fontSize: '16px', 
                  color: '#666' 
                }}>
                  USD
                </span>
              </div>
              
              {/* Quick Amount Buttons */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '10px'
              }}>
                {['25.00', '50.00', '100.00'].map((quickAmount) => (
                  <button
                    key={quickAmount}
                    onClick={() => setAmount(quickAmount)}
                    style={{
                      padding: '8px',
                      fontSize: '14px',
                      backgroundColor: amount === quickAmount ? '#333' : '#fff',
                      color: amount === quickAmount ? '#fff' : '#333',
                      border: '1px solid #333',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    ${quickAmount}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section style={{ marginBottom: '40px' }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#333'
            }}>
              How it works
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                border: '1px solid #eee',
                borderRadius: '8px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  border: '1px solid #333',
                  borderRadius: '50%',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  1
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                    Get your code
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    We'll generate a unique code for your transaction
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                border: '1px solid #eee',
                borderRadius: '8px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  border: '1px solid #333',
                  borderRadius: '50%',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  2
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                    Visit an agent
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    Find a nearby MoneyGram location
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                border: '1px solid #eee',
                borderRadius: '8px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  border: '1px solid #333',
                  borderRadius: '50%',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  3
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                    Give cash + code
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    Money appears in your wallet instantly
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Generate Code Button */}
          <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
            <button
              onClick={generateCode}
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
              Generate Code for ${amount}
            </button>
            
            <p style={{
              textAlign: 'center',
              fontSize: '12px',
              color: '#666',
              marginTop: '15px'
            }}>
              No fees • Money available instantly
            </p>
          </div>
        </>
      ) : (
        // Code Display Flow
        <>
          {/* Success Message */}
          <section style={{ marginBottom: '30px', textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              border: '2px solid #28a745',
              borderRadius: '50%',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              backgroundColor: '#f8fff9'
            }}>
              ✅
            </div>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '0 0 10px 0',
              color: '#333'
            }}>
              Your Code is Ready
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#666',
              margin: 0
            }}>
              Show this code to any MoneyGram agent
            </p>
          </section>

          {/* Code Display */}
          <section style={{ marginBottom: '30px' }}>
            <div style={{
              padding: '25px',
              border: '2px solid #333',
              borderRadius: '12px',
              textAlign: 'center',
              backgroundColor: '#f9f9f9'
            }}>
              <div style={{
                fontSize: '12px',
                color: '#666',
                marginBottom: '10px'
              }}>
                Transaction Code
              </div>
              <div style={{
                fontSize: '24px',
                fontWeight: 'bold',
                fontFamily: 'monospace',
                letterSpacing: '2px',
                marginBottom: '15px',
                color: '#333'
              }}>
                {generatedCode}
              </div>
              <div style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#28a745'
              }}>
                Amount: ${amount}
              </div>
            </div>

            {/* QR Code Placeholder */}
            <div style={{
              marginTop: '20px',
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                border: '2px solid #ccc',
                margin: '0 auto 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px'
              }}>
                📱
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>
                QR Code for quick scanning
              </div>
            </div>
          </section>

          {/* Instructions */}
          <section style={{ marginBottom: '30px' }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#333'
            }}>
              Next steps
            </h3>

            <div style={{
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}>
              <div style={{ marginBottom: '15px' }}>
                <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '5px' }}>
                  📍 Find an agent near you
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  Visit any MoneyGram location (grocery stores, pharmacies, etc.)
                </div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '5px' }}>
                  💬 Tell the agent
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  "I want to add money to my MoneyGram wallet"
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '5px' }}>
                  📱 Show this screen
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  Agent will scan the QR code or enter the transaction code
                </div>
              </div>
            </div>
          </section>

          {/* Back Button */}
          <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
            <button
              onClick={() => window.location.href = '/wallet'}
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
              Back to Wallet
            </button>
          </div>
        </>
      )}
    </div>
  );
} 