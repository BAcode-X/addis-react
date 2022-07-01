import { useDispatch, useSelector } from 'react-redux';
import Icon from "react-crud-icons";
import { Link } from "react-router-dom";
import { Text, Button } from "rebass";
import React from "react";

import { DELETE_EMPLOYEE_BY_ID, GET_EMPLOYEES } from '../redux/types';
import { setEmployeeSlice } from '../redux/slice/employee';
import Table from './Table'

import "./../../node_modules/react-crud-icons/dist/css/react-crud-icons.css";

export default function MyTable() {
    const employees = useSelector(state => state.employees)
    const dispatch = useDispatch()
    React.useEffect(() => {dispatch({ type: GET_EMPLOYEES })}, [])
    return (
        <>
            <Table>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Height</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees &&
                    employees.map((emp) => {
                      return (
                        <tr key={emp.id.toString()}>
                          <td>
                            <Link to={`/view-employee/${emp.id}`}>
                              {emp.first_name}
                            </Link>
                          </td>
                          <td>
                            <Link to={`/view-employee/${emp.id}`}>
                              {emp.last_name}
                            </Link>
                          </td>
                          <td>
                            <Link to={`/view-employee/${emp.id}`}>{emp.age}</Link>
                          </td>
                          <td>
                            <Link to={`/view-employee/${emp.id}`}>{emp.gender}</Link>
                          </td>
                          <td>
                            <Link to={`/view-employee/${emp.id}`}>
                              {emp.height}
                              {" cm"}
                            </Link>
                          </td>
                          <td>
                            <Button onClick={() => dispatch(setEmployeeSlice(emp))}>
                              <Icon
                                name="edit"
                                tooltip="Edit"
                                theme="light"
                                size="small"
                              />
                            </Button>{" "}
                            <Button onClick={() => dispatch({ type: DELETE_EMPLOYEE_BY_ID, id: emp.id })}>
                              <Icon
                                name="delete"
                                tooltip="Delete"
                                theme="light"
                                size="small"
                              />
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
        </>
    );
}