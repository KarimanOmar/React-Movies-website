
import {
  RouterProvider, 
  createBrowserRouter,
  
} from "react-router-dom"
import ToDo from '../src/components/ToDo/ToDo'
import Movies from '../src/components/Movies/Movies'
import MoviesDitals from '../src/components/MoviesDitals/MoviesDitals'
import SignIn from '../src/components/signIn/signIn'
import SignUp from '../src/components/signUp/signUp'
import Favorites from '../src/components/Favorites/favorites'
import { Provider } from "react-redux"
import AppLayout from './AppLayout'
import store from "./store/store"
import {LanguageProvider} from './context/language'
import { useState } from "react"

const router = createBrowserRouter([
  {
    path: "/", element: <AppLayout />,
    children: [
      { index: true, element: <Movies /> },
      { path: "/home", element: <Movies /> },
      { path: "/toDo", element: <ToDo /> },
      { path: "/signIn", element: <SignIn /> },
      { path: "/signUp", element: <SignUp /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "/moviesDitals/:id", element: <MoviesDitals /> },
      { path: "*", element: <Movies /> }
    ]
  }
])
function App() {

const [language , setlanguage] = useState('en')
  return  <Provider store={store}>
    <LanguageProvider value = {{language , setlanguage}}>
    <RouterProvider router={router} />
    </LanguageProvider>
    </Provider>
}

export default App
