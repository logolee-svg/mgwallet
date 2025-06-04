'use client';

import { useState } from 'react';

export default function BankDepositCashOut() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bankDetails, setBankDetails] = useState({
    routingNumber: '',
    accountNumber: '',
    confirmAccountNumber: '',
    accountType: 'checking',
    bankName: '',
    accountHolderName: ''
  });
  const [amount] = useState(148.01); // $150 - $1.99 fee

  const accountTypes = [
    { value: 'checking', label: 'Checking Account', icon: '📋' },
    { value: 'savings', label: 'Savings Account', icon: '💰' }
  ];

  const validateForm = () => {
    return (
      bankDetails.routingNumber.trim().length >= 3 &&
      bankDetails.accountNumber.trim().length >= 4 &&
      bankDetails.accountNumber === bankDetails.confirmAccountNumber &&
      bankDetails.bankName.trim() &&
      bankDetails.accountHolderName.trim()
    );
  };

  if (currentStep === 3) {
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
            Bank Transfer Initiated!
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#666',
            margin: 0
          }}>
            Your money is on its way to your bank account
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
            BD-123789456
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
                <span style={{ fontSize: '14px', color: '#666' }}>To Bank</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{bankDetails.bankName}</span>
              </div>
            </div>
            <div style={{
              padding: '15px',
              borderBottom: '1px solid #eee'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>Account</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>****{bankDetails.accountNumber.slice(-4)}</span>
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
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>$1.99</span>
              </div>
            </div>
            <div style={{
              padding: '15px',
              backgroundColor: '#f9f9f9'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>You'll Receive</span>
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#28a745' }}>${amount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Timing Info */}
        <section style={{ marginBottom: '30px' }}>
          <div style={{
            padding: '20px',
            border: '1px solid #2196F3',
            borderRadius: '8px',
            backgroundColor: '#f8fbff'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px'
            }}>
              <span style={{ fontSize: '20px', marginRight: '10px' }}>🏦</span>
              <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Bank Transfer</span>
            </div>
            <p style={{
              fontSize: '12px',
              color: '#666',
              margin: 0
            }}>
              Money will arrive in your {bankDetails.accountType} account within 1-2 business days
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
      padding: '20px',
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
          Bank Deposit
        </h1>
      </header>

      {/* Progress Indicator */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px'
      }}>
        {[1, 2].map((step) => (
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

      {/* Step 1: Bank Details */}
      {currentStep === 1 && (
        <div>
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
              🏦
            </div>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '0 0 10px 0',
              color: '#333'
            }}>
              Enter Bank Details
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#666',
              margin: 0
            }}>
              We'll deposit $148.01 to your bank account
            </p>
          </div>

          {/* Bank Name */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#333'
            }}>
              Bank Name
            </label>
            <input
              type="text"
              value={bankDetails.bankName}
              onChange={(e) => setBankDetails({...bankDetails, bankName: e.target.value})}
              placeholder="e.g., Chase Bank"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Account Holder Name */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#333'
            }}>
              Account Holder Name
            </label>
            <input
              type="text"
              value={bankDetails.accountHolderName}
              onChange={(e) => setBankDetails({...bankDetails, accountHolderName: e.target.value})}
              placeholder="Full name on account"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Account Type */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#333'
            }}>
              Account Type
            </label>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px'
            }}>
              {accountTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setBankDetails({...bankDetails, accountType: type.value})}
                  style={{
                    padding: '15px',
                    border: bankDetails.accountType === type.value ? '2px solid #333' : '1px solid #ddd',
                    borderRadius: '8px',
                    backgroundColor: bankDetails.accountType === type.value ? '#f0f8ff' : '#fff',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '20px', marginBottom: '5px' }}>{type.icon}</div>
                  <div style={{ fontSize: '12px', fontWeight: 'bold' }}>{type.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Routing Number */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#333'
            }}>
              Routing Number
            </label>
            <input
              type="text"
              maxLength={9}
              value={bankDetails.routingNumber}
              onChange={(e) => {
                const newValue = e.target.value;
                setBankDetails(prev => ({
                  ...prev,
                  routingNumber: newValue
                }));
              }}
              placeholder="123456789"
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '18px',
                outline: 'none',
                boxSizing: 'border-box',
                backgroundColor: '#fff',
                color: '#333'
              }}
            />
            <p style={{
              fontSize: '12px',
              color: '#666',
              margin: '5px 0 0 0'
            }}>
              Found at the bottom of your check
            </p>
          </div>

          {/* Account Number */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#333'
            }}>
              Account Number
            </label>
            <input
              type="text"
              value={bankDetails.accountNumber}
              onChange={(e) => {
                const newValue = e.target.value;
                setBankDetails(prev => ({
                  ...prev,
                  accountNumber: newValue
                }));
              }}
              placeholder="1234567890"
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '18px',
                outline: 'none',
                boxSizing: 'border-box',
                backgroundColor: '#fff',
                color: '#333'
              }}
            />
          </div>

          {/* Confirm Account Number */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#333'
            }}>
              Confirm Account Number
            </label>
            <input
              type="text"
              value={bankDetails.confirmAccountNumber}
              onChange={(e) => {
                const newValue = e.target.value;
                setBankDetails(prev => ({
                  ...prev,
                  confirmAccountNumber: newValue
                }));
              }}
              placeholder="1234567890"
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '18px',
                outline: 'none',
                boxSizing: 'border-box',
                backgroundColor: '#fff',
                color: '#333'
              }}
            />
            {bankDetails.confirmAccountNumber && bankDetails.accountNumber !== bankDetails.confirmAccountNumber && (
              <p style={{
                fontSize: '12px',
                color: '#dc3545',
                margin: '5px 0 0 0'
              }}>
                Account numbers don't match
              </p>
            )}
          </div>

          <div style={{ marginTop: '40px' }}>
            <button
              disabled={!validateForm()}
              onClick={() => setCurrentStep(2)}
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: validateForm() ? '#333' : '#f5f5f5',
                color: validateForm() ? '#fff' : '#999',
                border: 'none',
                borderRadius: '8px',
                cursor: validateForm() ? 'pointer' : 'not-allowed'
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Confirmation */}
      {currentStep === 2 && (
        <div>
          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '0 0 10px 0',
              color: '#333'
            }}>
              Confirm Bank Deposit
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#666',
              margin: 0
            }}>
              Please review your bank details
            </p>
          </div>

          {/* Bank Summary */}
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
                <span style={{ fontSize: '14px', color: '#666' }}>Bank Name</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{bankDetails.bankName}</span>
              </div>
            </div>
            <div style={{
              padding: '15px',
              borderBottom: '1px solid #eee'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>Account Holder</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{bankDetails.accountHolderName}</span>
              </div>
            </div>
            <div style={{
              padding: '15px',
              borderBottom: '1px solid #eee'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>Account Type</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{bankDetails.accountType.charAt(0).toUpperCase() + bankDetails.accountType.slice(1)}</span>
              </div>
            </div>
            <div style={{
              padding: '15px',
              borderBottom: '1px solid #eee'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>Account Number</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>****{bankDetails.accountNumber.slice(-4)}</span>
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
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>$1.99</span>
              </div>
            </div>
            <div style={{
              padding: '15px',
              backgroundColor: '#f9f9f9'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>You'll Receive</span>
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#28a745' }}>${amount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Timing Info */}
          <div style={{
            padding: '20px',
            border: '1px solid #2196F3',
            borderRadius: '8px',
            backgroundColor: '#f8fbff',
            marginBottom: '30px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px'
            }}>
              <span style={{ fontSize: '20px', marginRight: '10px' }}>🕐</span>
              <span style={{ fontWeight: 'bold', fontSize: '14px' }}>1-2 Business Days</span>
            </div>
            <p style={{
              fontSize: '12px',
              color: '#666',
              margin: 0
            }}>
              Bank transfers typically arrive within 1-2 business days
            </p>
          </div>

          <div style={{ marginTop: '40px' }}>
            <button
              onClick={() => setCurrentStep(3)}
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
              Confirm Deposit
            </button>
            <p style={{
              textAlign: 'center',
              fontSize: '12px',
              color: '#666',
              marginTop: '15px'
            }}>
              🔒 Your bank details are secure and encrypted
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 