import React from "react";
import {
  Button,
  Col,
  Row,
  Text,
  Image,
  Markdown,
  WhatsappLink,
  Form,
  Field,
  Features,
} from "blocks/index";

const Section = (props) => {
  let SectionBlock;

  switch (props._block) {
    case "row": {
      SectionBlock = Row;
      break;
    }
    case "col": {
      SectionBlock = Col;
      break;
    }
    case "text": {
      SectionBlock = Text;
      break;
    }
    case "image": {
      SectionBlock = Image;
      break;
    }
    case "markdown": {
      SectionBlock = Markdown;
      break;
    }
    case "whatsapp_link": {
      SectionBlock = WhatsappLink;
      break;
    }
    case "form": {
      SectionBlock = Form;
      break;
    }
    case "field": {
      SectionBlock = Field;
      break;
    }
    case "button": {
      SectionBlock = Button;
      break;
    }
    case "features": {
      SectionBlock = Features;
      break;
    }
  }

  return <SectionBlock {...props} />;
};

export default Section;
