'use client';

import { useState } from 'react';

export default function VirtualCard() {
  const [hasCard, setHasCard] = useState(false);
  const [showCardDetails, setShowCardDetails] = useState(false);

  const cardDetails = {
    number: '**** **** **** 8742',
    fullNumber: '4532 1234 5678 8742',
    expiry: '12/28',
    cvv: '***',
    fullCvv: '123',
    name: 'JOHN SMITH'
  };

  const createCard = () => {
    setHasCard(true);
  };

  const toggleCardDetails = () => {
    setShowCardDetails(!showCardDetails);
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
          Virtual Card
        </h1>
      </header>

      {!hasCard ? (
        // Card Creation Flow
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
              💳
            </div>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '0 0 10px 0',
              color: '#333'
            }}>
              Get Your Virtual Card
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#666',
              margin: 0
            }}>
              Shop online or add to your mobile wallet instantly
            </p>
          </section>

          {/* Benefits */}
          <section style={{ marginBottom: '40px' }}>
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
                  width: '40px',
                  height: '40px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px'
                }}>
                  🛒
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                    Shop online anywhere
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    Use your virtual card for online purchases
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
                  width: '40px',
                  height: '40px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px'
                }}>
                  📱
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                    Add to Apple/Google Pay
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    Tap to pay at stores with your phone
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
                  width: '40px',
                  height: '40px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px'
                }}>
                  🔒
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                    Secure & protected
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    Bank-level security for all your transactions
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Create Card Button */}
          <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
            <button
              onClick={createCard}
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
              Create Virtual Card
            </button>
            
            <p style={{
              textAlign: 'center',
              fontSize: '12px',
              color: '#666',
              marginTop: '15px'
            }}>
              Free to create • Ready in seconds
            </p>
          </div>
        </>
      ) : (
        // Card Details Flow
        <>
          {/* Virtual Card Display */}
          <section style={{ marginBottom: '30px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #333 0%, #555 100%)',
              borderRadius: '12px',
              padding: '20px',
              color: '#fff',
              position: 'relative',
              marginBottom: '15px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '30px'
              }}>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  MoneyGram
                </div>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  DEBIT
                </div>
              </div>

              <div style={{
                fontSize: '18px',
                fontFamily: 'monospace',
                letterSpacing: '2px',
                marginBottom: '20px'
              }}>
                {showCardDetails ? cardDetails.fullNumber : cardDetails.number}
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
              }}>
                <div>
                  <div style={{ fontSize: '10px', marginBottom: '5px' }}>
                    CARDHOLDER NAME
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
                    {cardDetails.name}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '10px', marginBottom: '5px' }}>
                    EXPIRES
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
                    {cardDetails.expiry}
                  </div>
                </div>
              </div>
            </div>

            {/* Card Controls */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '20px'
            }}>
              <button
                onClick={toggleCardDetails}
                style={{
                  flex: 1,
                  padding: '12px',
                  fontSize: '14px',
                  backgroundColor: '#fff',
                  border: '1px solid #333',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                {showCardDetails ? '🙈 Hide Details' : '👁️ Show Details'}
              </button>
              <div style={{
                flex: 1,
                padding: '12px',
                fontSize: '14px',
                backgroundColor: '#f9f9f9',
                border: '1px solid #ddd',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                CVV: {showCardDetails ? cardDetails.fullCvv : cardDetails.cvv}
              </div>
            </div>
          </section>

          {/* Digital Wallet Options */}
          <section style={{ marginBottom: '30px' }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#333'
            }}>
              Add to Digital Wallet
            </h3>

            <div style={{
              display: 'flex',
              gap: '10px'
            }}>
              <button style={{
                flex: 1,
                padding: '15px',
                border: '1px solid #333',
                borderRadius: '8px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '24px', marginBottom: '5px' }}>🍎</div>
                <div style={{ fontSize: '12px', fontWeight: 'bold' }}>
                  Apple Pay
                </div>
              </button>
              
              <button style={{
                flex: 1,
                padding: '15px',
                border: '1px solid #333',
                borderRadius: '8px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '24px', marginBottom: '5px' }}>🟢</div>
                <div style={{ fontSize: '12px', fontWeight: 'bold' }}>
                  Google Pay
                </div>
              </button>
            </div>
          </section>

          {/* Physical Card Option */}
          <section style={{ marginBottom: '30px' }}>
            <div style={{
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}>
              <h4 style={{
                fontSize: '14px',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: '#333'
              }}>
                Want a physical card too?
              </h4>
              <p style={{
                fontSize: '12px',
                color: '#666',
                marginBottom: '15px'
              }}>
                Get a physical card mailed to you for in-store purchases
              </p>
              <button style={{
                width: '100%',
                padding: '12px',
                fontSize: '14px',
                fontWeight: 'bold',
                backgroundColor: '#fff',
                border: '1px solid #333',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>
                Order Physical Card ($5.99)
              </button>
            </div>
          </section>

          {/* Usage Tips */}
          <section style={{ marginBottom: '30px' }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#333'
            }}>
              How to use your card
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              <div style={{
                padding: '12px',
                border: '1px solid #eee',
                borderRadius: '8px',
                fontSize: '12px'
              }}>
                💻 <strong>Online shopping:</strong> Use the card number, expiry, and CVV
              </div>
              <div style={{
                padding: '12px',
                border: '1px solid #eee',
                borderRadius: '8px',
                fontSize: '12px'
              }}>
                📱 <strong>Mobile payments:</strong> Add to Apple/Google Pay and tap to pay
              </div>
              <div style={{
                padding: '12px',
                border: '1px solid #eee',
                borderRadius: '8px',
                fontSize: '12px'
              }}>
                💰 <strong>Balance:</strong> Your card uses funds from your wallet balance
              </div>
            </div>
          </section>

          {/* Back to Wallet */}
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