var require = meteorInstall({"imports":{"ui":{"components":{"Accounts":{"AccountsUIWrapper.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/Accounts/AccountsUIWrapper.js                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  default: () => AccountsUIWrapper
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let ReactDOM;
module.link("react-dom", {
  default(v) {
    ReactDOM = v;
  }

}, 1);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 2);
let Blaze;
module.link("meteor/blaze", {
  Blaze(v) {
    Blaze = v;
  }

}, 3);

class AccountsUIWrapper extends Component {
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount() {
    Blaze.remove(this.view);
  }

  render() {
    return React.createElement("span", {
      align: "right",
      ref: "container"
    });
  }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"GroupView":{"GroupTable.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/GroupView/GroupTable.js                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let Hour;
module.link("./Hour", {
  default(v) {
    Hour = v;
  }

}, 0);
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 1);
let Table;
module.link("react-bootstrap/Table", {
  default(v) {
    Table = v;
  }

}, 2);

class GroupTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    const DAYS = [0, 1, 2, 3, 4, 5, 6];
    let d = this.props.moment.startOf('week').date();
    return React.createElement(Table, {
      hover: true,
      className: "groupTable"
    }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null), React.createElement("th", null, "S"), React.createElement("th", null, "M"), React.createElement("th", null, "T"), React.createElement("th", null, "W"), React.createElement("th", null, "T"), React.createElement("th", null, "F"), React.createElement("th", null, "S"))), React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null), DAYS.map(day => React.createElement("th", null, day + d)))), React.createElement("tbody", null, HOURS.map(hour => React.createElement(Hour, {
      id: hour,
      key: hour,
      allHours: this.props.group
    }))));
  }

}

module.exportDefault(GroupTable);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"GroupWeek.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/GroupView/GroupWeek.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  TableTracker: () => TableTracker
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let GroupTable;
module.link("./GroupTable", {
  default(v) {
    GroupTable = v;
  }

}, 1);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 2);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 3);
let GroupSchedule;
module.link("../../../api/group", {
  default(v) {
    GroupSchedule = v;
  }

}, 4);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 5);
let Tracker;
module.link("tracker-component", {
  default(v) {
    Tracker = v;
  }

}, 6);
let Spinner;
module.link("react-bootstrap/Spinner", {
  default(v) {
    Spinner = v;
  }

}, 7);

class GroupWeek extends Tracker.Component {
  constructor(props) {
    super(props);

    this.handleNextWeek = e => {
      e.preventDefault();
      this.props.nextWeek(this.props.group._id);
    };

    this.handleLastWeek = e => {
      e.preventDefault();
      this.props.lastWeek(this.props.group._id);
    };

    this.subscribe('group');
    this.handleNextWeek = this.handleNextWeek.bind(this);
    this.handleLastWeek = this.handleLastWeek.bind(this);
  }

  render() {
    let moment = require('moment/moment');

    moment.defaultFormat = "YYYYMMDD";
    let currMoment = moment(this.props.group._id, "YYYYMDD");
    let month = currMoment.startOf('week').format("MMMM");

    if (!currMoment.isValid()) {
      return React.createElement(Spinner, {
        id: "spinning",
        animation: "border",
        role: "status"
      });
    }

    return React.createElement("div", {
      className: "groupDiv"
    }, React.createElement("div", {
      className: "triangle-left triangle",
      onClick: this.handleLastWeek
    }), React.createElement("div", {
      id: "table"
    }, React.createElement("h1", {
      id: "month"
    }, month), React.createElement(GroupTable, {
      moment: currMoment,
      group: this.props.groupSchedule
    })), React.createElement("div", {
      className: "triangle-right triangle",
      onClick: this.handleNextWeek
    }), React.createElement("div", null, React.createElement("div", {
      className: "availableBox"
    }, "Available"), React.createElement("div", {
      className: "busyBox"
    }, "Busy")));
  }

}

const TableTracker = withTracker((_ref) => {
  let {
    groupSchedule
  } = _ref;
  Meteor.subscribe('group');
  const handle = Meteor.subscribe('group');
  const isReady = handle.ready();

  if (!isReady) {
    return {
      groupSchedule: groupSchedule
    };
  } else {
    return {
      groupSchedule: GroupSchedule.find({
        _id: groupSchedule._id
      })
    };
  }
})(GroupWeek);

const mapStateToProps = state => ({
  groupSchedule: state.GroupReducer
});

module.exportDefault(connect(mapStateToProps)(TableTracker));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Hour.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/GroupView/Hour.js                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 1);
let HourCell;
module.link("./HourCell", {
  default(v) {
    HourCell = v;
  }

}, 2);

const Hour = (_ref) => {
  let {
    id,
    allHours
  } = _ref;
  const WEEKDAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

  if (typeof allHours !== 'undefined') {
    return React.createElement("tr", null, React.createElement("td", {
      id: "groupSide"
    }, id), WEEKDAYS.map(day => React.createElement(HourCell, {
      hours: allHours[day.concat("_", id)],
      id: day.concat("_", id),
      key: day.concat("_", id)
    })));
  } else {
    return React.createElement("tr", null, WEEKDAYS.map(day => React.createElement("td", null)));
  }
};

module.exportDefault(Hour);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"HourCell.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/GroupView/HourCell.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 1);
let fetchGroup;
module.link("../../actions/GroupAction", {
  fetchGroup(v) {
    fetchGroup = v;
  }

}, 2);

class HourCell extends Component {
  render() {
    if (typeof this.props.hours !== 'undefined') {
      return React.createElement("td", {
        style: this.props.hours.availability ? {
          backgroundColor: "#1CCAD8"
        } : {
          backgroundColor: "#E2E2E2"
        }
      });
    }

    return React.createElement("td", null);
  }

}

module.exportDefault(HourCell);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"TaskView":{"ClearTaskButton.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/TaskView/ClearTaskButton.js                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Button;
module.link("react-bootstrap", {
  Button(v) {
    Button = v;
  }

}, 1);
let clearTasks;
module.link("../../actions/TaskAction", {
  clearTasks(v) {
    clearTasks = v;
  }

}, 2);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 3);

class ClearTaskButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.clearTasks(this.props.member);
  }

  render() {
    return React.createElement(Button, {
      id: "clearTasksButton",
      onClick: this.handleClick,
      block: true
    }, "Clear All");
  }

}

module.exportDefault(connect(null, {
  clearTasks
})(ClearTaskButton));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Task.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/TaskView/Task.js                                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 1);
let ListGroupItem, FormCheck;
module.link("react-bootstrap", {
  ListGroupItem(v) {
    ListGroupItem = v;
  },

  FormCheck(v) {
    FormCheck = v;
  }

}, 2);
let toggleStatus;
module.link("../../actions/TaskAction", {
  toggleStatus(v) {
    toggleStatus = v;
  }

}, 3);
let TaskDeleteButton;
module.link("./TaskDeleteButton", {
  default(v) {
    TaskDeleteButton = v;
  }

}, 4);

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  } //status, text, prints correctly, nothing else


  handleClick() {
    this.props.toggleStatus(this.props.id, this.props.member);
  }

  render() {
    return React.createElement(ListGroupItem, {
      style: {
        textDecoration: this.props.status % 2 === 1 ? 'line-through' : 'none',
        background: this.props.status % 2 === 1 ? '#1CCAD8' : '#FFFFFF'
      }
    }, React.createElement("div", {
      style: style
    }, React.createElement("div", null, React.createElement(FormCheck, {
      inline: true,
      id: "taskCheckbox",
      checked: this.props.status % 2 === 1,
      onChange: this.handleClick
    }), this.props.text), React.createElement(TaskDeleteButton, {
      id: this.props.id,
      task: this.props.id,
      member: this.props.member
    })));
  }

}

const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
};
module.exportDefault(connect(null, {
  toggleStatus
})(Task));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TaskDeleteButton.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/TaskView/TaskDeleteButton.js                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let faTrashAlt;
module.link("@fortawesome/free-solid-svg-icons", {
  faTrashAlt(v) {
    faTrashAlt = v;
  }

}, 1);
let FontAwesomeIcon;
module.link("@fortawesome/react-fontawesome", {
  FontAwesomeIcon(v) {
    FontAwesomeIcon = v;
  }

}, 2);
let deleteTask;
module.link("../../actions/TaskAction", {
  deleteTask(v) {
    deleteTask = v;
  }

}, 3);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 4);

class TaskDeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteTask(this.props.id, this.props.member);
  }

  render() {
    return React.createElement("div", null, React.createElement(FontAwesomeIcon, {
      className: "TaskDeleteButtonIcon",
      icon: faTrashAlt,
      onClick: this.handleClick
    }));
  }

}

module.exportDefault(connect(null, {
  deleteTask
})(TaskDeleteButton));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TaskGroup.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/TaskView/TaskGroup.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 1);
let TaskMember;
module.link("./TaskMember", {
  default(v) {
    TaskMember = v;
  }

}, 2);
module.link("slick-carousel/slick/slick.css");
module.link("slick-carousel/slick/slick-theme.css");
let Slider;
module.link("react-slick", {
  default(v) {
    Slider = v;
  }

}, 3);

//this is a design decision to use card deck. Alternates: CardColumns, CardGroup
// function LeftArrow(props) {
//     const { onClick } = props;
//     return (
//         <div className="triangle-left triangle" onClick={onClick}></div>
//     );
// }
//
// function RightArrow(props) {
//     const { onClick } = props;
//     return (
//         <div className="triangle-right triangle" onClick={onClick}></div>
//     );
// }
const TaskGroup = (_ref) => {
  let {
    groupMembers
  } = _ref;
  let settings = {
    className: "TaskGroup",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    slide: 'TaskMember',
    centerPadding: "60px" // prevArrow: <LeftArrow/>,
    // nextArrow: <RightArrow/>

  };
  return React.createElement(Slider, settings, Object.keys(groupMembers).map(id => React.createElement(TaskMember, (0, _extends2.default)({
    key: id,
    name: groupMembers[id].name,
    tasks: groupMembers[id].tasks,
    idKey: id
  }, id))));
};

module.exportDefault(TaskGroup);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TaskInputForm.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/TaskView/TaskInputForm.js                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 1);
let addTask;
module.link("../../actions/TaskAction", {
  addTask(v) {
    addTask = v;
  }

}, 2);
let Button;
module.link("react-bootstrap/Button", {
  default(v) {
    Button = v;
  }

}, 3);
let InputGroup;
module.link("react-bootstrap/InputGroup", {
  default(v) {
    InputGroup = v;
  }

}, 4);
let FormControl;
module.link("react-bootstrap", {
  FormControl(v) {
    FormControl = v;
  }

}, 5);
let uuid;
module.link("uuid", {
  default(v) {
    uuid = v;
  }

}, 6);

//For individual group member - displayed in TaskMember Component
class TaskInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.groupMember = void 0;

    this.handleInputChange = e => {
      this.setState({
        body: e.target.value
      });
    };

    this.handleReset = e => {
      this.setState({
        body: ''
      });
    };

    this.taskInput = React.createRef();
    this.submitTask = this.submitTask.bind(this);
    this.state = {
      body: ''
    };
  }

  submitTask() {
    const input = this.taskInput.current.value;
    this.props.addTask(input, this.props.groupMember, uuid.v4());
    this.handleReset();
  }

  render() {
    return React.createElement(InputGroup, {
      className: "TaskInputForm"
    }, React.createElement(FormControl, {
      placeholder: "Add a new task",
      "aria-label": "Add a new task",
      ref: this.taskInput,
      value: this.state.body,
      onChange: this.handleInputChange,
      onKeyPress: event => {
        if (event.key === "Enter") {
          this.submitTask();
        }
      }
    }), React.createElement(InputGroup.Append, null, React.createElement(Button, {
      variant: "outline-secondary",
      onClick: this.submitTask
    }, "Add")));
  }

}

