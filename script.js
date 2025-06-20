

function updateDateTime() {
  const dt = new Date();
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const formatted = dt.toLocaleString('en-US', options);
  document.getElementById("datetime").textContent = formatted;
}

updateDateTime();
setInterval(updateDateTime, 60000);


