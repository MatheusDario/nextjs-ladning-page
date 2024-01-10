import Head from 'next/head';
import { Base } from '../Base';
import P from 'prop-types';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { PageNotFound } from '../PageNotFound';
import { GridContent } from '../../components/GridContent';
import { GridSection } from '../../components/GridSection';
import { GridImage } from '../../components/GridImage';
import config from '../../config';

export const App = ({ data }) => {
  if (!data || data.length === 0) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml, slug, title } = data;
  const { links, text, link, srcimg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcimg }}
    >
      <Head>
        <title>
          {title} | {config.siteName}
        </title>
      </Head>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridSection key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
};

App.propTypes = {
  data: P.object,
};