module.exportDefault(connect(null, {
  addTask
})(TaskInputForm));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TaskMember.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/TaskView/TaskMember.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 1);
let Card;
module.link("react-bootstrap/Card", {
  default(v) {
    Card = v;
  }

}, 2);
let ListGroup;
module.link("react-bootstrap/ListGroup", {
  default(v) {
    ListGroup = v;
  }

}, 3);
let Task;
module.link("./Task", {
  default(v) {
    Task = v;
  }

}, 4);
let TaskInputForm;
module.link("./TaskInputForm", {
  default(v) {
    TaskInputForm = v;
  }

}, 5);
let TaskProgressBar;
module.link("./TaskProgressBar", {
  default(v) {
    TaskProgressBar = v;
  }

}, 6);
let Avatar;
module.link("../Avatar", {
  default(v) {
    Avatar = v;
  }

}, 7);
let ClearTaskButton;
module.link("./ClearTaskButton", {
  default(v) {
    ClearTaskButton = v;
  }

}, 8);

const TaskMember = (_ref) => {
  let {
    tasksByIds,
    tasks,
    name,
    idKey
  } = _ref;
  console.log(idKey);
  return React.createElement(Card, {
    id: "scrollable"
  }, React.createElement(Avatar, {
    id: idKey,
    tasks: tasksByIds
  }), React.createElement(Card.Title, {
    className: "text-center"
  }, name), React.createElement(Card.Body, null, React.createElement(TaskInputForm, {
    key: idKey,
    groupMember: idKey
  })), React.createElement(ListGroup, {
    id: "scrollableBody",
    className: "list-group-flush"
  }, tasks && tasks.map(task => React.createElement(Task, {
    member: idKey,
    key: task.taskId,
    id: task.taskId,
    status: task.status,
    text: task.description
  }))), React.createElement(Card.Body, null, React.createElement(ClearTaskButton, {
    id: "clearTask",
    id: idKey,
    key: name,
    member: idKey
  }), React.createElement(TaskProgressBar, {
    key: idKey,
    tasks: tasks
  })));
};

const mapStateToProps = state => ({
  tasksByIds: state.TaskReducer
});

module.exportDefault(connect(mapStateToProps)(TaskMember));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TaskProgressBar.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/TaskView/TaskProgressBar.js                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let ProgressBar;
module.link("react-bootstrap/ProgressBar", {
  default(v) {
    ProgressBar = v;
  }

}, 1);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 2);

//For individual group member - displayed in TaskMember Component
class TaskProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.getProgress = this.getProgress.bind(this);
  }

  getProgress() {
    let numTotalTasks = this.props.tasks.length; //right

    if (numTotalTasks == 0) {
      return 0;
    }

    let completedMemberTasks = this.props.tasks.filter(task => task.status % 2 == 1).length; //console.log(completedMemberTasks);
    //return (completedMemberTasks.length / numTotalTasks)*100;

    return completedMemberTasks / numTotalTasks * 100;
  }

  render() {
    let progress = this.getProgress();
    return React.createElement(ProgressBar, {
      now: progress,
      label: "".concat(Math.round(progress), "%")
    });
  }

}

const mapStateToProps = state => ({
  tasksByIds: state.TaskReducer
});

module.exportDefault(connect(mapStateToProps)(TaskProgressBar));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"WeekView":{"Cell.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/WeekView/Cell.js                                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let toggleAvail;
module.link("../../actions/DayAction", {
  toggleAvail(v) {
    toggleAvail = v;
  }

}, 1);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 2);
let Button;
module.link("react-bootstrap/Button", {
  default(v) {
    Button = v;
  }

}, 3);

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleAvail(this.props.id);
  }

  render() {
    return React.createElement(Button, {
      className: this.props.availability ? 'active' : 'album',
      variant: "outline-primary",
      onDrag: this.handleClick,
      onMouseDown: this.handleClick
    });
  }

}

module.exportDefault(connect(null, {
  toggleAvail
})(Cell));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Day.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/WeekView/Day.js                                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 1);
let Cell;
module.link("./Cell", {
  default(v) {
    Cell = v;
  }

}, 2);
let ButtonGroup;
module.link("react-bootstrap/ButtonGroup", {
  default(v) {
    ButtonGroup = v;
  }

}, 3);

const Day = (_ref) => {
  let {
    hours,
    hourByIds
  } = _ref;
  return React.createElement(ButtonGroup, {
    id: "day",
    vertical: true
  }, hours.map(hour => React.createElement(Cell, (0, _extends2.default)({
    key: hour,
    id: hour,
    availability: hourByIds[hour].availability
  }, hour))));
};

const mapStateToProps = state => ({
  hourByIds: state.WeekReducer.hours.byId
});

module.exportDefault(connect(mapStateToProps)(Day));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ResetCalButton.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/WeekView/ResetCalButton.js                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 1);
let resetCal;
module.link("../../actions/DayAction", {
  resetCal(v) {
    resetCal = v;
  }

}, 2);
let Button;
module.link("react-bootstrap", {
  Button(v) {
    Button = v;
  }

}, 3);

class ResetCalButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.props.resetCal();
  }

  render() {
    return React.createElement(Button, {
      id: "footer-button",
      className: 'ResetCal',
      onClick: this.handleClick
    }, "Reset Calendar");
  }

}

module.exportDefault(connect(null, {
  resetCal
})(ResetCalButton));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"SubmitButton.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/WeekView/SubmitButton.js                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 1);
let Button;
module.link("react-bootstrap", {
  Button(v) {
    Button = v;
  }

}, 2);
let submitSchedule;
module.link("../../actions/DayAction", {
  submitSchedule(v) {
    submitSchedule = v;
  }

}, 3);
let Modal;
module.link("react-bootstrap", {
  Modal(v) {
    Modal = v;
  }

}, 4);

