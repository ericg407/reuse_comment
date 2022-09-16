import './style.css'
import './components/my-comment'
// import { registerSW } from 'virtual:pwa-register'
// import '/reuse_comment/public/sw.js'
// import './vite.config.js'

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/sw.js");
}



const updateSW = registerSW({
    onNeedRefresh() {},
    onOfflineReady() {},
    onRegistered() {},
    onRegisterError() {},
})