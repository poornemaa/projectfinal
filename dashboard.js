/*const username = localStorage.getItem('username');
const userType = localStorage.getItem('user_type');
const userId = localStorage.getItem('user_id');
const token = localStorage.getItem('token');

if (!token) {
  alert('You must be logged in!');
  window.location.href = '/';
}

// Update Welcome Text
document.getElementById('welcomeText').innerText = `Welcome, ${username}! You are logged in as ${userType}.`;

// Hide "Add Donation" and "Certification" button if recipient
if (userType.toLowerCase() !== 'donor') {
  document.getElementById('addDonationBtn').style.display = 'none';
  document.getElementById('certificationsBtn').style.display = 'none';
}

// Logout Button
document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.clear();
  window.location.href = '/';
});*/

/*document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username');
  const userType = localStorage.getItem('user_type');
  const userId = localStorage.getItem('user_id');
  const token = localStorage.getItem('token');

  if (!token) {
    alert('You must be logged in!');
    window.location.href = '/';
  }

  document.getElementById('welcomeText').innerText = `Welcome, ${username}! You are logged in as ${userType}.`;*/


  document.addEventListener('DOMContentLoaded', () => {
    // Debugging: Check what's in localStorage
    console.log('localStorage values:', localStorage);
  
    const guestView = localStorage.getItem('guest_view');
    const userId = localStorage.getItem('user_id');
    const username = localStorage.getItem('username');
    const userType = localStorage.getItem('user_type');
    const token = localStorage.getItem('token');
  
  
    // Debugging: Check if we have all necessary values
    console.log('guestView:', guestView, 'token:', token, 'username:', username, 'userType:', userType);
  
    if (guestView === 'true') {
      // Admin is viewing the dashboard as guest
      document.getElementById('welcomeText').innerText = `Welcome Admin!`;
    } else {
      if (!token || !username || !userType || !userId) {
        alert('You must be logged in as User!');
        window.location.href = 'index.html'; // Redirect to login page if not logged in
        return;
      }
  
      // Update the welcome message based on user type
      if (userType === 'donor') {
        document.getElementById('welcomeText').innerText = `Welcome ${username}! You are logged in as ${userType}.`;
      } else if (userType === 'recipient') {
        document.getElementById('welcomeText').innerText = `Welcome ${username}! You are logged in as ${userType}.`;
      } else {
        document.getElementById('welcomeText').innerText = `Welcome ${username}! You are logged in as ${userType}.`;
      }
    }
  });
    
  

  

  /*if (userType.toLowerCase() !== 'donor') {
    document.getElementById('addDonationBtn').style.display = 'none';
    document.getElementById('certificationsBtn').style.display = 'none';
  }*/


// Load navbar then attach logout logic
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbarContainer').innerHTML = data;

    // ✅ Attach logout button after navbar is loaded
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        localStorage.clear();
        alert('Logged out successfully!');
        window.location.href = '/index.html'; // Change this if needed
      });
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/dashboard-stats', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'guest_view': 'true'  // Pass this only if you're viewing as guest (admin's guest mode)

      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch dashboard stats');
        }
        return response.json();
      })
      .then(data => {
        document.getElementById('totalDonations').textContent = data.totalDonations;
        document.getElementById('totalOrders').textContent = data.totalOrders;
      })
      .catch(error => {
        console.error('Error loading stats:', error);
      });
  });
  
  
  