class SubmitButton extends Component {
  constructor(props) {
    super(props); //this.handleShow = this.handleShow.bind(this);
    //this.handleClose = this.handleShow.bind(this);

    this.handleSubmitSchedule = e => {
      e.preventDefault();
      this.handleShow();
      this.props.onSubmitSchedule(this.props.schedule);
    };

    this.state = {
      show: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({
      show: false
    });
  }

  handleShow() {
    this.setState({
      show: true
    });
  }

  render() {
    return React.createElement("div", {
      className: "resetDiv"
    }, React.createElement(Button, {
      id: "footer-button",
      onClick: this.handleSubmitSchedule
    }, " Submit "), React.createElement(Modal, {
      show: this.state.show,
      onHide: this.handleClose
    }, React.createElement(Modal.Header, {
      closeButton: true
    }, React.createElement(Modal.Title, null, "Schedule submitted!")), React.createElement(Modal.Footer, null, React.createElement(Button, {
      variant: "secondary",
      onClick: this.handleClose
    }, "Close"))));
  }

}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitSchedule: sched => {
      dispatch(submitSchedule(sched));
    }
  };
};

const mapStateToProps = state => {
  return {
    schedule: state.WeekReducer
  };
};

module.exportDefault(connect(mapStateToProps, mapDispatchToProps)(SubmitButton));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Week.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/WeekView/Week.js                                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 1);
let Day;
module.link("./Day", {
  default(v) {
    Day = v;
  }

}, 2);

const Week = (_ref) => {
  let {
    days
  } = _ref;
  return React.createElement("div", {
    className: "weekdays"
  }, Object.keys(days).map(weekday => React.createElement(Day, (0, _extends2.default)({
    key: weekday,
    hours: days[weekday].hours
  }, weekday))));
};

const mapStateToProps = state => ({
  days: state.WeekReducer.days.byId
});

module.exportDefault(connect(mapStateToProps)(Week));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"WeekFooter.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/WeekView/WeekFooter.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let ResetCalButton;
module.link("./ResetCalButton", {
  default(v) {
    ResetCalButton = v;
  }

}, 1);
let SubmitButton;
module.link("./SubmitButton", {
  default(v) {
    SubmitButton = v;
  }

}, 2);

const WeekFooter = () => {
  return React.createElement("div", null, React.createElement("p", {
    id: "footer"
  }, "Select the times you are busy. "), React.createElement("div", {
    id: "footer-div"
  }, React.createElement(ResetCalButton, null), React.createElement(SubmitButton, null)));
};

module.exportDefault(WeekFooter);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"WeekHeader.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/WeekView/WeekHeader.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);

const WeekHeader = () => {
  return React.createElement("div", {
    id: "week"
  }, React.createElement("span", {
    id: "firstId"
  }, "S"), React.createElement("span", null, "M"), React.createElement("span", null, "T"), React.createElement("span", null, "W"), React.createElement("span", null, "T"), React.createElement("span", null, "F"), React.createElement("span", {
    id: "lastId"
  }, "S"));
};

module.exportDefault(WeekHeader);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"WeekSidebar.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/WeekView/WeekSidebar.js                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let ButtonGroup;
module.link("react-bootstrap/ButtonGroup", {
  default(v) {
    ButtonGroup = v;
  }

}, 1);
let Button;
module.link("react-bootstrap/Button", {
  default(v) {
    Button = v;
  }

}, 2);

const WeekSidebar = () => {
  return React.createElement(ButtonGroup, {
    vertical: true,
    id: "sidebar"
  }, React.createElement(Button, null, "8"), React.createElement(Button, null, "9"), React.createElement(Button, null, "10"), React.createElement(Button, null, "11"), React.createElement(Button, null, "12"), React.createElement(Button, null, "13"), React.createElement(Button, null, "14"), React.createElement(Button, null, "15"), React.createElement(Button, null, "16"), React.createElement(Button, null, "17"));
};

module.exportDefault(WeekSidebar);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Avatar.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/Avatar.js                                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 1);

class Avatar extends Component {
  constructor(props) {
    super(props);

    this.getAvatar = () => {
      let url = "/avatars/";
      let ending;

      switch (this.props.tasks[this.props.id].avatar) {
        case 'GIRAFFE':
          ending = "Giraffe.png";
          break;

        case 'PIG':
          ending = "Pig.png";
          break;

        case 'FOX':
          ending = "Fox.png";
          break;

        case 'PENGUIN':
          ending = "Penguin.png";
          break;

        case 'LIZARD':
          ending = "Lizard.png";
          break;

        default:
          ending = "BearFace.png";
          break;
      }

      url = url + ending;
      return url;
    };

    this.getAvatar = this.getAvatar.bind(this);
  }

  render() {
    return React.createElement("img", {
      className: "avatar",
      src: this.getAvatar()
    });
  }

}

const mapStateToProps = state => ({
  tasks: state.TaskReducer
});

module.exportDefault(connect(mapStateToProps)(Avatar));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NavbarA.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/components/NavbarA.js                                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  default: () => NavbarA
});
let Navbar;
module.link("react-bootstrap/Navbar", {
  default(v) {
    Navbar = v;
  }

}, 0);
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 1);
let Container;
module.link("react-bootstrap/Container", {
  default(v) {
    Container = v;
  }

}, 2);
let Nav;
module.link("react-bootstrap/Nav", {
  default(v) {
    Nav = v;
  }

}, 3);
let NavDropdown;
module.link("react-bootstrap/NavDropdown", {
  default(v) {
    NavDropdown = v;
  }

}, 4);
let Button;
module.link("react-bootstrap", {
  Button(v) {
    Button = v;
  }

}, 5);
let Modal;
module.link("react-bootstrap", {
  Modal(v) {
    Modal = v;
  }

}, 6);
let AccountsUIWrapper;
module.link("./Accounts/AccountsUIWrapper", {
  default(v) {
    AccountsUIWrapper = v;
  }

}, 7);

