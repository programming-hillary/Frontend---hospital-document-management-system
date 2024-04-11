import { render } from '@testing-library/react';

import ProgressNote from './progress-note';

describe('ProgressNote', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgressNote />);
    expect(baseElement).toBeTruthy();
  });
});
