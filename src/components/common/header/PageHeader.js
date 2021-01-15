import React from "react";
import { Link } from "components/base/link";

function PageHeader(props) {
  return (
    <div>
      <Link path="/" ml={2} label="홈" />
      <Link path="/education" ml={2} label="교육자료" />
    </div>
  );
}

export default PageHeader;
