import { render } from '@testing-library/react';

import MedicalTests from './medical-tests';

describe('MedicalTests', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MedicalTests />);
    expect(baseElement).toBeTruthy();
  });
});
