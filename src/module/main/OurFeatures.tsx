import { Button } from "components/button";
import { LayoutContainer } from "components/layout";
import {
  OurFeaturesBox,
  OurFeaturesDesc,
  OurFeaturesHeading,
  OurFeaturesUserWrapper,
} from "./parts/ourfeatures";

const OurFeatures = () => {
  return (
    <section className="ourfeatures">
      <LayoutContainer>
        <div className="flex flex-col items-center">
          <OurFeaturesHeading />
          <OurFeaturesDesc />
        </div>
        <OurFeaturesUserWrapper />
        <OurFeaturesBox kind={false} src="/features-img-1.png">
          <h3 className="features-box-heading">
            <span className="features-box-heading-secondary">Tools</span> For
            Teachers And Learners
          </h3>
          <p className="features-box-desc">
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can handout assignments in real-time for
            students to complete and submit.
          </p>
        </OurFeaturesBox>
        <OurFeaturesBox kind={true} src="/features-img-2.png">
          <h3 className="features-box-heading">
            Assessments,{" "}
            <span className="features-box-heading-secondary">Quizzes</span>,
            Tests
          </h3>
          <p className="features-box-desc">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </p>
        </OurFeaturesBox>
        <OurFeaturesBox kind={false} src="/features-img-3.png">
          <h3 className="features-box-heading">
            <span className="features-box-heading-secondary">
              Class Management
            </span>{" "}
            Tools for Educators
          </h3>
          <p className="features-box-desc">
            Class provides tools to help run and manage the class such as Class
            Roster, Attendance, and more. With the Gradebook, teachers can
            review and grade tests and quizzes in real-time.
          </p>
        </OurFeaturesBox>
        <OurFeaturesBox kind={true} src="/features-img-4.png">
          <h3 className="features-box-heading">
            Tests One-on-One{" "}
            <span className="features-box-heading-secondary">Discussions</span>
          </h3>
          <p className="features-box-desc">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </p>
        </OurFeaturesBox>
        <div className="flex justify-center items-center mx-auto">
          <Button
            type="button"
            className="bg-white border border-secondary text-secondary"
          >
            See more features
          </Button>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default OurFeatures;
