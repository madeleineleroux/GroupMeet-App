import React from "react";
import Helmet from 'react-helmet';
import { faCalendar, faListUl, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";

const Welcome = () => {
    var screenHeight = screen.height;
    if (screenHeight < 800) {
        $('body').css('zoom', 0.8);
    } else {
        $('body').css('zoom', 1);
    }

    return <div className="welcome">
        <Helmet bodyAttributes={{style: 'background-color : #E2E2E2'}}/>
        <h1 className="welcome">Welcome</h1>
        <h2 className="welcome">Let's get started.</h2>
        <Table id="welcomeTable">
            <tbody>
            <tr>
                <td className="welcomeCol" id="firstCol">
                    <a href="/calendar">
                        <div>
            <FontAwesomeIcon  size="6x" id="icon" icon={faCalendarAlt} color="#124E78" />
                <p className="colMsg"> Update your schedule.</p>
                        </div>
                    </a>
                </td>

                <td className="welcomeCol">
                    <a href="/tasks">
                    <div>
                <FontAwesomeIcon size="6x" id="icon" icon={faListUl} color="#124E78" />
                <p className="colMsg"> Manage your tasks.</p>
                    </div>
                    </a>
                </td>

                <td className="welcomeCol">
                    <a href="/group">
                <div className="welcomeCol" id="lastCol">
                <FontAwesomeIcon icon={faCalendar} size="6x" color="#124E78" />
                <p className="colMsg"> See when your group can meet.</p>
                </div>
                    </a>
                </td>
            </tr>
            </tbody>
        </Table>
    </div>
};

export default Welcome;