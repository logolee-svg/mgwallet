'use client';

import { useState } from 'react';

export default function MobileWalletCashOut() {
  const [currentStep, setCurrentStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [selectedProvider, setSelectedProvider] = useState('');
  const [amount] = useState(147.01); // $150 - $2.99 fee

  const providers = [
    { id: 'venmo', name: 'Venmo', icon: '💙', popular: true },
    { id: 'cashapp', name: 'Cash App', icon: '💚', popular: true },
    { id: 'paypal', name: 'PayPal', icon: '🔵' },
    { id: 'zelle', name: 'Zelle', icon: '⚡' },
    { id: 'applepay', name: 'Apple Pay Cash', icon: '🍎' }
  ];

  const countries = [
    { code: '+1', country: 'United States', flag: '🇺🇸' },
    { code: '+52', country: 'Mexico', flag: '🇲🇽' },
    { code: '+63', country: 'Philippines', flag: '🇵🇭' },
    { code: '+91', country: 'India', flag: '🇮🇳' }
  ];

  if (currentStep === 4) {
    // Success Screen
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
        
        {/* Success Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          paddingTop: '40px'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            border: '3px solid #28a745',
            borderRadius: '50%',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '36px',
            color: '#28a745'
          }}>
            ✓
          </div>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '0 0 10px 0',
            color: '#333'
          }}>
            Transfer Initiated!
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#666',
            margin: 0
          }}>
            Money is on its way to your mobile wallet
          </p>
        </div>

        {/* Reference Number */}
        <section style={{
          padding: '25px',
          border: '2px solid #28a745',
          borderRadius: '12px',
          marginBottom: '30px',
          textAlign: 'center',
          backgroundColor: '#f8f9fa'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#666',
            margin: '0 0 10px 0'
          }}>
            Reference Number
          </p>
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#28a745',
            letterSpacing: '2px',
            marginBottom: '10px'
          }}>
            MW-456789123
          </div>
          <p style={{
            fontSize: '12px',
            color: '#666',
            margin: 0
          }}>
            Save this for your records
          </p>
        </section>

        {/* Transfer Details */}
        <section style={{ marginBottom: '30px' }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#333'
          }}>
            Transfer Details
          </h3>

          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '15px',
              borderBottom: '1px solid #eee'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>To</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{selectedProvider} {countryCode} {phoneNumber}</span>
              </div>
            </div>
            <div style={{
              padding: '15px',
              borderBottom: '1px solid #eee'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>Amount</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>${amount.toFixed(2)}</span>
              </div>
            </div>
            <div style={{
              padding: '15px',
              borderBottom: '1px solid #eee'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>Fee</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>$2.99</span>
              </div>
            </div>
            <div style={{
              padding: '15px',
              backgroundColor: '#f9f9f9'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Total Sent</span>
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#28a745' }}>${amount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Timing Info */}
        <section style={{ marginBottom: '30px' }}>
          <div style={{
            padding: '20px',
            border: '1px solid #28a745',
            borderRadius: '8px',
            backgroundColor: '#f8fff9'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px'
            }}>
              <span style={{ fontSize: '20px', marginRight: '10px' }}>⚡</span>
              <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Instant Transfer</span>
            </div>
            <p style={{
              fontSize: '12px',
              color: '#666',
              margin: 0
            }}>
              Money should appear in your {selectedProvider} account within minutes
            </p>
          </div>
        </section>

        {/* Actions */}
        <div style={{ marginTop: 'auto' }}>
          <button 
            onClick={() => window.location.href = '/wallet'}
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: '#333',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              marginBottom: '10px'
            }}
          >
            Back to Wallet
          </button>
          <button style={{
            width: '100%',
            padding: '16px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: '#fff',
            color: '#333',
            border: '1px solid #333',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            Share Receipt
          </button>
        </div>
      </div>
    );
  }

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
          onClick={() => {
            if (currentStep === 1) {
              window.history.back();
            } else {
              setCurrentStep(currentStep - 1);
            }
          }}
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
          Mobile Wallet Transfer
        </h1>
      </header>

      {/* Progress Indicator */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px'
      }}>
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: currentStep >= step ? '#333' : '#ccc',
              margin: '0 4px'
            }}
          />
        ))}
      </div>

      {/* Step 1: Phone Number */}
      {currentStep === 1 && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
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
              📱
            </div>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '0 0 10px 0',
              color: '#333'
            }}>
              Enter Mobile Number
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#666',
              margin: 0
            }}>
              We'll send $147.01 to your mobile wallet
            </p>
          </div>

          {/* Country Selection */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#333'
            }}>
              Country
            </label>
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px'
              }}
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.country} ({country.code})
                </option>
              ))}
            </select>
          </div>

          {/* Phone Number Input */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#333'
            }}>
              Phone Number
            </label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{
                padding: '12px 15px',
                border: '1px solid #ddd',
                borderRight: 'none',
                borderRadius: '8px 0 0 8px',
                backgroundColor: '#f9f9f9',
                fontSize: '16px'
              }}>
                {countryCode}
              </span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="555-123-4567"
                style={{
                  flex: 1,
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '0 8px 8px 0',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div style={{ marginTop: 'auto' }}>
            <button
              disabled={!phoneNumber}
              onClick={() => setCurrentStep(2)}
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: phoneNumber ? '#333' : '#f5f5f5',
                color: phoneNumber ? '#fff' : '#999',
                border: 'none',
                borderRadius: '8px',
                cursor: phoneNumber ? 'pointer' : 'not-allowed'
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Provider Selection */}
      {currentStep === 2 && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '0 0 10px 0',
              color: '#333'
            }}>
              Choose Mobile Wallet
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#666',
              margin: 0
            }}>
              Select where to send your money
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '30px'
          }}>
            {providers.map((provider) => (
              <div
                key={provider.id}
                onClick={() => setSelectedProvider(provider.name)}
                style={{
                  padding: '20px',
                  border: selectedProvider === provider.name ? '2px solid #333' : '1px solid #ddd',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  backgroundColor: selectedProvider === provider.name ? '#f0f8ff' : '#fff',
                  position: 'relative'
                }}
              >
                {provider.popular && (
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
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '32px', marginRight: '15px' }}>
                    {provider.icon}
                  </span>
                  <div>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#333'
                    }}>
                      {provider.name}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#666'
                    }}>
                      Instant transfer • $2.99 fee
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'auto' }}>
            <button
              disabled={!selectedProvider}
              onClick={() => setCurrentStep(3)}
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: selectedProvider ? '#333' : '#f5f5f5',
                color: selectedProvider ? '#fff' : '#999',
                border: 'none',
                borderRadius: '8px',
                cursor: selectedProvider ? 'pointer' : 'not-allowed'
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Confirmation */}
      {currentStep === 3 && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '0 0 10px 0',
              color: '#333'
            }}>
              Confirm Transfer
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#666',
              margin: 0
            }}>
              Please review your transfer details
            </p>
          </div>

          {/* Transfer Summary */}
          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            marginBottom: '30px',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '15px',
              borderBottom: '1px solid #eee'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>Sending to</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{selectedProvider}</span>
              </div>
            </div>
            <div style={{
              padding: '15px',
              borderBottom: '1px solid #eee'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>Phone Number</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{countryCode} {phoneNumber}</span>
              </div>
            </div>
            <div style={{
              padding: '15px',
              borderBottom: '1px solid #eee'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>Amount</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>${amount.toFixed(2)}</span>
              </div>
            </div>
            <div style={{
              padding: '15px',
              borderBottom: '1px solid #eee'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>Transfer Fee</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>$2.99</span>
              </div>
            </div>
            <div style={{
              padding: '15px',
              backgroundColor: '#f9f9f9'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>They'll Receive</span>
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#28a745' }}>${amount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 'auto' }}>
            <button
              onClick={() => setCurrentStep(4)}
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Send Money
            </button>
            <p style={{
              textAlign: 'center',
              fontSize: '12px',
              color: '#666',
              marginTop: '15px'
            }}>
              🔒 Your transfer is secure and encrypted
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 