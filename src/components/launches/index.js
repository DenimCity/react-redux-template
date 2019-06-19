import dayjs from 'dayjs';
import PropTypes from "prop-types";
import React, { Component, Fragment } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from "react-redux";
import { getLaunches } from '../../actions/launches';

export class Launches extends Component {

      static propTypes = {
            launches: PropTypes.array.isRequired,
      }

      componentWillMount(){
            this.props.getLaunches()
      }
      
    render() {
          const { launches } = this.props;
            return (
            <Fragment>
                  <h1>Launches</h1>
                  <Table striped bordered hover>
                        <thead>
                        <tr>
                              <td>Flight Number</td>
                              <td>Mission</td>
                              <td>Details</td>
                              <td>Launch Status</td>
                              <td>Launch Date</td>
                              <td>Launch Year</td>
                              <td>Launch Site</td>
                              
                        </tr>
                        </thead>
                          <tbody>
                              {launches.map((launch, index) => {
                                    return (
                                         <tr key={index}>
                                               <td>{launch.flight_number}</td>
                                               <td>{launch.mission_name}</td>
                                               <td>{launch.details ? launch.details : 'Details N/A'}</td>
                                               <td>{launch.launch_success ? "Successful" : "Failed Launch"}</td>
                                               <td>{dayjs(launch.launch_date_utc).format("MM-DD-YYYY hh:mm")}</td>
                                               <td>{launch.launch_year}</td>
                                               <td>{launch.launch_site.site_name}</td>
                                         </tr> 
                                    )
                              })}
                        </tbody>
            </Table>
            </Fragment>
      )
    }
}

const mapStateTpProps = state => {
      return {
            launches: state.launches.launches
      }
}

export default connect(mapStateTpProps,{ getLaunches })(Launches);
