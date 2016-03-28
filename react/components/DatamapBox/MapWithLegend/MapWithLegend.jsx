import React, { Component, PropTypes } from 'react';

import Datamap from './Datamap';

export default class MapWithLegend extends Component {
  render() {
    const { svgWidth, svgHeight } = this.props

    return (
      <g>
        <Datamap
          svgWidth={svgWidth}
          svgHeight={svgHeight}
        />
      </g>
    );
  }
}

MapWithLegend.propTypes = {
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
}