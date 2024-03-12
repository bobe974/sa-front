import React from 'react';
import PropTypes from 'prop-types';

function AvisItem({ avis }) {
  return (
    <div key={`avis-${avis.id}`} className='p-4 rounded-md bg-slate-50 text-black'>
      <div className='texte'>{avis.avis}</div>
      <h4 className='texte'>{avis.client.email}</h4>
    </div>
  );
}

AvisItem.propTypes = {
  avis: PropTypes.shape({
    id: PropTypes.number,
    avis: PropTypes.string,
    type: PropTypes.string,
    client: PropTypes.shape({
      id: PropTypes.number,
      email: PropTypes.string,
    }),
  }),
};

export default AvisItem;
