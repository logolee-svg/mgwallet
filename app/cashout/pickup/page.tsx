'use client';

import { useState } from 'react';

export default function CashPickupComplete() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [amount] = useState(146.01); // Assuming $150 - $3.99 fee
  const [showConfirmation, setShowConfirmation] = useState(false);

  const locations = [
    {
      id: 1,
      name: "Walmart Supercenter",
      address: "123 Main St, Brooklyn, NY 11201",
      distance: "0.3 miles",
      rating: 4.5,
      hours: "Open until 11 PM"
    },
    {
      id: 2,
      name: "CVS Pharmacy",
      address: "456 Atlantic Ave, Brooklyn, NY 11217",
      distance: "0.5 miles",
      rating: 4.2,
      hours: "Open 24 hours"
    },
    {
      id: 3,
      name: "7-Eleven",
      address: "789 Flatbush Ave, Brooklyn, NY 11226",
      distance: "0.7 miles",
      rating: 4.0,
      hours: "Open 24 hours"
    }
  ];

  const handleConfirm = () => {
    setShowConfirmation(true);
  };

  if (showConfirmation) {
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
            Cash Out Confirmed!
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#666',
            margin: 0
          }}>
            Your money is ready for pickup
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
            MG-789012345
          </div>
          <p style={{
            fontSize: '12px',
            color: '#666',
            margin: 0
          }}>
            Show this to the agent
          </p>
        </section>

        {/* Pickup Details */}
        <section style={{ marginBottom: '30px' }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#333'
          }}>
            Pickup Details
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
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>$3.99</span>
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

        {/* Location Info */}
        {selectedLocation && (
          <section style={{ marginBottom: '30px' }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#333'
            }}>
              Pickup Location
            </h3>
            <div style={{
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '8px'
            }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 'bold',
                marginBottom: '5px'
              }}>
                {selectedLocation.name}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#666',
                marginBottom: '5px'
              }}>
                {selectedLocation.address}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#28a745'
              }}>
                {selectedLocation.hours}
              </div>
            </div>
          </section>
        )}

        {/* Instructions */}
        <section style={{ marginBottom: '30px' }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#333'
          }}>
            What to do next
          </h3>
          <div style={{
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
          }}>
            <ol style={{
              margin: 0,
              paddingLeft: '20px',
              fontSize: '14px',
              lineHeight: '1.6'
            }}>
              <li style={{ marginBottom: '10px' }}>Visit your chosen pickup location</li>
              <li style={{ marginBottom: '10px' }}>Show your reference number: <strong>MG-789012345</strong></li>
              <li style={{ marginBottom: '10px' }}>Bring a valid ID</li>
              <li>Collect your cash: <strong>${amount.toFixed(2)}</strong></li>
            </ol>
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
            Share Reference Number
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
        marginBottom: '20px',
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
          Choose Pickup Location
        </h1>
      </header>

      {/* Map Placeholder */}
      <section style={{ marginBottom: '20px' }}>
        <div style={{
          height: '200px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#e9ecef',
          position: 'relative'
        }}>
          <div style={{
            textAlign: 'center',
            color: '#666'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>🗺️</div>
            <div style={{ fontSize: '14px' }}>Interactive map showing nearby pickup locations</div>
          </div>
          {/* Map pins overlay */}
          <div style={{
            position: 'absolute',
            top: '30px',
            left: '50px',
            fontSize: '20px'
          }}>📍</div>
          <div style={{
            position: 'absolute',
            top: '80px',
            right: '60px',
            fontSize: '20px'
          }}>📍</div>
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '80px',
            fontSize: '20px'
          }}>📍</div>
        </div>
      </section>

      {/* Location List */}
      <section style={{ flex: 1 }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '15px',
          color: '#333'
        }}>
          Nearby Locations
        </h3>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          {locations.map((location) => (
            <div
              key={location.id}
              onClick={() => setSelectedLocation(location)}
              style={{
                padding: '15px',
                border: selectedLocation?.id === location.id ? '2px solid #333' : '1px solid #ddd',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: selectedLocation?.id === location.id ? '#f9f9f9' : '#fff'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '8px'
              }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  {location.name}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#666'
                }}>
                  {location.distance}
                </div>
              </div>
              <div style={{
                fontSize: '12px',
                color: '#666',
                marginBottom: '5px'
              }}>
                {location.address}
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{
                  fontSize: '12px',
                  color: '#666'
                }}>
                  ⭐ {location.rating}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: location.hours.includes('24 hours') ? '#28a745' : '#666',
                  fontWeight: location.hours.includes('24 hours') ? 'bold' : 'normal'
                }}>
                  {location.hours}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Confirm Button */}
      {selectedLocation && (
        <div style={{
          marginTop: '20px',
          paddingTop: '20px',
          borderTop: '1px solid #eee'
        }}>
          <button 
            onClick={handleConfirm}
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
            Confirm Pickup at {selectedLocation.name}
          </button>
        </div>
      )}
    </div>
  );
} 