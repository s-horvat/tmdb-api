import React from "react";
import { useParams } from "react-router-dom";

function DetailsPage() {
  const params = useParams();
  console.log("params", params);

  return <div>DetailsPage</div>;
}

export default DetailsPage;
