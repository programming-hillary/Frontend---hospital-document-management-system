import { render } from '@testing-library/react';

import OperativeReports from './operative-reports';

describe('OperativeReports', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OperativeReports />);
    expect(baseElement).toBeTruthy();
  });
});
