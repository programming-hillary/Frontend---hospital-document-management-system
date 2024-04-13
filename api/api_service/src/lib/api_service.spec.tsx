import { render } from '@testing-library/react';

import ApiService from './api_service';

describe('ApiService', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiService />);
    expect(baseElement).toBeTruthy();
  });
});
