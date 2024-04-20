import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "#f4f6ff" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "100px", color: "#434343" }}
          >
            © 2024 Company, Inc. All rights reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
