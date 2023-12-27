import React from "react";
import Accordion from "react-bootstrap/Accordion";

function Acc() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Retina surgery</Accordion.Header>
      <Accordion.Body>
        Retina surgery is a delicate procedure performed to address conditions affecting the thin, light-sensitive tissue at the back of the eye. Surgeons use advanced techniques, such as vitrectomy, to remove or repair damaged areas in the retina. Precision is crucial to restore or enhance vision by addressing issues like retinal detachment, macular holes, or diabetic retinopathy. Microscopic instruments and laser technology may be employed to achieve optimal outcomes. Close post-operative monitoring is essential for successful recovery and improved visual function.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Eye surgery</Accordion.Header>
        <Accordion.Body>
        Eye surgery, also known as ocular surgery, involves procedures to treat various eye conditions. Surgeons use advanced techniques to correct refractive errors like myopia or astigmatism, remove cataracts, and address issues such as glaucoma. Procedures may include LASIK for vision correction or cataract surgery to replace a cloudy lens with an artificial one. Surgeons prioritize precision and safety, often utilizing cutting-edge technology like laser systems for optimal outcomes. Recovery times vary, but many patients experience improved vision shortly after the procedure.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Acc;
