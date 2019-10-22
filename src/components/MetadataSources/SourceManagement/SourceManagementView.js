import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  Col,
  Headline,
  KeyValue,
  List,
  MultiColumnList,
  Row
} from '@folio/stripes/components';

import BasicCss from '../../BasicStyle.css';
import css from './SourceManagement.css';

class SourceManagementView extends React.Component {
  static propTypes = {
    metadataSource: PropTypes.object.isRequired,
    stripes: PropTypes
      .shape({
        connect: PropTypes.func.isRequired,
      })
      .isRequired,
  };

  renderContacts = (type) => {
    const { metadataSource } = this.props;

    if (!metadataSource) {
      return 'no values';
    } else {
      return (
        <MultiColumnList
          contentData={_.get(metadataSource.contacts, type, [])}
          isEmptyMessage={`no ${type} contact`}
          visibleColumns={['name', 'role']}
          columnMapping={{
            name: <FormattedMessage id="ui-finc-config.contact.name" />,
            role: <FormattedMessage id="ui-finc-config.contact.role" />
          }}
        />
      );
    }
  }

  renderContracts = () => {
    const { metadataSource } = this.props;

    if (!metadataSource) {
      return 'no values';
    } else {
      const contractsItems = metadataSource.contracts;
      const contractsFormatter = (contractsItem) => (<li key={contractsItem}>{contractsItem}</li>);
      const isEmptyMessage = 'No items to show';

      return (
        <List
          items={contractsItems}
          itemFormatter={contractsFormatter}
          isEmptyMessage={isEmptyMessage}
        />
      );
    }
  }

  render() {
    const { metadataSource } = this.props;

    return (
      <React.Fragment>
        <div id="id">
          <Row>
            <KeyValue
              label={<FormattedMessage id="ui-finc-config.source.organization" />}
              value={_.get(metadataSource, 'organization.name', '-')}
            />
          </Row>
          <Row className={css.addMarginForContacts}>
            <Col xs={6}>
              <Headline
                size="medium"
                className={BasicCss.styleForHeadline}
              >
                <FormattedMessage id="ui-finc-config.source.contacts.internal" />
              </Headline>
              { this.renderContacts('internal') }
            </Col>
            <Col xs={6}>
              <Headline
                size="medium"
                className={BasicCss.styleForHeadline}
              >
                <FormattedMessage id="ui-finc-config.source.contacts.external" />
              </Headline>
              { this.renderContacts('external') }
            </Col>
          </Row>
          <Row>
            <KeyValue
              label={<FormattedMessage id="ui-finc-config.source.indexingLevel" />}
              value={_.get(metadataSource, 'indexingLevel', '-')}
            />
          </Row>
          <Row>
            <Headline
              size="medium"
              className={BasicCss.styleForHeadline}
            >
              <FormattedMessage id="ui-finc-config.source.contracts" />
            </Headline>
          </Row>
          <Row>
            { this.renderContracts() }
          </Row>
          <Row>
            <KeyValue
              label={<FormattedMessage id="ui-finc-config.source.generalNotes" />}
              value={_.get(metadataSource, 'generalNotes', '-')}
            />
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default SourceManagementView;
