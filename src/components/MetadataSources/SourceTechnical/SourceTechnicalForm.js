import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import { FormattedMessage } from 'react-intl';

import {
  Accordion,
  Col,
  Label,
  Row,
  Select,
  TextField
} from '@folio/stripes/components';

import { IntRequired } from '../../DisplayUtils/Validate';
import RepeatableField from '../../DisplayUtils/RepeatableField';
import RepeatableFieldForSource from './RepeatableFieldForSource';
import RepeatableFieldValidUrl from '../../DisplayUtils/RepeatableFieldValidUrl';

import BasicCss from '../../BasicStyle.css';
import FindSource from './FindSourceForInferiorTo/FindSource';

class SourceTechnicalForm extends React.Component {
  constructor(props) {
    super(props);

    this.columnMapping =
    {
      name: 'Label',
      id: 'SourceId',
    };

    const intialSource = {};

    this.state = {
      source: intialSource,
    };
  }

  render() {
    const { accordionId, expanded, onToggle } = this.props;
    const dataOptionsSolrShard = [
      { value: 'UBL main', label: 'UBL main' },
      { value: 'UBL ai', label: 'UBL ai' },
      { value: 'UBL DNB', label: 'UBL DNB' },
      { value: 'SLUB dswarm', label: 'SLUB dswarm' },
      { value: 'SLUB DBoD', label: 'SLUB DBoD' }
    ];

    return (
      <Accordion
        id={accordionId}
        label={<FormattedMessage id="ui-finc-config.source.technicalAccordion" />}
        onToggle={onToggle}
        open={expanded}
      >
        <Row>
          <Col xs={8}>
            <Field
              component={TextField}
              fullWidth
              id="addsource_lastProcessed"
              label={
                <FormattedMessage id="ui-finc-config.source.lastProcessed">
                  {(msg) => msg}
                </FormattedMessage>}
              name="lastProcessed"
              placeholder="Enter date and time for the metadata source"
            />
          </Col>
        </Row>
        {/* TICKETS (is repeatable) ... */}
        <div className={BasicCss.addMarginBottomAndTop}>
          <Row>
            <Label className={BasicCss.styleForFormLabel}>
              <FormattedMessage id="ui-finc-config.source.tickets" />
            </Label>
          </Row>
          <Row>
            <Col xs={12}>
              <FormattedMessage id="ui-finc-config.source.tickets">
                {ariaLabel => (
                  <FieldArray
                    ariaLabel={ariaLabel}
                    component={RepeatableFieldValidUrl}
                    id="display_tickets"
                    // add name to the array-field, which should be changed
                    name="tickets"
                    {...this.props}
                  />
                )}
              </FormattedMessage>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs={8}>
            <Field
              component={TextField}
              fullWidth
              id="addsource_accessUrl"
              label={
                <FormattedMessage id="ui-finc-config.source.accessUrl">
                  {(msg) => msg}
                </FormattedMessage>}
              name="accessUrl"
              placeholder="Enter an access url for the metadata source"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <Field
              component={TextField}
              fullWidth
              id="addsource_sourceId"
              label={
                <FormattedMessage id="ui-finc-config.source.id">
                  {(msg) => msg + ' *'}
                </FormattedMessage>}
              name="sourceId"
              placeholder="Enter a source id for the metadata source"
              validate={IntRequired}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <Field
              component={Select}
              dataOptions={dataOptionsSolrShard}
              fullWidth
              id="addsource_solrShard"
              label={
                <FormattedMessage id="ui-finc-config.source.solrShard">
                  {(msg) => msg}
                </FormattedMessage>
              }
              name="solrShard"
              placeholder="Select a solr shard for the metadata source"
            />
          </Col>
        </Row>
        {/* TODO: deliveryMethods (is repeatable; is value list ???) ... */}
        <div className={BasicCss.addMarginBottomAndTop}>
          <Row>
            <Label className={BasicCss.styleForFormLabel}>
              <FormattedMessage id="ui-finc-config.source.deliveryMethods" />
            </Label>
          </Row>
          <Row>
            <Col xs={12}>
              <FormattedMessage id="ui-finc-config.source.deliveryMethods">
                {ariaLabel => (
                  <FieldArray
                    ariaLabel={ariaLabel}
                    component={RepeatableField}
                    id="display_delivery_methods"
                    // add name to the array-field, which should be changed
                    name="deliveryMethods"
                    {...this.props}
                  />
                )}
              </FormattedMessage>
            </Col>
          </Row>
        </div>
        {/* formats (is repeatable) ... */}
        <div className={BasicCss.addMarginBottomAndTop}>
          <Row>
            <Label className={BasicCss.styleForFormLabel}>
              <FormattedMessage id="ui-finc-config.source.formats" />
            </Label>
          </Row>
          <Row>
            <Col xs={12}>
              <FormattedMessage id="ui-finc-config.source.formats">
                {ariaLabel => (
                  <FieldArray
                    ariaLabel={ariaLabel}
                    component={RepeatableField}
                    id="display_formats"
                    // add name to the array-field, which should be changed
                    name="formats"
                    {...this.props}
                  />
                )}
              </FormattedMessage>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs={8}>
            {/* <Field
              component={TextField}
              fullWidth
              id="addsource_updateRhythm"
              label={
                <FormattedMessage id="ui-finc-config.source.updateRhythm">
                  {(msg) => msg}
                </FormattedMessage>}
              name="updateRhythm"
              placeholder="Enter a update rhythm for the metadata source"
            /> */}
          </Col>
        </Row>
        {/* inferiorTo (is repeatable) ... */}
        {/* <div className={BasicCss.addMarginBottomAndTop}>
          <Row>
            <Label className={BasicCss.styleForFormLabel}>
              <FormattedMessage id="ui-finc-config.source.inferiorTo" />
            </Label>
          </Row>
          <Row>
            <Col xs={12}>
              <FormattedMessage id="ui-finc-config.source.inferiorTo">
                {ariaLabel => (
                  <FieldArray
                    ariaLabel={ariaLabel}
                    component={RepeatableField}
                    id="display_inferior_to"
                    label="Displayinferiorto"
                    // add name to the array-field, which should be changed
                    name="inferiorTo"
                    {...this.props}
                  />
                )}
              </FormattedMessage>
            </Col>
          </Row>
        </div> */}


        {/* inferiorTo PLUGIN to find source */}
        <div className={BasicCss.addMarginBottomAndTop}>
          <Row>
            <Label className={BasicCss.styleForFormLabel}>
              <FormattedMessage id="ui-finc-config.source.inferiorTo" />
            </Label>
          </Row>
          <Row>
            <Col xs={12}>
              <FormattedMessage id="ui-finc-config.source.inferiorTo">
                {ariaLabel => (
                  <FieldArray
                    ariaLabel={ariaLabel}
                    component={RepeatableFieldForSource}
                    id="display_inferior_to"
                    label="Displayinferiorto"
                    // add name to the array-field, which should be changed
                    name="inferiorTo"
                    {...this.props}
                  />
                )}
              </FormattedMessage>
            </Col>
          </Row>
        </div>
        {/* test for single saving -> need to uncomment real updateRhythm above !!!! */}
        {/* <Field
          component={FindSource}
          fullWidth
          id="addsource_updateRhythm"
          name="updateRhythm"
          intialSource={this.state.source}
          stripes={this.props.stripes}
          {...this.props}
        /> */}
      </Accordion>
    );
  }
}

SourceTechnicalForm.propTypes = {
  accordionId: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
  fields: PropTypes.object,
  onToggle: PropTypes.func,
  stripes: PropTypes.object,
};

export default SourceTechnicalForm;
