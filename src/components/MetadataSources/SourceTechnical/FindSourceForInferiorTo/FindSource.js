import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field } from 'react-final-form';

import {
  Col,
  Label,
  Row,
  TextField,
} from '@folio/stripes/components';
import { Pluggable } from '@folio/stripes/core';

import BasicCss from '../../../BasicStyle.css';

class FindSource extends React.Component {
  static propTypes = {
    elem: PropTypes.string,
    index: PropTypes.string,
    fields: PropTypes.arrayOf(PropTypes.string),
  };

  constructor(props) {
    super(props);

    const s = props.intialSource || [];

    this.inputSourceId = s.id;
  }

  selectSource = (s) => {
    this.props.form.mutators.setSource(s.id);
    // this.props.form.mutators.setSource(this.props.fields[this.props.index] = s.id);

    this.setState(() => {
      return s.id;
    });
  }

  render() {
    const disableRecordCreation = true;
    const buttonProps = { 'marginBottom0': true };
    const pluggable =
      <Pluggable
        aria-haspopup="true"
        buttonProps={buttonProps}
        columnMapping={this.columnMapping}
        dataKey="source"
        disableRecordCreation={disableRecordCreation}
        id="clickable-find-source"
        marginTop0
        onCloseModal={(modalProps) => {
          modalProps.parentMutator.query.update({
            query: '',
            filters: '',
            sort: 'name',
          });
        }}
        searchButtonStyle="default"
        searchLabel="Metadata source"
        selectSource={this.selectSource}
        type="find-finc-metadata-source"
        visibleColumns={['label', 'sourceId', 'status', 'solrShard', 'lastProcessed']}
        {...this.props}
      >
        <div style={{ background: 'red' }}>Plugin not found</div>
      </Pluggable>;

    return (
      <React.Fragment>
        <Row>
          <Label className={BasicCss.styleForFormLabel}>
            <FormattedMessage id="ui-finc-config.collection.mdSource">
              {(msg) => msg}
            </FormattedMessage>
          </Label>
        </Row>
        <Row>
          <Col xs={4}>
            { pluggable }
          </Col>
          <Col xs={4}>
            <Field
              ariaLabel="Add metadata source"
              component={TextField}
              fullWidth
              id="addsource_inferiorTo"
              // "inferiorTo[0]
              name={this.props.elem}
              placeholder="Please add a metadata source"
              readOnly
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

FindSource.propTypes = {
  intialSourceId: PropTypes.string,
  intialSource: PropTypes.object,
  stripes: PropTypes.object,
  form: PropTypes.shape({
    mutators: PropTypes.shape({
      setSource: PropTypes.func,
    }),
  }),
};

export default FindSource;
