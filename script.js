// Add small enhancements to the RSVP form.
//
// When the form is submitted, display a friendly message thanking the
// guest.  The mailto action still opens the user's email client to send
// the RSVP details.  Delaying the alert slightly improves the user
// experience by allowing the default mail client to open first.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.rsvp form');
  if (!form) return;
  form.addEventListener('submit', () => {
    setTimeout(() => {
      alert(
        'Hvala za vašo potrditev! Komaj čakamo, da skupaj praznujemo na zabavi v džungli.'
      );
    }, 200);
  });
});