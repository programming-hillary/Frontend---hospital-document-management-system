import { render } from '@testing-library/react';

import MedicalPersonell from './medical-personell';

describe('MedicalPersonell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MedicalPersonell />);
    expect(baseElement).toBeTruthy();
  });
});
