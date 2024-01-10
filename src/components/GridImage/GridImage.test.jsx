import { GridImage } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridImage />', () => {
  it('should render grid with title, description and images', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid images without background', () => {
    const { container } = renderTheme(
      <GridImage $background={false} {...mock} />,
    );
    expect(container).toMatchSnapshot();
  });
});