class NavbarA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({
      show: false
    });
  }

  handleShow() {
    this.setState({
      show: true
    });
  }

  render() {
    return React.createElement("div", null, React.createElement(Container, null, React.createElement(Navbar, {
      id: "navbar",
      fixed: "top",
      collapseOnSelect: true,
      expand: "sm",
      variant: "dark"
    }, React.createElement(Navbar.Brand, {
      href: "#home"
    }, "GroupMeet"), React.createElement(Navbar.Toggle, {
      "aria-controls": "responsive-navbar-nav"
    }), React.createElement(Navbar.Collapse, {
      id: "responsive-navbar-nav"
    }, React.createElement(Nav, {
      className: "mr-auto"
    }, React.createElement(Nav.Link, {
      href: "/"
    }, "Overview"), React.createElement(Nav.Link, {
      href: "/"
    }, "About Us"), React.createElement(NavDropdown, {
      title: "Tools",
      id: "collasible-nav-dropdown"
    }, React.createElement(NavDropdown.Item, {
      href: "/calendar"
    }, "Calendar"), React.createElement(NavDropdown.Item, {
      href: "/tasks"
    }, "Tasks"), React.createElement(NavDropdown.Item, {
      href: "/group"
    }, "Group Schedule"), React.createElement(NavDropdown.Divider, null))), React.createElement(AccountsUIWrapper, {
      className: "loginForm"
    })))));
  }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"actions":{"DayAction.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/actions/DayAction.js                                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  toggleAvail: () => toggleAvail,
  resetCal: () => resetCal,
  submitSchedule: () => submitSchedule,
  submitScheduleSuccess: () => submitScheduleSuccess,
  fetchSchedule: () => fetchSchedule,
  fetchScheduleSuccess: () => fetchScheduleSuccess
});
let HTTP;
module.link("meteor/http", {
  HTTP(v) {
    HTTP = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
const apiUrl = 'http://localhost:5000/posts';

const toggleAvail = id => {
  return {
    type: 'TOGGLE_AVAIL',
    id
  };
};

const resetCal = () => ({
  type: 'RESET_CAL'
});

const submitSchedule = schedule => {
  return dispatch => {
    return Meteor.call('updateAvailability', schedule, (err, result) => {
      if (!err) {
        dispatch(submitScheduleSuccess(result));
      } else {
        console.log(err);
        console.log('Did not submit');
      }
    });
  };
};

const submitScheduleSuccess = schedule => ({
  type: 'SUBMIT_SCHEDULE',
  schedule
});

const fetchSchedule = () => {
  return dispatch => {
    return Meteor.call('fetchAvailability', (err, result) => {
      if (!err) {
        dispatch(fetchScheduleSuccess(result));
      } else {
        console.log(err);
        console.log('Availabilities did not update!');
      }
    });
  };
};

const fetchScheduleSuccess = schedule => ({
  type: 'FETCH_SCHEDULE',
  schedule
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"GroupAction.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/actions/GroupAction.js                                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  fetchGroupScheduleSuccess: () => fetchGroupScheduleSuccess,
  fetchGroup: () => fetchGroup,
  getNextWeekSuccess: () => getNextWeekSuccess,
  nextWeekGroup: () => nextWeekGroup,
  getPrevWeekSuccess: () => getPrevWeekSuccess,
  prevWeekGroup: () => prevWeekGroup
});

const fetchGroupScheduleSuccess = payload => {
  return {
    type: 'FETCH_GROUP',
    payload
  };
};

const fetchGroup = () => {
  return dispatch => {
    return Meteor.call('fetchGroupSchedule', (err, result) => {
      if (!err) {
        dispatch(fetchGroupScheduleSuccess(result));
      } else {
        console.log("Couldn't fetch group schedule");
      }
    });
  };
};

const getNextWeekSuccess = payload => {
  return {
    type: 'NEXT_WEEK_GROUP',
    payload
  };
};

const nextWeekGroup = currWeek => {
  return dispatch => {
    return Meteor.call('getNextWeek', currWeek, (err, result) => {
      if (!err) {
        dispatch(getNextWeekSuccess(result));
      } else {
        console.log("Couldn't get next week");
      }
    });
  };
};

const getPrevWeekSuccess = payload => {
  return {
    type: 'PREV_WEEK_GROUP',
    payload
  };
};

const prevWeekGroup = currWeek => {
  return dispatch => {
    return Meteor.call('getPrevWeek', currWeek, (err, result) => {
      if (!err) {
        dispatch(getPrevWeekSuccess(result));
      } else {
        console.log("Couldn't fetch group schedule");
      }
    });
  };
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TaskAction.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/actions/TaskAction.js                                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  addTaskSuccess: () => addTaskSuccess,
  addTask: () => addTask,
  fetchTasks: () => fetchTasks,
  fetchTasksSuccess: () => fetchTasksSuccess,
  toggleStatusSuccess: () => toggleStatusSuccess,
  toggleStatus: () => toggleStatus,
  deleteTask: () => deleteTask,
  clearTasks: () => clearTasks,
  deleteTaskSuccess: () => deleteTaskSuccess,
  clearTasksSuccess: () => clearTasksSuccess
});

const addTaskSuccess = (text, member, id) => {
  return {
    type: 'ADD_TASK',
    payload: text,
    member: member,
    id
  };
};

const addTask = (text, member, id) => {
  return dispatch => {
    return Meteor.call('addTask', member, {
      taskId: id,
      description: text,
      status: 0
    }, (err, result) => {
      if (!err) {
        dispatch(addTaskSuccess(text, member, id));
      } else {
        console.log(err);
        console.log('Did not submit');
      }
    });
  };
};

const fetchTasks = () => {
  return dispatch => {
    return Meteor.call('fetchAllTasks', (err, result) => {
      if (!err) {
        dispatch(fetchTasksSuccess(result));
      } else {
        console.log('Did not fetch');
      }
    });
  };
};

const fetchTasksSuccess = payload => {
  return {
    type: 'FETCH_TASKS',
    payload
  };
};

const toggleStatusSuccess = (id, member) => {
  return {
    type: 'TOGGLE_STATUS',
    id,
    member
  };
};

const toggleStatus = (id, member) => {
  return dispatch => {
    return Meteor.call('updateTaskStatus', id, (err, result) => {
      if (!err) {
        dispatch(toggleStatusSuccess(id, member));
      } else {
        console.log(err);
        console.log('Did not toggle');
      }
    });
  };
};

const deleteTask = (id, member) => {
  return dispatch => {
    return Meteor.call('deleteTask', member, id, (err, result) => {
      if (!err) {
        dispatch(deleteTaskSuccess(id, member));
      } else {
        console.log(err);
        console.log('Did not delete task');
      }
    });
  };
};

const clearTasks = member => {
  return dispatch => {
    return Meteor.call('clearTasks', member, (err, result) => {
      if (!err) {
        dispatch(clearTasksSuccess(member));
      } else {
        console.log(err);
        console.log('Did not clear tasks for', member);
      }
    });
  };
};

const deleteTaskSuccess = (id, member) => {
  return {
    type: 'DELETE_TASK',
    payload: id,
    member: member,
    id
  };
};

const clearTasksSuccess = member => {
  return {
    type: 'CLEAR_TASKS',
    payload: member,
    member
  };
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"containers":{"GroupView.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/containers/GroupView.js                                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let Container;
module.link("react-bootstrap/Container", {
  default(v) {
    Container = v;
  }

}, 1);
let GroupWeek;
module.link("../components/GroupView/GroupWeek", {
  default(v) {
    GroupWeek = v;
  }

}, 2);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 3);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 4);
let Tracker;
module.link("tracker-component", {
  default(v) {
    Tracker = v;
  }

}, 5);
let nextWeekGroup, prevWeekGroup;
module.link("../actions/GroupAction", {
  nextWeekGroup(v) {
    nextWeekGroup = v;
  },

  prevWeekGroup(v) {
    prevWeekGroup = v;
  }

}, 6);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 7);

class GroupView extends Component {
  render() {
    return React.createElement(GroupWeek, null);
  }

}

const mapDispatchToProps = dispatch => {
  return {
    lastWeek: arrow => {
      dispatch(prevWeekGroup(arrow));
    },
    nextWeek: arrow => {
      dispatch(nextWeekGroup(arrow));
    }
  };
};

const mapStateToProps = state => ({
  group: state.GroupReducer
});

module.exportDefault(connect(mapStateToProps, mapDispatchToProps)(GroupWeek));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TaskView.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/containers/TaskView.js                                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  TaskTracker: () => TaskTracker
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let connect;
module.link("react-redux", {
  connect(v) {
    connect = v;
  }

}, 1);
let Container;
module.link("react-bootstrap/Container", {
  default(v) {
    Container = v;
  }

}, 2);
let TaskGroup;
module.link("../components/TaskView/TaskGroup", {
  default(v) {
    TaskGroup = v;
  }

}, 3);
let Users;
module.link("../../api/users", {
  default(v) {
    Users = v;
  }

}, 4);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 5);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 6);
let Tracker;
module.link("tracker-component", {
  default(v) {
    Tracker = v;
  }

}, 7);

