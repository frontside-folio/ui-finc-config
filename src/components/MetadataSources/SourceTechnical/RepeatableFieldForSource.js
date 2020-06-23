import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import {
  Button,
  Col,
  IconButton,
  Row,
} from '@folio/stripes/components';

import FindSource from './FindSourceForInferiorTo/FindSource';

class RepeatableFieldForSource extends React.Component {
  static propTypes = {
    fields: PropTypes.object,
  };

  render() {
    const { fields } = this.props;

    return (
      <Row>
        <Col xs={12}>
          {fields.map((elem, index) => (
            <Row key={index}>
              <Col xs={8}>
                <Field
                  component={FindSource}
                  ariaLabel={`inferiorTo #${parseInt(index + 1, 10)}`}
                  name={`inferiorTo[${parseInt(index, 10)}]`}
                  id={`inferiorTo[${parseInt(index, 10)}]`}
                  fullWidth
                  // this is necessary for connecting with mutator
                  {...this.props}
                />
              </Col>
              <Col xs={1}>
                <IconButton
                  icon="trash"
                  onClick={() => fields.remove(index)}
                />
              </Col>
            </Row>
          ))}
        </Col>
        <Col xs={4}>
          <Button onClick={() => fields.push('')}>+ Add</Button>
        </Col>
      </Row>
    );
  }
}

export default RepeatableFieldForSource;
