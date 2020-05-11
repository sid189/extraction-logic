import React from "react";
import { CsvToHtmlTable } from "react-csv-to-table";

import { disclosureData } from "./disclosure.js";
import { creditData } from "./credit.js";
import { w2Data } from "./w2.js";
import { paystubData } from "./paystub.js";
import { appraisalData } from "./appraisal.js";
import { feedbackData } from "./feedback.js";

export const App = () => {
  return (
    <div className="container">

      <h2> Disclosure Data</h2>

      <br/><br/>
      <CsvToHtmlTable
        data={disclosureData}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      />


      <h2> Credit Data</h2>

      <br/><br/>
      <CsvToHtmlTable
        data={creditData}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      />


      <h2> W2 Data</h2>

      <br/><br/>
      <CsvToHtmlTable
        data={w2Data}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      />


      <h2> Pay Stub Data</h2>

      <br/><br/>
      <CsvToHtmlTable
        data={paystubData}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      />


      <h2> Appraisal Data</h2>

      <br/><br/>
      <CsvToHtmlTable
        data={appraisalData}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      />


      <h2> Feedback Data</h2>

      <br/><br/>
      <CsvToHtmlTable
        data={feedbackData}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      />


    </div>
  );
};

export default App;
