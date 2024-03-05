import React from "react";
import "./Aboutus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Aboutus: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="main4">
      <div
        className="back"
        onClick={() => {
          navigate("/Profile");
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="details">
        <div className="About-head1">
          <p className="about"> ABOUT </p>
          <p className="pride"> PRIDE EDUCATE </p>
        </div>
        <div className="infoA">
          <p className="text">
            Pride EduCare is a company based at Mumbai which is committed to
            increase the employability of youth by providing the best technical
            skills, knowledge and training. We have an extensive experience of
            more than 13 years in education sector. All our teachers are well
            qualified and experienced in their domain. They go out of their way
            to train and develop the technical and soft skills of our students.
            This is precisely the reason, we have trained more than 1,00,000
            students who are doing well in their professional lives.During our
            interaction, we have realised the challenges faced by the youth
            especially who come from tier 2 and tier 3 cities. With this virtual
            classroom course, we are determined to eradicate them. This is the
            reason our courses are taught in simple English and Hindi so that
            students can understand them easily. We are also expanding it to
            other Indian languages. Pride EduCare invites you to become our
            Virtual Partner (VP). You retain your identity and after a small
            registration process, you can start your classes immediately.
          </p>
        </div>
      </div>
    </div>
  );
};
