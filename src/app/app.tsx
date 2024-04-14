// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserApiService, useUserContext } from '@org.mwashi-mwale/api_service';
import Landing_Page from './Landing_Page';
import { Suspense } from 'react';
import { ErrorBoundary } from './error-boundary';

export function App() {
  const users = useUserContext();
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <UserApiService.Provider value={users}>
        <Landing_Page />
      </UserApiService.Provider>
    </Suspense>
  );
}

export default App;
