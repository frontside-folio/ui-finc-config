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
  TextField,
} from '@folio/stripes/components';

import { Required } from '../../DisplayUtils/Validate';
import RepeatableField from '../../DisplayUtils/RepeatableField';

import BasicCss from '../../BasicStyle.css';

class CollectionManagementForm extends React.Component {
  render() {
    const { expanded, onToggle, accordionId } = this.props;
    const dataOptionsMetadataAvailable = [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
      { value: 'undetermined', label: 'Undetermined' }
    ];
    const dataOptionsUsageRestricted = [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ];
    const dataOptionsFreeContent = [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
      { value: 'undetermined', label: 'Undetermined' }
    ];
    const dataOptionsLodPublication = [
      { value: 'permitted (interpreted)', label: 'Permitted (interpreted)' },
      { value: 'permitted (explicit)', label: 'Permitted (explicit)' },
      { value: 'permitted (explicit) under conditions', label: 'Permitted (explicit) under conditions' },
      { value: 'prohibited (interpreted)', label: 'Prohibited (interpreted)' },
      { value: 'prohibited (explicit)', label: 'Prohibited (explicit)' },
      { value: 'silent', label: 'Silent' }
    ];

    return (
      <Accordion
        id={accordionId}
        label={<FormattedMessage id="ui-finc-config.collection.managementAccordion" />}
        onToggle={onToggle}
        open={expanded}
      >
        <Row>
          <Col xs={8}>
            <Field
              component={Select}
              dataOptions={dataOptionsMetadataAvailable}
              fullWidth
              id="addcollection_metadataAvailable"
              label={
                <FormattedMessage id="ui-finc-config.collection.metadataAvailable">
                  {(msg) => msg}
                </FormattedMessage>
              }
              name="metadataAvailable"
              placeholder="Select if metadata is available for the metadata collection"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <Field
              component={Select}
              dataOptions={dataOptionsUsageRestricted}
              fullWidth
              id="addcollection_usageRestricted"
              label={
                <FormattedMessage id="ui-finc-config.collection.usageRestricted">
                  {(msg) => msg + ' *'}
                </FormattedMessage>
              }
              name="usageRestricted"
              placeholder="Select if usage is restricted for the metadata collection"
              validate={Required}
            />
          </Col>
        </Row>
        {/* PERMITTED FOR is repeatable */}
        <div className={BasicCss.addMarginBottomAndTop}>
          <Row>
            <Label className={BasicCss.styleForFormLabel}>
              <FormattedMessage id="ui-finc-config.collection.permittedFor" />
            </Label>
          </Row>
          <Row>
            <Col xs={12}>
              <FormattedMessage id="ui-finc-config.collection.permittedFor">
                {ariaLabel => (
                  <FieldArray
                    ariaLabel={ariaLabel}
                    component={RepeatableField}
                    id="display_permittedFor"
                    // add name to the array-field, which should be changed
                    name="permittedFor"
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
              component={Select}
              dataOptions={dataOptionsFreeContent}
              fullWidth
              id="addcollection_freeContent"
              label={
                <FormattedMessage id="ui-finc-config.collection.freeContent">
                  {(msg) => msg}
                </FormattedMessage>
              }
              name="freeContent"
              placeholder="Select if content is free for the metadata collection"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <Field
              component={Select}
              dataOptions={dataOptionsLodPublication}
              fullWidth
              id="addcollection_lodpublication"
              label={
                <FormattedMessage id="ui-finc-config.collection.lod.publication">
                  {(msg) => msg}
                </FormattedMessage>
              }
              name="lod.publication"
              placeholder="Select the LOD publication for the metadata collection"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <Field
              component={TextField}
              fullWidth
              id="addcollection_lodnote"
              label={
                <FormattedMessage id="ui-finc-config.collection.lod.note">
                  {(msg) => msg}
                </FormattedMessage>}
              name="lod.note"
              placeholder="Enter a LOD note for the metadata collection"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <Field
              component={TextField}
              fullWidth
              id="addcollection_generalNotes"
              label={
                <FormattedMessage id="ui-finc-config.collection.generalNotes">
                  {(msg) => msg}
                </FormattedMessage>}
              name="generalNotes"
              placeholder="Enter a general note for the metadata collection"
            />
          </Col>
        </Row>
      </Accordion>
    );
  }
}

CollectionManagementForm.propTypes = {
  accordionId: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default CollectionManagementForm;
