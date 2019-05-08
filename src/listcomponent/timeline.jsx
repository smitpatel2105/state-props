import React, { Component } from "react";
import Content from "./content";

class TImeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      items: [],
      data: []
    };

    var dataJson = [
      {
        id: 1,
        name: "smit",
        description: "React",
        date: "21 May 2018",
        time: "10:11 PM",
        image:
          "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png"
      },
      {
        id: 2,
        name: "Abhi",
        description: ".Net",
        date: "2 June 1918",
        time: "14:11 AM",
        image:
          "https://cdn4.iconfinder.com/data/icons/forum-buttons-and-community-signs-1/794/profile-3-512.png"
      },
      {
        id: 3,
        name: "Dhruv",
        description: "Java",
        date: "8 May 2018",
        time: "10:1 PM",
        image:
          "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png"
      },
      {
        id: 4,
        name: "Harsh",
        description: ".Net",
        date: "2 June 1918",
        time: "14:11 AM",
        image:
          "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png"
      },
      {
        id: 5,
        name: "Aman",
        description: ".Net",
        date: "2 June 1918",
        time: "14:11 AM",
        image:
          "https://cdn4.iconfinder.com/data/icons/forum-buttons-and-community-signs-1/794/profile-3-512.png"
      }
    ];

    dataJson.forEach(obj => {
      this.state.data.push(obj);
    });

    // console.log(this.state.data);
    this.state.data.forEach(obj => {
      this.state.items.push(<Content details={obj} />);
    });

    this.filterData = this.filterData.bind(this);
  }

  filterData(event) {
    var val = event.target.value; //text box

    this.setState({
      searchText: val
    });

    var updatedFilterData = this.state.data.filter(function(obj) {
      return obj.name.toLowerCase().search(val.toLowerCase()) !== -1;
    });

    var searchItems = [];
    updatedFilterData.forEach(obj => {
      searchItems.push(<Content details={obj} />);
    });

    this.state.items = searchItems;

    //console.log(updatedFilterData);
    //this.state.searchText = "aaa";
    //console.log(event.target.value);
  }

  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="searchbar">
              <input
                className="search_input"
                type="text"
                name=""
                value={this.state.searchText}
                placeholder="Search..."
                onChange={this.filterData}
              />
              <a href="#" className="search_icon">
                <i className="fas fa-search" />
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <h2>TRACK INFO</h2>
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div id="tracking-pre" />
              <div id="tracking">
                <div className="text-center tracking-status-intransit">
                  <p className="tracking-status text-tight">in transit</p>
                </div>
                <div className="tracking-list">{this.state.items}</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TImeline;
