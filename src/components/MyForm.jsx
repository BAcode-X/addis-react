import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, Button } from "rebass";
import { Label, Input, Select } from "@rebass/forms";
import { nanoid } from "@reduxjs/toolkit";

import { CREATE_EMPLOYEE, UPDATE_EMPLOYEE_BY_ID } from "../redux/types";
import { setEmployeeSlice } from "../redux/slice/employee";

const MyForm = () => {
  const employee = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  const handleChange = (prop) => (event) => {
    dispatch(setEmployeeSlice({ ...employee, [prop]: event.target.value }));
  };
  const handleSubmit = () => {
    employee.id === 0
      ? dispatch({
          type: CREATE_EMPLOYEE,
          employee: { ...employee, id: nanoid(8) },
        })
      : dispatch({ type: UPDATE_EMPLOYEE_BY_ID, employee });

    dispatch(
      setEmployeeSlice({
        id: 0,
        first_name: "",
        last_name: "",
        age: "",
        gender: "",
        height: "",
      })
    );
  };
  return (
    <>
      <Box
          sx={{
            maxWidth: 512,
            mx: "auto",
            px: 3,
          }}
        >
          <form>
            <Flex flexDirection={"column"} px={2}>
              <Box variant="styles.box" px={2} mb={3}>
                <Label htmlFor="first_name" mb={2}>
                  First Name
                </Label>
                <Input
                  id="first_name"
                  name="first_name"
                  placeholder="Firew"
                  value={employee.first_name}
                  onChange={handleChange("first_name")}
                />
              </Box>
              <Box variant="styles.box" px={2} mb={3}>
                <Label htmlFor="last_name" mb={2}>
                  Last Name
                </Label>
                <Input
                  id="last_name"
                  name="last_name"
                  placeholder="Kebede"
                  value={employee.last_name}
                  onChange={handleChange("last_name")}
                />
              </Box>
              <Box variant="styles.box" px={2} mb={3}>
                <Label htmlFor="age" mb={2}>
                  Age
                </Label>
                <Input
                  id="age"
                  name="age"
                  type={"number"}
                  placeholder="0"
                  value={employee.age}
                  onChange={handleChange("age")}
                />
              </Box>
              <Box variant="styles.box" px={2} mb={3}>
                <Label htmlFor="gender" mb={2}>
                  Gender
                </Label>
                <Select
                  id="gender"
                  name="gender"
                  value={employee.gender}
                  onChange={handleChange("gender")}
                >
                  <option>Male</option>
                  <option>Female</option>
                </Select>
              </Box>
              <Box variant="styles.box" px={2} mb={3}>
                <Label htmlFor="height" mb={2}>
                  Height (in cm)
                </Label>
                <Input
                  id="height"
                  name="height"
                  type={"number"}
                  placeholder="170"
                  value={employee.height}
                  onChange={handleChange("height")}
                />
              </Box>
              <Button
                variant="outline"
                color={employee.id ? "white" : "black"}
                bg={employee.id ? "#1589FF" : "lime"}
                margin={"10px 30%"}
                onClick={() => handleSubmit()}
                cursor={"pointer"}
                width={"40%"}
              >
                Submit
              </Button>
            </Flex>
          </form>
        </Box>
    </>
  );
};
export default MyForm;
