import { render } from '@testing-library/react';

import VersionsApiService from './versions_api_service';

describe('VersionsApiService', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VersionsApiService />);
    expect(baseElement).toBeTruthy();
  });
});
