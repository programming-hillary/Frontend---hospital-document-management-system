import { render } from '@testing-library/react';

import InsuranceForms from './insurance-forms';

describe('InsuranceForms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InsuranceForms />);
    expect(baseElement).toBeTruthy();
  });
});
