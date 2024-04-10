import { render } from '@testing-library/react';

import HealthSurveys from './health-surveys';

describe('HealthSurveys', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HealthSurveys />);
    expect(baseElement).toBeTruthy();
  });
});
