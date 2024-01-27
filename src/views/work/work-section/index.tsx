import Grid from "@/components/grid";
import { OurWorkCard } from "@/components/cards";
import { Fragment, useState } from "react";
import classes from "./work-section.module.scss";
import { IOtherWorkCard } from "@/components/cards/other-work-card/otherwork";
import Modal from "@/components/modal";
import FormComponent from "@/components/custom-form-generator";
import { IWorkSection } from "./work-section";
import TextAnimator from "@/components/text-animator";

const WorkSection = (props: IWorkSection) => {
  const {
    title,
    cardDetails,
    ModalFormTextData,
    ModalFormData,
    MORE_CASE_STUDY_INITIAL_VALUES,
    MORE_CASE_STUDY_SCHEMA,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <Grid fullWidth>
        <Grid container className={classes.contentWrapper}>
          <Grid item className={classes.titleItem}>
            <TextAnimator
              variant="heading-6"
              fontVariant="light"
              text={title}
              customStylingOnText={classes.title}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.cardContainer}>
          {cardDetails.map((data: IOtherWorkCard, index: number) => {
            return (
              <Grid
                item
                sm={4}
                md={4}
                lg={4}
                className={classes.cardContainer}
                key={index}
              >
                <OurWorkCard {...data} />
              </Grid>
            );
          })}
        </Grid>
        {isModalOpen && (
          <Modal
            heading={ModalFormTextData?.heading}
            onClose={() => setIsModalOpen(false)}
          >
            <FormComponent
              subText={ModalFormTextData?.subText}
              formFields={ModalFormData}
              initialValues={MORE_CASE_STUDY_INITIAL_VALUES}
              schema={MORE_CASE_STUDY_SCHEMA}
              onHandleSubmitForm={() => {}}
            />
          </Modal>
        )}
      </Grid>
    </Fragment>
  );
};

export default WorkSection;
