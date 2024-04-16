import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import InnerContainer from './components/InnerContainer';
import WatchPage from './components/WatchPage';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <InnerContainer />
      },
      {
        path: '/watch',
        element: <WatchPage />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <>
        <Head />
        <RouterProvider router={appRouter} />
      </>
    </Provider>
  );
}

export default App;
