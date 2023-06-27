import React from "react";
import { ListGroupItem } from "react-bootstrap";
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
        {image}
        &nbsp;&nbsp;{name}
      </a>
    </ListGroupItem>
  );
};

export default ListLinkWidget;
