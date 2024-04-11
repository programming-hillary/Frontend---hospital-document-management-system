import { render } from '@testing-library/react';

import MentalStatusExams from './mental-status-exams';

describe('MentalStatusExams', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MentalStatusExams />);
    expect(baseElement).toBeTruthy();
  });
});
