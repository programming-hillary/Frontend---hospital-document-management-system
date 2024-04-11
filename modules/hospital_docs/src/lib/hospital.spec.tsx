import { render } from '@testing-library/react';

import Hospital from './hospital';

describe('Hospital', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Hospital />);
    expect(baseElement).toBeTruthy();
  });
});
