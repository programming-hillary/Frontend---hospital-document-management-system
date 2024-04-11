import { render } from '@testing-library/react';

import MyHistory from './my_history';

describe('MyHistory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyHistory />);
    expect(baseElement).toBeTruthy();
  });
});
