document.addEventListener('DOMContentLoaded', () => {
  const profileDropdown = document.getElementById('profile-dropdown')
  const profileDropdownMenu = document.getElementById('profile-dropdown-menu')

  profileDropdown.addEventListener('click', () => {
    profileDropdownMenu.classList.toggle('hidden')
  })
})
