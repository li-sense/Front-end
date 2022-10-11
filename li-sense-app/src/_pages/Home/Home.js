import React from "react";
import { Components } from "../../_components/Components";

import "./Home.css";
import { data } from "../../FakeData";
export default function Home() {

  return (
    <>
      <div className="flex flex-col mb-20 items-center ">
        <div className="mt-10 mb-8">
          <Components.Filters />
        </div>
        <div className="flex flex-wrap justify-center">
          {data.map((_value, key) => (
            <Components.Card data={_value} key={key} />
          ))}
        </div>
        <button className="mt-4 filter">Ver mais</button>
      </div>
    </>
  );
}
