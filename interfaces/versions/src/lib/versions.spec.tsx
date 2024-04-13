import { render } from '@testing-library/react';

import Versions from './versions';

describe('Versions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Versions />);
    expect(baseElement).toBeTruthy();
  });
});
