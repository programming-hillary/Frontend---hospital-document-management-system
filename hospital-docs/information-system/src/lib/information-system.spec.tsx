import { render } from '@testing-library/react';

import InformationSystem from './information-system';

describe('InformationSystem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InformationSystem />);
    expect(baseElement).toBeTruthy();
  });
});
