'use client';

export default function Support() {
  const faqs = [
    {
      question: "How do I get my money?",
      answer: "You can cash out to pickup locations, mobile wallets, or bank accounts. Choose your preferred method in the Cash Out section."
    },
    {
      question: "Is my money safe?",
      answer: "Yes! Your funds are protected with bank-level security and MoneyGram's trusted global network."
    },
    {
      question: "How much does it cost?",
      answer: "Cash pickup: $3.99, Mobile wallet: $2.99, Bank deposit: $1.99. Virtual cards are free to create."
    },
    {
      question: "Do I need a bank account?",
      answer: "No! You can use your wallet without a bank account. Cash out at pickup locations or use your virtual card."
    },
    {
      question: "How do I add money to my wallet?",
      answer: "Generate a code in the Add Cash section, then visit any MoneyGram agent location with cash and your code."
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
          onClick={() => window.history.back()}
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
          Help & Support
        </h1>
      </header>

      {/* Trust Section */}
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
          🛡️
        </div>
        <h2 style={{
          fontSize: '20px',
          fontWeight: 'bold',
          margin: '0 0 10px 0',
          color: '#333'
        }}>
          MoneyGram Trusted Worldwide
        </h2>
        <p style={{
          fontSize: '14px',
          color: '#666',
          margin: 0
        }}>
          Over 150 years of trusted money services
        </p>
      </section>

      {/* Trust Badges */}
      <section style={{ marginBottom: '30px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '20px',
          border: '1px solid #eee',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '5px' }}>🌍</div>
            <div style={{ fontSize: '12px', fontWeight: 'bold' }}>200+</div>
            <div style={{ fontSize: '10px', color: '#666' }}>Countries</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '5px' }}>📍</div>
            <div style={{ fontSize: '12px', fontWeight: 'bold' }}>350K+</div>
            <div style={{ fontSize: '10px', color: '#666' }}>Locations</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '5px' }}>🔒</div>
            <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Bank</div>
            <div style={{ fontSize: '10px', color: '#666' }}>Level Security</div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '15px',
          color: '#333'
        }}>
          Quick Help
        </h3>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <button style={{
            padding: '15px',
            border: '1px solid #333',
            borderRadius: '8px',
            backgroundColor: '#fff',
            cursor: 'pointer',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '20px', marginRight: '15px' }}>💬</span>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Chat with Support</div>
              <div style={{ fontSize: '12px', color: '#666' }}>Available 24/7</div>
            </div>
          </button>

          <button style={{
            padding: '15px',
            border: '1px solid #333',
            borderRadius: '8px',
            backgroundColor: '#fff',
            cursor: 'pointer',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '20px', marginRight: '15px' }}>📞</span>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Call Support</div>
              <div style={{ fontSize: '12px', color: '#666' }}>1-800-MONEYGRAM</div>
            </div>
          </button>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ flex: 1 }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '15px',
          color: '#333'
        }}>
          Frequently Asked Questions
        </h3>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          {faqs.map((faq, index) => (
            <details
              key={index}
              style={{
                border: '1px solid #eee',
                borderRadius: '8px',
                padding: '15px'
              }}
            >
              <summary style={{
                fontWeight: 'bold',
                fontSize: '14px',
                cursor: 'pointer',
                marginBottom: '10px'
              }}>
                {faq.question}
              </summary>
              <p style={{
                fontSize: '12px',
                color: '#666',
                margin: 0,
                lineHeight: '1.4'
              }}>
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        marginTop: '30px',
        paddingTop: '20px',
        borderTop: '1px solid #eee',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '12px',
          color: '#666',
          margin: '0 0 10px 0'
        }}>
          MoneyGram International © 2024
        </p>
        <p style={{
          fontSize: '12px',
          color: '#666',
          margin: 0
        }}>
          Licensed & Regulated Financial Services
        </p>
      </footer>
    </div>
  );
} 