//https://codebrahma.com/reactive-subscriptions-in-meteor/
class TaskView extends Tracker.Component {
  constructor(props) {
    super(props);
    this.subscribe('users_tasks');
  }

  render() {
    return React.createElement("div", null, React.createElement(Container, {
      id: "cardContainer"
    }, React.createElement(TaskGroup, {
      groupMembers: this.props.userTasks
    })));
  }

}

const TaskTracker = withTracker((_ref) => {
  let {
    groupMembers
  } = _ref;
  Meteor.subscribe('users_tasks');
  const handle = Meteor.subscribe('users_tasks');
  const isReady = handle.ready();

  if (!isReady) {
    return {
      userTasks: groupMembers
    };
  } else {
    const allUsers = Users.find({});
    let userObj = {};
    allUsers.forEach(user => {
      userObj[user._id] = {
        name: user.name,
        avatar: user.avatar,
        tasks: user.tasks
      };
    });
    return {
      userTasks: userObj
    };
  }
})(TaskView);

const mapStateToProps = state => ({
  groupMembers: state.TaskReducer
});

module.exportDefault(connect(mapStateToProps)(TaskTracker));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"WeekView.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/containers/WeekView.js                                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let Container;
module.link("react-bootstrap/Container", {
  default(v) {
    Container = v;
  }

}, 1);
let WeekFooter;
module.link("../components/WeekView/WeekFooter", {
  default(v) {
    WeekFooter = v;
  }

}, 2);
let WeekSidebar;
module.link("../components/WeekView/WeekSidebar", {
  default(v) {
    WeekSidebar = v;
  }

}, 3);
let WeekHeader;
module.link("../components/WeekView/WeekHeader", {
  default(v) {
    WeekHeader = v;
  }

}, 4);
let Week;
module.link("../components/WeekView/Week", {
  default(v) {
    Week = v;
  }

}, 5);

class WeekView extends Component {
  render() {
    return React.createElement("div", {
      id: "calendarBody"
    }, React.createElement(Container, null, React.createElement(WeekHeader, null), React.createElement(WeekSidebar, null), React.createElement(Week, null)), React.createElement(WeekFooter, null));
  }

}

module.exportDefault(WeekView);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"reducers":{"GroupReducer.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/reducers/GroupReducer.js                                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
const GroupReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_GROUP':
      return action.payload;

    case 'PREV_WEEK_GROUP':
      return action.payload;

    case 'NEXT_WEEK_GROUP':
      return action.payload;

    default:
      return state;
  }
};

module.exportDefault(GroupReducer);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TaskReducer.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/reducers/TaskReducer.js                                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

