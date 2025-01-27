// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserApiService, useUserContext } from '@org.mwashi-mwale/api_service';
import Landing_Page from './Landing_Page';
import { Suspense } from 'react';
import LoadingPage from './loading-page/loading-page';

export function App() {
  const users = useUserContext();
  return (
    <Suspense fallback={<LoadingPage />}>
      <UserApiService.Provider value={users}>
        <Landing_Page />
      </UserApiService.Provider>
    </Suspense>
  );
}

export default App;
