import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components'

const ImageGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: calc(33.3333% - 20px);
  padding: 10px;

  * img {
    max-height: 100%;
    max-width: 100%;
  }
`;

const ImagesArea = ({ images, title }) => {
  if (!images.length) {
    return null;
  }
  const imageGrid = images.map((image, i) => (
    <ImageContainer
      key={image}
    >
      <a
        href={image}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt={`${title} ${i + 1} of ${images.length}`}
          src={image}
        />
      </a>
    </ImageContainer>
  ));

  return (
    <ImageGridContainer>
      {imageGrid}
    </ImageGridContainer>
  );
}

ImagesArea.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default ImagesArea;
