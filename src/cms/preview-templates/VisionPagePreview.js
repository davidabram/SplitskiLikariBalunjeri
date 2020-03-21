import React from 'react'
import PropTypes from 'prop-types';
import { VisionPageTemplate } from '../../templates/vision-page';

const VisionPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  console.log(data);
  if (data) {
    return (
      <VisionPageTemplate
        content={widgetFor('body')}
        title={data.title}
        image={{ src: data["vision-image"].image, alt: data["vision-image"].description }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

VisionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default VisionPagePreview;
