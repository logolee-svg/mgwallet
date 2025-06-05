'use client';

import { useRouter } from 'next/navigation';

export default function WalletHome() {
  const router = useRouter();

  return (
    <div style={{
      maxWidth: '375px',
      margin: '0 auto',
      height: '100dvh',
      maxHeight: '923px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #ddd',
      overflow: 'hidden',
      boxSizing: 'border-box'
    }}>
      
      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        paddingBottom: '15px',
        borderBottom: '1px solid #eee',
        flexShrink: 0
      }}>
        <div>
          <h1 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            margin: 0,
            color: '#333'
          }}>
            Hello, John
          </h1>
          <p style={{
            fontSize: '12px',
            color: '#666',
            margin: '2px 0 0 0'
          }}>
            Welcome to your wallet
          </p>
        </div>
        <div style={{
          width: '32px',
          height: '32px',
          border: '1px solid #ccc',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          cursor: 'pointer'
        }}
        onClick={() => router.push('/settings')}
        >
          ⚙️
        </div>
      </header>

      {/* Balance Card */}
      <section style={{
        padding: '20px',
        border: '2px solid #333',
        borderRadius: '12px',
        marginBottom: '20px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        flexShrink: 0
      }}>
        <p style={{
          fontSize: '14px',
          color: '#666',
          margin: '0 0 8px 0'
        }}>
          Your Balance
        </p>
        <div style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#000',
          marginBottom: '8px'
        }}>
          $150.00
        </div>
        <p style={{
          fontSize: '12px',
          color: '#666',
          margin: 0
        }}>
          USDc in your wallet
        </p>
      </section>

      {/* Action Buttons */}
      <section style={{ 
        marginBottom: '20px',
        flexShrink: 0
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '12px'
        }}>
          <button 
            onClick={() => router.push('/cashout')}
            style={{
              padding: '16px 8px',
              border: '1px solid #333',
              borderRadius: '8px',
              backgroundColor: '#fff',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div style={{
              fontSize: '20px',
              marginBottom: '6px'
            }}>
              💵
            </div>
            <div style={{
              fontSize: '13px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Cash Out
            </div>
          </button>

          <button 
            onClick={() => router.push('/cashin')}
            style={{
              padding: '16px 8px',
              border: '1px solid #333',
              borderRadius: '8px',
              backgroundColor: '#fff',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div style={{
              fontSize: '20px',
              marginBottom: '6px'
            }}>
              ➕
            </div>
            <div style={{
              fontSize: '13px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Add Cash
            </div>
          </button>

          <button 
            onClick={() => router.push('/virtualcard')}
            style={{
              padding: '16px 8px',
              border: '1px solid #333',
              borderRadius: '8px',
              backgroundColor: '#fff',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div style={{
              fontSize: '20px',
              marginBottom: '6px'
            }}>
              ��
            </div>
            <div style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Virtual Card
            </div>
          </button>
        </div>
      </section>

      {/* Recent Activity - Scrollable */}
      <section style={{ 
        flex: '1 1 auto',
        overflowY: 'auto',
        minHeight: 0,
        marginBottom: '15px'
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '15px',
          color: '#333'
        }}>
          Recent Activity
        </h3>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {/* Transaction 1 - Money Received */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px',
            border: '1px solid #eee',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '1px solid #ccc',
                borderRadius: '50%',
                marginRight: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px'
              }}>
                📥
              </div>
              <div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  Money received
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#666'
                }}>
                  From John Smith • Today
                </div>
              </div>
            </div>
            <div style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#28a745'
            }}>
              +$150.00
            </div>
          </div>

          {/* Placeholder for more transactions */}
          <div style={{
            padding: '20px',
            border: '1px dashed #ccc',
            borderRadius: '8px',
            textAlign: 'center',
            color: '#666',
            fontSize: '14px'
          }}>
            More activity will appear here
          </div>
        </div>
      </section>

      {/* Trust Badge - Always visible */}
      <footer style={{
        textAlign: 'center',
        paddingTop: '15px',
        borderTop: '1px solid #eee',
        flexShrink: 0
      }}>
        <p style={{
          fontSize: '12px',
          color: '#666',
          margin: 0
        }}>
          🔒 MoneyGram Trusted Worldwide
        </p>
      </footer>
    </div>
  );
} 