let daysById, hoursAllIds;
module.link("./WeekReducer", {
  daysById(v) {
    daysById = v;
  },

  hoursAllIds(v) {
    hoursAllIds = v;
  }

}, 0);
const initialState = {
  Members: {
    "Claire": {
      id: "Claire",
      tasks: [4, 5, 6]
    },
    "Madie": {
      id: "Madie",
      tasks: [1, 2, 3]
    },
    "Ben": {
      id: "Ben",
      tasks: [7, 8, 9]
    },
    "Katrin": {
      id: "Katrin",
      tasks: [10]
    },
    "Hannah": {
      id: "Hannah",
      tasks: []
    }
  },
  Tasks: {
    1: {
      id: 1,
      description: 'Be awesome',
      complete: true,
      member: "Madie"
    },
    2: {
      id: 2,
      description: 'Make stuff pretty',
      complete: true,
      member: "Madie"
    },
    3: {
      id: 3,
      description: 'Do some tasks',
      complete: false,
      member: "Madie"
    },
    4: {
      id: 4,
      description: 'Be rad',
      complete: false,
      member: "Claire"
    },
    5: {
      id: 5,
      description: 'Figure out redux',
      complete: false,
      member: "Claire"
    },
    6: {
      id: 6,
      description: 'Fold laundry',
      complete: false,
      member: "Claire"
    },
    7: {
      id: 7,
      description: 'Be cool',
      complete: false,
      member: "Ben"
    },
    8: {
      id: 8,
      description: 'Shoot some hoops',
      complete: false,
      member: "Ben"
    },
    9: {
      id: 9,
      description: 'Do some stuff',
      complete: false,
      member: "Ben"
    },
    10: {
      id: 10,
      description: 'Do some stuff',
      complete: false,
      member: "Katrin"
    }
  }
};

const TaskReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_TASK':
      return (0, _objectSpread2.default)({}, state, {
        [action.member]: (0, _objectSpread2.default)({}, state[action.member], {
          tasks: state[action.member].tasks.concat({
            taskId: action.id,
            description: action.payload,
            status: 0
          })
        })
      });

    case 'TOGGLE_STATUS':
      return (0, _objectSpread2.default)({}, state, {
        [action.member]: (0, _objectSpread2.default)({}, state[action.member], {
          tasks: state[action.member].tasks.map(task => task.taskId === action.id ? (0, _objectSpread2.default)({}, task, {
            status: task.status + 1
          }) : task)
        })
      });

    case 'FETCH_TASKS':
      return action.payload;

    case 'DELETE_TASK':
      return (0, _objectSpread2.default)({}, state, {
        [action.member]: (0, _objectSpread2.default)({}, state[action.member], {
          tasks: state[action.member].tasks.filter(task => task.id !== action.id)
        })
      });

    case 'CLEAR_TASKS':
      return (0, _objectSpread2.default)({}, state, {
        [action.payload]: (0, _objectSpread2.default)({}, state[action.payload], {
          tasks: []
        })
      });

    default:
      return state;
  }
};

module.exportDefault(TaskReducer);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"WeekReducer.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/reducers/WeekReducer.js                                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

module.export({
  weekdays: () => weekdays,
  hoursById: () => hoursById,
  booleanHours: () => booleanHours,
  hoursAllIds: () => hoursAllIds,
  daysById: () => daysById,
  initState: () => initState
});

/* generates array of strings for hours, can change range, currently 8 - 17 inclusive */
const hourIds = Array.from({
  length: 10
}, (v, i) => (i + 8).toString());
const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function hoursById() {
  const hourState = {}; //right now hour ids are formatted as "weekday_hourNumber"
  // We should probably consider using JS date object in future to generate unique ids

  for (let i = 0; i < weekdays.length; i++) {
    for (let j = 0; j < hourIds.length; j++) {
      hourState[weekdays[i].concat("_", hourIds[j])] = {
        id: weekdays[i].concat("_", hourIds[j]),
        weekday: weekdays[i],
        availability: false //tasks: [] add functionality later

      };
    }
  }

  return hourState;
}

function booleanHours() {
  const hourState = {}; //right now hour ids are formatted as "weekday_hourNumber"
  // We should probably consider using JS date object in future to generate unique ids

  for (let i = 0; i < weekdays.length; i++) {
    for (let j = 0; j < hourIds.length; j++) {
      hourState[weekdays[i].concat("_", hourIds[j])] = {
        availability: true //tasks: [] add functionality later

      };
    }
  }

  return hourState;
}

function hoursAllIds() {
  const hourIdsArray = [];

  for (let i = 0; i < weekdays.length; i++) {
    for (let j = 0; j < hourIds.length; j++) {
      hourIdsArray.push(weekdays[i].concat("_", hourIds[j]));
    }
  }

  return hourIdsArray;
}

function daysById() {
  let allHourIds = hoursAllIds();
  const weekState = {};

  for (let i = 0; i < weekdays.length; i++) {
    let dayHours = allHourIds.filter(hour => hour.includes(weekdays[i]));
    weekState[weekdays[i]] = {
      id: weekdays[i],
      hours: dayHours
    };
  }

  return weekState;
}

const initState = {
  days: {
    byId: daysById(),
    allIds: weekdays
  },
  hours: {
    byId: hoursById(),
    allIds: hoursAllIds()
  }
};

const WeekReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'TOGGLE_AVAIL':
      return (0, _objectSpread2.default)({}, state, {
        hours: (0, _objectSpread2.default)({}, state.hours, {
          byId: (0, _objectSpread2.default)({}, state.hours.byId, {
            [action.id]: (0, _objectSpread2.default)({}, state.hours.byId[action.id], {
              availability: !state.hours.byId[action.id].availability
            })
          })
        })
      });

    case 'RESET_CAL':
      return (0, _objectSpread2.default)({}, state, {
        hours: (0, _objectSpread2.default)({}, state.hours, {
          byId: hoursById()
        })
      });

    case 'SUBMIT_SCHEDULE':
      return action.schedule;

    case 'FETCH_SCHEDULE':
      return action.schedule;

    default:
      return state;
  }
};

module.exportDefault(WeekReducer);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/reducers/index.js                                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let combineReducers;
module.link("redux", {
  combineReducers(v) {
    combineReducers = v;
  }

}, 0);
let WeekReducer;
module.link("./WeekReducer", {
  default(v) {
    WeekReducer = v;
  }

}, 1);
let TaskReducer;
module.link("./TaskReducer", {
  default(v) {
    TaskReducer = v;
  }

}, 2);
let GroupReducer;
module.link("./GroupReducer", {
  default(v) {
    GroupReducer = v;
  }

}, 3);
module.exportDefault(combineReducers({
  WeekReducer,
  TaskReducer,
  GroupReducer
}));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"App.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/App.js                                                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let WeekView;
module.link("./containers/WeekView", {
  default(v) {
    WeekView = v;
  }

}, 1);
let NavbarA;
module.link("./components/NavbarA", {
  default(v) {
    NavbarA = v;
  }

}, 2);
let TaskView;
module.link("./containers/TaskView", {
  default(v) {
    TaskView = v;
  }

}, 3);
let Route;
module.link("react-router-dom", {
  Route(v) {
    Route = v;
  }

}, 4);
let GroupView;
module.link("./containers/GroupView", {
  default(v) {
    GroupView = v;
  }

}, 5);

