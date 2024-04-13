// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserApiService, useUserContext } from '@org.mwashi-mwale/api_service';
import Landing_Page from './Landing_Page';

export function App() {
  const users = useUserContext();
  return (
    <UserApiService.Provider value={users}>
      <Landing_Page />
    </UserApiService.Provider>
  );
}

export default App;
