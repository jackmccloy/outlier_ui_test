import React, { Component } from 'react';
import { connect } from "react-redux";

import Navigation from '../components/Navigation';

const menu = Navigation();

function MasterLayoutHOC(WrappedComponent, pageName) {
  class MasterLayoutImpl extends Component {
    render() {

      const layoutProps = {
        menu,
        pageName
      };

      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  const mapStateToProps = state => state;

  const mapDispatchToProps = dispatch => ({
    dispatch
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(MasterLayoutImpl);
}

export default MasterLayoutHOC;
