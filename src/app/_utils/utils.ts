const Logout = () => {
    localStorage.clear()
    window.location.assign('/')
}

export {
    Logout,
}