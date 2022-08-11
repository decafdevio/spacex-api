import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";

const Launches = props => {

    const [rocket, setRocket] = useState("");

        const getRocket = (id) => {
            let rocketID = ("https://api.spacexdata.com/v4/rockets/" + id)
                axios
                .get(rocketID)
                .then(response => {
                    console.log("new data: ", response.data.name)
                    setRocket(response.data.name)
                })
                return rocket
        }

        const splitDate = (date) => {
        let temp = date.split("T");
        let day = temp[0];
        let tmpTime = temp[1];
        let time = tmpTime.split(":00.000Z")
        return (
            day + " at " + time[0]
        )
        }

  return (
    <div>
      {props.error ?
      (
        <div>{props.error}</div>
      ) : (
        props.launches.map(launch =>
            (
                <div className="p-4 border rounded m-4" key={props.key}>
                    <Row className="p-4">
                        <Col className="col-5">
                            <h2>{launch.name}</h2><br/>
                            <img src={launch.links.patch.small} style={{maxHeight: "100px"}} />
                        </Col>
                        <Col className="col-7">
                        <dl>
                            <dt>Date</dt>
                            <dd>{splitDate(launch.date_utc)}</dd>

                            {launch.details ? (
                                <>
                                    <dt>Details</dt>
                                    <dd>{launch.details}</dd>
                                </>) : 
                            ("")}

                            <dt>Outcome</dt>
                            {launch.success ? (
                                <>
                                    <dd>Success</dd>
                                </>) : 
                            (
                                <>
                                <dd>Failed</dd>
                                </>
                            )}

                            <dt>Rocket</dt>
                            {/* <dd>{getRocket(launch.rocket)}</dd>
                            infinite loop */}
                        </dl>
                        </Col>
                    </Row>
                </div>
            ))
      )
    }
    </div>
  );
};

export default Launches;