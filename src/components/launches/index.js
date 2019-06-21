import dayjs from 'dayjs';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { getLaunches } from '../../redux/actions/launches';

const Launches = (props) => {
  const { launches } = props;


  useEffect(() => {
    props.getLaunches();
  }, []);


  const tableData = launches.map(launch => ({
    flightNumber: launch.flight_number,
    missionName: launch.mission_name,
    details: launch.details ? `${launch.details.substring(0, 20)}...` : 'Details N/A',
    launchDate: dayjs(launch.launch_date_utc).format('hh:mm '),
    launchStatus: launch.launch_success ? 'Successful' : 'Failed Launch',
    launchYr: launch.launch_year,
    launchSite: launch.launch_site.site_name_long,
  }));


  return (
    <Fragment>
      <h1>Launches</h1>
      <ReactTable
        data={tableData}
        defaultPageSize={8}
        resizable
        columns={[
          {
            Header: 'Flight Number',
            accessor: 'flightNumber',
          },
          {
            Header: 'Mission',
            accessor: 'missionName',
          },
          {
            Header: 'Details',
            accessor: 'details',
          },
          {
            Header: 'Launch Status',
            accessor: 'launchStatus',
          },
          {
            Header: 'Launch Date',
            accessor: 'launchDate',
          },
          {
            Header: 'Launch Year',
            accessor: 'launchYr',
          },
          {
            Header: 'Launch Site',
            accessor: 'launchSite',
          },
        ]}
      />
    </Fragment>
  );
};


const mapStateTpProps = state => ({
  launches: state.launches.launches,
});


export default connect(mapStateTpProps, { getLaunches })(Launches);
