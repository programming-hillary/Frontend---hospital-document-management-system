import { render } from '@testing-library/react';

import ConsentForms from './consent-forms';

describe('ConsentForms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsentForms />);
    expect(baseElement).toBeTruthy();
  });
});
