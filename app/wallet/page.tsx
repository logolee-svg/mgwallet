'use client';

export default function WalletHome() {
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        paddingBottom: '15px',
        borderBottom: '1px solid #eee'
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
        onClick={() => window.location.href = '/settings'}
        >
          ⚙️
        </div>
      </header>

      {/* Balance Card */}
      <section style={{
        padding: '25px',
        border: '2px solid #333',
        borderRadius: '12px',
        marginBottom: '30px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9'
      }}>
        <p style={{
          fontSize: '14px',
          color: '#666',
          margin: '0 0 8px 0'
        }}>
          Your Balance
        </p>
        <div style={{
          fontSize: '36px',
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
      <section style={{ marginBottom: '30px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '12px'
        }}>
          <button 
            onClick={() => window.location.href = '/cashout'}
            style={{
              padding: '20px 10px',
              border: '1px solid #333',
              borderRadius: '8px',
              backgroundColor: '#fff',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div style={{
              fontSize: '24px',
              marginBottom: '8px'
            }}>
              💵
            </div>
            <div style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Cash Out
            </div>
          </button>

          <button 
            onClick={() => window.location.href = '/cashin'}
            style={{
              padding: '20px 10px',
              border: '1px solid #333',
              borderRadius: '8px',
              backgroundColor: '#fff',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div style={{
              fontSize: '24px',
              marginBottom: '8px'
            }}>
              ➕
            </div>
            <div style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Add Cash
            </div>
          </button>

          <button 
            onClick={() => window.location.href = '/virtualcard'}
            style={{
              padding: '20px 10px',
              border: '1px solid #333',
              borderRadius: '8px',
              backgroundColor: '#fff',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <div style={{
              fontSize: '24px',
              marginBottom: '8px'
            }}>
              💳
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

      {/* Recent Activity */}
      <section style={{ flex: 1 }}>
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

      {/* Trust Badge */}
      <footer style={{
        textAlign: 'center',
        marginTop: '20px',
        paddingTop: '15px',
        borderTop: '1px solid #eee'
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