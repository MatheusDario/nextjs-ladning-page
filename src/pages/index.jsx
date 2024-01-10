import P from 'prop-types';
import config from '../config';
import { mapData } from '@/api/map-data';
import { App } from '@/templates/App';

export default function Index({ data = null }) {
  return <App data={data} />;
}

export const getStaticProps = async () => {
  const raw = await fetch(config.url);
  const json = await raw.json();
  const data = mapData([json.data[0].attributes])[0];

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.object,
};
