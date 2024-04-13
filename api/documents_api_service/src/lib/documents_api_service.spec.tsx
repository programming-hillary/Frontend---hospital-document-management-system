import { render } from '@testing-library/react';

import DocumentsApiService from './documents_api_service';

describe('DocumentsApiService', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DocumentsApiService />);
    expect(baseElement).toBeTruthy();
  });
});
