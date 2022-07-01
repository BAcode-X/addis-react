import { Image, Card, Heading, Text, Box } from "rebass";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";

import { GET_EMPLOYEE_BY_ID } from "../redux/types";

export default function ViewEmployee(action) {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_EMPLOYEE_BY_ID, id: id });
  }, [dispatch]);

  const employeeData = useSelector((state) => state.employee.employee);
  return (
    <div>
      <Text textAlign={"center"} fontSize={"2em"}>
        Here is the employee data
      </Text>
      <Box
        sx={{
          maxWidth: 512,
          mx: "auto",
          px: 3,
        }}
      >
        <Text fontSize={[3, 4, 5]} fontWeight="bold" color="green">
          Employee #{employeeData.id}
        </Text>
        <br />
        <Card width={2000}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
            sx={{
              width: ["10%"],
            }}
          />
          <Heading>
            {employeeData.first_name} {employeeData.last_name}
          </Heading>
          <Text>Age: {employeeData.age}</Text>
          <Text>Gender: {employeeData.gender}</Text>
          <Text>Height: {employeeData.height}</Text>
        </Card>
      </Box>
    </div>
  );
}
