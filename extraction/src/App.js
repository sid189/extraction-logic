import React, { Component } from 'react';
import { CsvToHtmlTable } from "react-csv-to-table";
import Select from 'react-select';

import { disclosureData } from "./disclosure.js";
import { creditData } from "./credit.js";
import { w2Data } from "./w2.js";
import { paystubData } from "./paystub.js";
import { appraisalData } from "./appraisal.js";
import { feedbackData } from "./feedback.js";
//import { DropdownMultiple, Dropdown } from 'reactjs-dropdown-component';

const options = [
  { value: appraisalData, label: 'Appraisal' },
  { value: feedbackData, label: 'DU Codified Findings' },
  { value: disclosureData, label: 'Disclosure' },
  { value: creditData, label: 'Credit Report' },
  { value: '', label: 'ARM' },
  { value: paystubData, label: 'Pay Stubs' },
  { value: w2Data, label: 'W2' },
];

class App extends Component {
    constructor(){
    super()
    this.state = {
      doctype: [
        {
          id: 0,
          title: 'Appraisal',
          selected: false,
          key: 'doctype'
        },
        {
          id: 1,
          title: 'DU Codified Findings',
          selected: false,
          key: 'doctype'
        },
        {
          id: 2,
          title: 'Disclosure',
          selected: false,
          key: 'doctype'
        },
        {
          id: 3,
          title: 'Credit Report',
          selected: false,
          key: 'doctype'
        },
        {
          id: 4,
          title: 'ARM',
          selected: false,
          key: 'doctype'
        },
        {
          id: 5,
          title: 'Pay Stub',
          selected: false,
          key: 'doctype'
        },
        {
          id: 6,
          title: 'W2',
          selected: false,
          key: 'doctype'
        }
      ],
      clients: [
        {
          id: 0,
          title: 'Black Knight',
          selected: false,
          key: 'clients'
        },
        {
          id: 1,
          title: 'Google',
          selected: false,
          key: 'clients'
        },
        {
          id: 2,
          title: 'Heavy Water',
          selected: false,
          key: 'clients'
        },
        {
          id: 3,
          title: 'Yahoo',
          selected: false,
          key: 'clients'
        },
        {
          id: 4,
          title: 'We Pay',
          selected: false,
          key: 'clients'
        }

      ]
    }
  }

  handleChange = (doctype) => {
    this.setState({ doctype });
  }

  componentDidMount() {
    window.addEventListener("keydown", this.tabKeyPressed);
    window.addEventListener("mousedown", this.mouseClicked);
  }

  tabKeyPressed = (e) => {
    if (e.keyCode === 9) {
      document.querySelector('body').classList.remove("noFocus")
      window.removeEventListener('keydown', this.tabKeyPressed);
      window.addEventListener('mousedown', this.mouseClicked);
    }
  }

  mouseClicked = (e) => {
    document.querySelector('body').classList.add("noFocus")
    window.removeEventListener('mousedown', this.mouseClicked);
    window.addEventListener('keydown', this.tabKeyPressed);
  }



  toggleItem = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }


  render() {
    const { selectedOption } = this.state;
    console.log("These are the options");
    console.log(selectedOption);
    return (
      <React.Fragment>
      <Select
        isMulti
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />



      {this.state.doctype.map(o =>

            <CsvToHtmlTable
              data={o.value}
              csvDelimiter=","
              tableClassName="table table-striped table-hover"
            />)}
      </React.Fragment>
      /*<div className="App">


        <div className="wrapper">
          <DropdownMultiple
            titleHelper="Document Type"
            title="Select Document Type"
            list={this.state.doctype}
            toggleItem={this.toggleItem}
          />



        </div>

      </div> */
    );
  }
}

export default App;
