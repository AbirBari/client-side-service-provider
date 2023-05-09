import ViewAllServices from "@/components/Services/ViewAllServices";
import axios from "axios";
import React from "react";

export default function ViewServicesPage({ data }) {
  return (
    <div>
      <ViewAllServices data={data} />
    </div>
  );
}
export async function getServerSideProps() {
  const response = await axios.get(
    "http://localhost:3000/worker/view-services/12"
  );
  const data = await response.data;

  return {props: { data } };

}
