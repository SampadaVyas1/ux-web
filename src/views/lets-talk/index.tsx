import { memo } from "react";
import withContainer from "@/hocs/withContainer";
import Grid from "@/components/grid";
import ContactUsForm from "@/shared-components/contact-us";
import { CONTACT_US_FIELDS } from "./contact-us-form.helper";
import {
  CONTACT_US_INITIAL_VALUES,
  CONTACT_US_SCHEMA,
} from "./contact-us-form.schema";
import TrackLines from "@/components/drone-animation/track-lines";

const CommunicationComp = () => {
  return (
    <Grid fullWidth>
      <TrackLines customGridClass="formGrids">
        <ContactUsForm
          formFields={CONTACT_US_FIELDS}
          schema={CONTACT_US_SCHEMA}
          initialValues={CONTACT_US_INITIAL_VALUES}
        />
      </TrackLines>
    </Grid>
  );
};

export default memo(withContainer(CommunicationComp));
