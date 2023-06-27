import React from "react";
import { Col, ListGroupItem } from "react-bootstrap";
import { LinkData } from "../Utils/LinkData";

interface ListLinkWidgetProps {
  data: LinkData;
}

const ListLinkWidget: React.FC<ListLinkWidgetProps> = ({
  data: { image, name, url },
}) => {
  return (
    <ListGroupItem>
      <a style={{ color: "inherit", textDecoration: "none" }} href={url}>
        <Col className="">{image}</Col>
        <Col className="d-none d-sm-block">&nbsp;&nbsp;{name}</Col>
      </a>
    </ListGroupItem>
  );
};

export default ListLinkWidget;
