import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Get(path, queryParams) {
  const [yelpInfo, setYelpInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/capstone")
      .then((res) => res.json())
      .then((data) => setYelpInfo(data));
  });
  <div className="Info">
    {yelpInfo.map((element, index) => (
      <Card key={index}>
        <CardContent className="Info2">
          <Typography variant="h5" component="div">
            "Title:"{element.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            "Location:"{element.location}
          </Typography>
        </CardContent>
      </Card>
    ))}
  </div>;
}
export default Get;
