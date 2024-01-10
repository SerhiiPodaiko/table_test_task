import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import '@/styles/global.css'
import { router } from '@/routes/Router'
import store from '@/store/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer />
    </Provider>
)
