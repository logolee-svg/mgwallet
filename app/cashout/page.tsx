'use client';

import { useState } from 'react';

export default function CashOut() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [amount, setAmount] = useState('150.00');

  const cashOutOptions = [
    {
      id: 'pickup',
      title: 'Cash Pickup',
      icon: '📍',
      description: 'Get cash at thousands of locations worldwide',
      fee: '$3.99',
      timeframe: 'Ready in minutes',
      popular: true
    },
    {
      id: 'mobile',
      title: 'Mobile Wallet',
      icon: '📱',
      description: 'Send to mobile money accounts',
      fee: '$2.99',
      timeframe: 'Instant transfer'
    },
    {
      id: 'bank',
      title: 'Bank Deposit',
      icon: '🏦',
      description: 'Direct deposit to bank account',
      fee: '$1.99',
      timeframe: '1-2 business days'
    }
  ];

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
          Cash Out
        </h1>
      </header>

      {/* Amount Section */}
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
            Amount to cash out
          </label>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '24px',
            fontWeight: 'bold'
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
          <p style={{
            fontSize: '12px',
            color: '#666',
            margin: '8px 0 0 0'
          }}>
            Available balance: $150.00
          </p>
        </div>
      </section>

      {/* Cash Out Options */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '15px',
          color: '#333'
        }}>
          Choose how to receive your money
        </h3>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {cashOutOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => setSelectedOption(option.id)}
              style={{
                padding: '20px',
                border: selectedOption === option.id ? '2px solid #333' : '1px solid #ddd',
                borderRadius: '12px',
                cursor: 'pointer',
                backgroundColor: selectedOption === option.id ? '#f0f8ff' : '#fff',
                position: 'relative'
              }}
            >
              {option.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '15px',
                  backgroundColor: '#333',
                  color: '#fff',
                  fontSize: '10px',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontWeight: 'bold'
                }}>
                  POPULAR
                </div>
              )}
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '10px'
              }}>
                <div style={{
                  fontSize: '24px',
                  marginRight: '15px'
                }}>
                  {option.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    margin: '0 0 5px 0',
                    color: '#333'
                  }}>
                    {option.title}
                  </h4>
                  <p style={{
                    fontSize: '12px',
                    color: '#666',
                    margin: '0 0 10px 0'
                  }}>
                    {option.description}
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '10px',
                borderTop: '1px solid #eee'
              }}>
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#333'
                  }}>
                    Fee: {option.fee}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#666'
                  }}>
                    {option.timeframe}
                  </div>
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  You'll receive: ${(parseFloat(amount) - parseFloat(option.fee.replace('$', ''))).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Agent Locations Preview (if cash pickup selected) */}
      {selectedOption === 'pickup' && (
        <section style={{ marginBottom: '30px' }}>
          <h4 style={{
            fontSize: '14px',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#333'
          }}>
            Nearby pickup locations
          </h4>
          <div style={{
            height: '120px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px'
          }}>
            <div style={{ textAlign: 'center', color: '#666' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>🗺️</div>
              <div style={{ fontSize: '12px' }}>Map will show pickup locations</div>
            </div>
          </div>
          <div style={{
            fontSize: '12px',
            color: '#666',
            textAlign: 'center'
          }}>
            📍 15 locations within 5 miles of you
          </div>
        </section>
      )}

      {/* Continue Button */}
      <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
        <button
          disabled={!selectedOption}
          onClick={() => {
            if (selectedOption === 'pickup') {
              window.location.href = '/cashout/pickup';
            } else if (selectedOption === 'mobile') {
              window.location.href = '/cashout/mobile';
            } else if (selectedOption === 'bank') {
              window.location.href = '/cashout/bank';
            }
          }}
          style={{
            width: '100%',
            padding: '16px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: selectedOption ? '#fff' : '#f5f5f5',
            border: selectedOption ? '2px solid #333' : '1px solid #ccc',
            borderRadius: '8px',
            cursor: selectedOption ? 'pointer' : 'not-allowed',
            color: selectedOption ? '#333' : '#999'
          }}
        >
          {selectedOption ? 'Continue' : 'Select an option to continue'}
        </button>
        
        <p style={{
          textAlign: 'center',
          fontSize: '12px',
          color: '#666',
          marginTop: '15px'
        }}>
          🔒 Your transaction is secure and encrypted
        </p>
      </div>
    </div>
  );
} 