const Routes = () => React.createElement("div", null, React.createElement(Route, {
  exact: true,
  path: "/",
  component: WeekView
}), React.createElement(Route, {
  path: "/calendar",
  component: WeekView
}), React.createElement(Route, {
  path: "/tasks",
  component: TaskView
}), React.createElement(Route, {
  path: "/group",
  component: GroupView
}));

class App extends Component {
  render() {
    return React.createElement("div", null, React.createElement(NavbarA, null), React.createElement(Routes, null));
  }

}

module.exportDefault(App);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"api":{"group.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/group.js                                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let booleanHours;
module.link("../ui/reducers/WeekReducer", {
  booleanHours(v) {
    booleanHours = v;
  }

}, 2);
const GroupSchedule = new Mongo.Collection('group');

let moment = require('moment/moment');

moment.defaultFormat = "YYYYMMDD";
Meteor.methods({
  fetchGroupSchedule() {
    let start = moment().startOf('week').format();

    if (GroupSchedule.find({
      _id: start
    }).count() === 0) {
      const allHours = booleanHours();
      const gsInitState = Object.assign({}, allHours, {
        _id: start
      });
      GroupSchedule.insert(gsInitState);
    }

    return GroupSchedule.find({
      _id: start
    }).fetch()[0];
  },

  getPrevWeek(currWeek) {
    let currMoment = moment(currWeek, "YYYYMDD");
    let prevWeek = currMoment.subtract(7, 'days').startOf('week').format();

    if (GroupSchedule.find({
      _id: prevWeek
    }).count() === 0) {
      return GroupSchedule.find({
        _id: currWeek
      }).fetch()[0];
    } else {
      return GroupSchedule.find({
        _id: prevWeek
      }).fetch()[0];
    }
  },

  getNextWeek(currWeek) {
    let currMoment = moment(currWeek, "YYYYMDD");
    let nextWeek = currMoment.add(7, 'days').startOf('week').format();

    if (GroupSchedule.find({
      _id: nextWeek
    }).count() === 0) {
      return GroupSchedule.find({
        _id: currWeek
      }).fetch()[0];
    } else {
      return GroupSchedule.find({
        _id: nextWeek
      }).fetch()[0];
    }
  }

});
module.exportDefault(GroupSchedule);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/api/users.js                                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  Users: () => Users
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
const Users = new Mongo.Collection('users_tasks');

// https://stackoverflow.com/questions/10506878/how-to-toggle-a-boolean-field-in-an-array-element-in-mongodb
//only runs on the server
if (Meteor.isServer) {
  Meteor.publish('users_tasks', function userPublication() {
    return Users.find();
  });
}

Meteor.methods({
  addTask(memberId, task) {
    Users.update({
      _id: memberId
    }, {
      $addToSet: {
        tasks: task
      }
    }, {
      upsert: false
    });
    return;
  },

  updateTaskStatus(id) {
    Users.update({
      tasks: {
        $elemMatch: {
          taskId: id
        }
      }
    }, {
      $inc: {
        "tasks.$.status": 1
      }
    });
    return;
  },

  deleteTask(id, member) {
    return;
  },

  clearTasks(member) {
    Users.update({
      _id: member
    }, {
      $set: {
        tasks: []
      }
    });
    return;
  },

  fetchAllTasks() {
    const allUsers = Users.find({});
    let userObj = {};
    allUsers.forEach(user => {
      userObj[user._id] = {
        name: user.name,
        avatar: user.avatar,
        tasks: user.tasks
      };
    });
    return userObj;
  }

});
module.exportDefault(Users);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.css":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/main.css                                                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// These styles have already been applied to the document.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.jsx":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/main.jsx                                                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let render;
module.link("react-dom", {
  render(v) {
    render = v;
  }

}, 2);
let App;
module.link("/imports/ui/App", {
  default(v) {
    App = v;
  }

}, 3);
let createStore;
module.link("redux", {
  createStore(v) {
    createStore = v;
  }

}, 4);
let Provider;
module.link("react-redux", {
  Provider(v) {
    Provider = v;
  }

}, 5);
let reducers;
module.link("../imports/ui/reducers/index", {
  default(v) {
    reducers = v;
  }

}, 6);
let applyMiddleware, compose;
module.link("redux", {
  applyMiddleware(v) {
    applyMiddleware = v;
  },

  compose(v) {
    compose = v;
  }

}, 7);
let thunk;
module.link("redux-thunk", {
  default(v) {
    thunk = v;
  }

}, 8);
module.link("./main.css");
let fetchSchedule;
module.link("../imports/ui/actions/DayAction", {
  fetchSchedule(v) {
    fetchSchedule = v;
  }

}, 9);
let Router;
module.link("react-router-dom", {
  BrowserRouter(v) {
    Router = v;
  }

}, 10);
let fetchTasks;
module.link("../imports/ui/actions/TaskAction", {
  fetchTasks(v) {
    fetchTasks = v;
  }

}, 11);
let fetchGroup;
module.link("../imports/ui/actions/GroupAction", {
  fetchGroup(v) {
    fetchGroup = v;
  }

}, 12);
//Import css later!!
const store = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
store.dispatch(fetchSchedule());
store.dispatch(fetchTasks());
store.dispatch(fetchGroup());
Meteor.startup(() => {
  render(React.createElement(Provider, {
    store: store
  }, React.createElement(Router, null, React.createElement(App, null))), document.getElementById('react-target'));
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css",
    ".jsx"
  ]
});

var exports = require("/client/main.jsx");