import { render } from '@testing-library/react';

import DischargeSummary from './discharge-summary';

describe('DischargeSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DischargeSummary />);
    expect(baseElement).toBeTruthy();
  });
});
