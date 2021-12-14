import React from "react";
import Header from "../../components/header";
import FormAdd from "../../components/formAdd";
import View from "../../components/view";

export default function Home() {
  return (
    <div className='container'>
      <Header />
      <section className='row '>
        <div className='col-lg-6'>
          <FormAdd />
        </div>

        <div className='col-lg-6'>
          <View />
        </div>
      </section>
    </div>
  );
}
