/* ========================  P R E L O A D E R  ======================= */

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('preloader').classList.add('loaded');
        ready()
    });
} else {
    ready()
}


function ready() {
    document.getElementById('sidebar-toggle').addEventListener('click', () => {
        document.getElementById('wrapper').classList.add('open')
    })
    document.querySelector('.sidebar-overlay').addEventListener('click', () => {
        document.getElementById('wrapper').classList.remove('open')
    })
}