import dayjs from 'dayjs';
import React, { Fragment, useEffect } from 'react';
import { connect } from "react-redux";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { getLaunches } from '../../redux/actions/launches';

const Launches = (props) =>  {
      
      const { launches } = props;
      useEffect(()=> {
            props.getLaunches()
      });
            return (
            <Fragment>
                  <h1>Launches</h1>
            <ReactTable 
                  data= {launches}
                  defaultPageSize={ 8 }
                  resizable={ true }
                  columns={[
                        { 
                        Header: 'Flight Number',
                        Cell: props => <div style={{ textAlign: 'center'}}> {props.original.flight_number}</div>
                        },
                        { 
                        Header: 'Mission',
                        Cell: props => <div style={{ textAlign: 'center'}}> {props.original.mission_name}</div>
                        },
                        {
                        Header: 'Details',
                        Cell:  props => <div style={{ textAlign: 'center'}}> {props.original.details && props.original.details.length > 45 ? `${props.original.details.substring(0,20)}...` : 'Details N/A'}</div>
                        },
                        { Header: 'Launch Status',
                        Cell: props => <div style={{ textAlign: 'center'}}> {props.original.launch_success ? "Successful" : "Failed Launch"}</div>
                        },
                        { Header: 'Launch Date',
                        Cell: props => <div style={{ textAlign: 'center'}}> {dayjs(props.original.launch_date_utc).format("MM-DD-YYYY hh:mm")}</div>
                        },
                        { Header: 'Launch Year',
                        Cell: props => <div style={{ textAlign: 'center'}}> {props.original.launch_year}</div>
                        }
                        ]}/>
            </Fragment>
            )
}

const mapStateTpProps = state => {
      return {
            launches: state.launches.launches
      }
}

export default connect(mapStateTpProps,{ getLaunches })(Launches);
