import { ToastrService } from 'ngx-toastr';

const Logout = () => {
    localStorage.clear()
    window.location.assign('/')
}

// {position, title, message, severity}


const showToaster = () => {
    // const notifications = [{title, message, severity, progress: 0}]
    // ReactDOM.render(<Toaster position={position} notifications={notifications} />, document.getElementById('Toaster'))
}

export {
    Logout,
    showToaster,
}