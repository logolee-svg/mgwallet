'use client';

import { useState } from 'react';

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
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
      
      {/* Progress Indicator */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px',
        gap: '8px'
      }}>
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: currentStep >= step ? '#333' : '#ccc',
              border: '1px solid #999'
            }}
          />
        ))}
      </div>

      {/* Step 1: Phone Verification */}
      {currentStep === 1 && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              border: '2px solid #ccc',
              borderRadius: '50%',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              📱
            </div>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '0 0 10px 0'
            }}>
              Verify Your Phone
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#666',
              margin: 0
            }}>
              We'll send you a code to keep your money safe
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '8px'
            }}>
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 123-4567"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            onClick={nextStep}
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: '#fff',
              border: '2px solid #333',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: 'auto'
            }}
          >
            Send Code
          </button>
        </div>
      )}

      {/* Step 2: Name & Consent */}
      {currentStep === 2 && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              border: '2px solid #ccc',
              borderRadius: '50%',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              👤
            </div>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '0 0 10px 0'
            }}>
              Tell Us About You
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#666',
              margin: 0
            }}>
              Just a few details to personalize your wallet
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '8px'
            }}>
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '8px'
            }}>
              Last Name
            </label>
            <input
              type="text"
              placeholder="Smith"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{
            padding: '15px',
            border: '1px solid #eee',
            borderRadius: '8px',
            marginBottom: '30px',
            backgroundColor: '#f9f9f9'
          }}>
            <label style={{
              display: 'flex',
              alignItems: 'flex-start',
              fontSize: '12px',
              color: '#666',
              cursor: 'pointer'
            }}>
              <input
                type="checkbox"
                style={{ marginRight: '8px', marginTop: '2px' }}
              />
              I agree to receive messages about my wallet and transactions
            </label>
          </div>

          <div style={{
            display: 'flex',
            gap: '10px',
            marginTop: 'auto'
          }}>
            <button
              onClick={prevStep}
              style={{
                flex: 1,
                padding: '16px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Back
            </button>
            <button
              onClick={nextStep}
              style={{
                flex: 2,
                padding: '16px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#fff',
                border: '2px solid #333',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Explainer */}
      {currentStep === 3 && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
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
              fontSize: '24px',
              fontWeight: 'bold',
              margin: '0 0 10px 0'
            }}>
              Your Money, Your Way
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#666',
              margin: 0
            }}>
              No bank account needed
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '40px'
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
                🔒
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                  Money is safe
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  Bank-level security protects your funds
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
                💸
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                  Easy cash-out
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  Get cash at thousands of locations
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
                💳
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                  Virtual cards for spending
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  Shop online or add to Apple/Google Pay
                </div>
              </div>
            </div>
          </div>

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
              cursor: 'pointer',
              marginTop: 'auto'
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </div>
  );
} 