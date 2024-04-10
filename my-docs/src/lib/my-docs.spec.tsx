import { render } from '@testing-library/react';

import MyDocs from './my-docs';

describe('MyDocs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyDocs />);
    expect(baseElement).toBeTruthy();
  });
});
