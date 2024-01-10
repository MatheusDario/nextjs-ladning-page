/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { mapData } from '../../api/map-data';
import * as Styled from './styles';
import P from 'prop-types';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { GridContent } from '../../components/GridContent';
import { GridSection } from '../../components/GridSection';
import { GridImage } from '../../components/GridImage';
import config from '../../config';

export const App = () => {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const apiData = await fetch(config.url);
        const json = await apiData.json();

        const pageData = mapData([json.data[0].attributes]);

        setData(pageData[0]);

        //console.log(pageData[0]);
      } catch (e) {
        console.log(e);
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcimg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcimg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;
        //console.log(component);

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
  children: P.node,
};
