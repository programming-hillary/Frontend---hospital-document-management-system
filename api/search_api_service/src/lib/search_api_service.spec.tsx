import { render } from '@testing-library/react';

import SearchApiService from './search_api_service';

describe('SearchApiService', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchApiService />);
    expect(baseElement).toBeTruthy();
  });
});
