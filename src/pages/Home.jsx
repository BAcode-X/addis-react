import React from "react";
import { Box, Text } from "rebass";

import MyForm from "../components/MyForm";
import MyTable from "../components/MyTable";


export default function Home() {

  return (
    <div>
      <Box
        sx={{
          mx: "auto",
          p: 4,
        }}
      >
        <Text textAlign="center" fontSize="5" fontWeight="bold" pb={4}>
          Add Employee Here
        </Text>
        <Box
          sx={{
            maxWidth: 512,
            mx: "auto",
            px: 3,
          }}
        >
          <MyForm />

        </Box>
        <Text textAlign="center" fontSize="5" fontWeight="bold" pb={4}>
          Here are our employees
        </Text>
          <MyTable />
      </Box>
    </div>
  );
}
