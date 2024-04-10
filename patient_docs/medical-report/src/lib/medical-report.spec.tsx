import { render } from '@testing-library/react';

import MedicalReport from './medical-report';

describe('MedicalReport', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MedicalReport />);
    expect(baseElement).toBeTruthy();
  });
});
