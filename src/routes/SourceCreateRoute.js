import React from 'react';
import PropTypes from 'prop-types';

import { stripesConnect } from '@folio/stripes/core';

import MetadataSourceForm from '../components/MetadataSources/MetadataSourceForm';
import urls from '../components/DisplayUtils/urls';

class SourceCreateRoute extends React.Component {
  static manifest = Object.freeze({
    sources: {
      type: 'okapi',
      path: 'finc-config/metadata-sources',
      fetch: false,
      shouldRefresh: () => false,
    },
  });

  static propTypes = {
    handlers: PropTypes.object,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    mutator: PropTypes.shape({
      sources: PropTypes.shape({
      }).isRequired,
    }).isRequired,
    resources: PropTypes.object,
    stripes: PropTypes.shape({
      hasPerm: PropTypes.func.isRequired,
      okapi: PropTypes.object.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    handlers: {},
  }

  handleClose = () => {
    const { location } = this.props;
    this.props.history.push(`${urls.sources()}${location.search}`);
  }

  handleSubmit = (source) => {
    const { history, location, mutator } = this.props;

    mutator.sources
      .POST(source)
      .then(({ id }) => {
        history.push(`${urls.sourceView(id)}${location.search}`);
      });
  }

  render() {
    const { handlers, resources, stripes } = this.props;

    return (
      <MetadataSourceForm
        contentData={resources}
        handlers={{
          onClose: this.handleClose,
          ...handlers,
        }}
        onSubmit={this.handleSubmit}
        stripes={stripes}
      />
    );
  }
}

export default stripesConnect(SourceCreateRoute);
