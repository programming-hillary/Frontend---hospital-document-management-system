import { render } from '@testing-library/react';

import DashHome from './dash_home';

describe('DashHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashHome />);
    expect(baseElement).toBeTruthy();
  });
});
