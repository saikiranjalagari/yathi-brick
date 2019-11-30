import React,{Component} from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import orderBy from "lodash/orderBy";
import "./App.css";
import Form from "./Form";
import Table from "./Table";


const invertDirection = {
  asc: "desc",
  desc: "asc"
};

class App extends Component {
  state = {
    data: [
      {
        phonenumber: "94234934234",
        order: "1232",
        username: "tgounin0",
        count:'10'
      },
      {
        phonenumber: "0953495495",
        order: "1235",
        username: "ericioppo1",
        count:'21'

      },
      {
        phonenumber: "998737623",
        order: "099",
        username: "bdecourt2",
        count:'64'
      },
      {
        phonenumber: "9988420122",
        order: "9909",
        username: "hchoudhury3",
        count:'76'

      },
      {
        phonenumber: "0909342344",
        order: "1234",
        username: "aspedroni4",
        count:'12'

      },
      
    ],
    editIdx: -1,
    columnToSort: "",
    sortDirection: "desc"
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleSave = (i, x) => {
    this.setState(state => ({
      data: state.data.map((row, j) => (j === i ? x : row))
    }));
    this.stopEditing();
  };

  handleSort = columnName => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : "asc"
    }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })
            }
          />
          <Table
            handleSort={this.handleSort}
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleSave={this.handleSave}
            columnToSort={this.state.columnToSort}
            sortDirection={this.state.sortDirection}
            data={orderBy(
              this.state.data,
              this.state.columnToSort,
              this.state.sortDirection
            )}
            header={[
            
              {
                name: "Username",
                prop: "username"
              },

              {
                name: "Phone Number",
                prop: "phonenumber"
              },
              {
                name: "No of Order",
                prop: "order"
              }
              ,
              {
                name: "Order Id",
                prop: "count"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
