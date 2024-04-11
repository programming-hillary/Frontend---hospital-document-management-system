import { render } from '@testing-library/react';

import DocCard from './DocCard';

describe('DocCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DocCard />);
    expect(baseElement).toBeTruthy();
  });
});
