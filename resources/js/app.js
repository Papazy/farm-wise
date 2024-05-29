document.addEventListener('DOMContentLoaded', () => {
  const profileDropdown = document.getElementById('profile-dropdown')
  const profileDropdownMenu = document.getElementById('profile-dropdown-menu')

  profileDropdown.addEventListener('click', () => {
    profileDropdownMenu.classList.toggle('hidden')
  })

  // Get elements
  const openModalBtn = document.getElementById('openModalBtn')
  const closeModalBtn = document.getElementById('closeModalBtn')
  const closeModalBtn2 = document.getElementById('closeModalBtn2')
  const modal = document.getElementById('myModal')

  // Open modal function
  openModalBtn.addEventListener('click', () => {
    modal.classList.add('show')
  })

  // Close modal function
  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show')
  })

  closeModalBtn2.addEventListener('click', () => {
    modal.classList.remove('show')
  })

  // Close modal when clicking outside the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('show')
    }
  })
})
