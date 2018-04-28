import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import * as API from '../../api/API';
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales
} from "variables/Variables.jsx";

// Data for Pie Chart
var dataPie = {
  labels: ["40%", "20%", "40%"],
  series: [40, 20, 40,40, 20, 40,40, 20, 40,20]
};
var legendPie = {
  names: ["Open", "Bounce", "Unsubscribe"],
  types: ["info", "danger", "warning"]
};


// Data for Bar Chart
var dataBar = {};
var dataBar2 = {};
var dataBar3 = {};
var dataBar4 = {};
/*var dataBar = {
  labels: ["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
  ]
}; */
var optionsBar = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: "245px"
};
var responsiveBar = [
  [
    "screen and (max-width: 640px)",
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
var legendBar = {
  names: ["Movie Rating"],
  types: ["info"]
};

var legendBar2 = {
  names: ["Clicks Per Page"],
  types: ["info"]
};
var legendBar3 = {
  names: ["click Per Movies"],
  types: ["info"]
};
var legendBar4 = {
  names: ["Less Seen Part of the Website"],
  types: ["info"]
};

class Dashboard extends Component {
  state = {
    total_movie:'',
    total_revenue:'345,345',
    sold_tickets:'12,123,123',
    registered_user:'40,000',
    trackuser: [],
    track: {}
  }

  componentWillMount(){
    console.log("You are in Admin Dashboard componentwillmount");
    API.check()
      .then((response)=> {
        console.log("response --->"+JSON.stringify(response));
        if(response.code === 200){
          //alert("check successful");

          dataBar.labels = response.movies;
          dataBar.series[0] = response.avg;

          dataBar2.labels = response.pages;
          dataBar2.series[0] = response.count;

          dataBar3.labels = response.movieclick;
          dataBar3.series[0] = response.mcount;

          dataBar4.labels = response.pageslessseen;
          dataBar4.series[0] = response.lesscount;

          //console.log("track"+response.track);
          this.setState({
            total_movie : response.total_movies,
            trackuser: response.trackuser,
            track: response.track
          });

        }
      });
  }
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          {/* ///////////////////////////////////////////       Row  -  1 */}
          <Row>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-wallet text-success" />}
              statsText="Total Revenue"
              statsValue={this.state.total_revenue}
              statsIcon={<i className="fa fa-calendar-o" />}
              statsIconText="Till Last day"
            />
          </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-film text-warning" />}
                statsText="Total Movies"
                statsValue={this.state.total_movie}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Running Now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Sold Tickets"
                statsValue={this.state.sold_tickets}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="Till Today"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-users text-info" />}
                statsText="Register Users"
                statsValue={this.state.registered_user}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="Till Now"
              />
            </Col>
          </Row>

          {/* ///////////////////////////////////////////       Row  -  2 */}
          <Row>
          <Col md={4}>
            <Card
              statsIcon="fa fa-clock-o"
              title="Email Statistics"
              category="Last Campaign Performance"
              stats="Campaign sent 2 days ago"
              content={
                <div
                  id="chartPreferences"
                  className="ct-chart ct-perfect-fourth"
                >
                  <ChartistGraph data={dataPie} type="Pie" />
                </div>
              }
              legend={
                <div className="legend">{this.createLegend(legendPie)}</div>
              }
            />
          </Col>
          <Col md={4}>
            <Card
              statsIcon="fa fa-clock-o"
              title="Email Statistics"
              category="Last Campaign Performance"
              stats="Campaign sent 2 days ago"
              content={
                <div
                  id="chartPreferences"
                  className="ct-chart ct-perfect-fourth"
                >
                  <ChartistGraph data={dataPie} type="Pie" />
                </div>
              }
              legend={
                <div className="legend">{this.createLegend(legendPie)}</div>
              }
            />
          </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          {/* ///////////////////////////////////////////       Row  -  3 */}
          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="All Movie Rating"
                category="Rating given by Registered Users"
                stats="Data information Realtime"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                id="chartActivity"
                title="Click Per Pages"
                category="Every Page click counts"
                stats="Data information Realtime"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar2}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar2)}</div>
                }
              />
            </Col>
          </Row>

          {/* ///////////////////////////////////////////       Row  -  4 */}
          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="click Per Movies"
                category="Track the Click on Movie By Users"
                stats="Data information Realtime"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar3}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar3)}</div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                id="chartActivity"
                title="Less seen Pages of the Websites"
                category="Every Page click counts"
                stats="Data information Realtime"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar4}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar4)}</div>
                }
              />
            </Col>
          </Row>

        </Grid>

          {this.state.trackuser.map(function(user, index){
                return <p className="d-inline p-2 bg-dark text-white">{user}</p>
          })}


      </div>
    );
  }
}

export default Dashboard;

/*      <tbody>
            <tr>
                  <td><div className="bg-info w-100 mr-5"> User Tacking </div></td>

            </tr>
            <tr>
            {this.state.trackuser.map(function(user, index){
                  return <Col lg={2} sm={3}><StatsCard statsText={user}/></Col>
            })}
        </tr>
      </tbody>
  </table>*/
