import { MainRoutes } from './routes/MainRoutes'
import { ContextProvider } from './contexts/Context';

function App() {

    return (
        <ContextProvider>
            <MainRoutes/>
        </ContextProvider>
    );
}

export default App;