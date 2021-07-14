import React, { useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

function CoursesPage(props) {
  const [course, setCourse] = useState({ title: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.dispatch(courseActions.createCourse(course));
    props.actions.createCourse(course);
  };

  function handleChange(e) {
    e.preventDefault();
    setCourse({ ...course, title: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input
        type="text"
        name="course"
        value={course.title}
        placeholder=""
        onChange={handleChange}
      />
      <input type="submit" vlaue="save" />
      {props.courses.map((course) => (
        <div key={course.title}>{course.title}</div>
      ))}
    </form>
  );
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
