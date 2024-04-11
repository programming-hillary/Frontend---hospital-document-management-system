import { render } from '@testing-library/react';

import FileOptions from './FileOptions';

describe('FileOptions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FileOptions />);
    expect(baseElement).toBeTruthy();
  });
});
