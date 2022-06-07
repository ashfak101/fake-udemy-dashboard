import { Container, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Reviews = () => {
  const [value, setValue] = React.useState<number | null>(4.5);
  return (
    <div>
      <Box>
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={8} xl={12}>
                <Item>
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    Student feedback
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4} xl={2}>
                <Item>
                  <Typography
                    sx={{
                      color: "#b4690e",
                      fontSize: "64px",
                      fontWeight: "bold",
                    }}
                  >
                    4.6
                  </Typography>
                  <Typography>
                    <Box
                      sx={{
                        "& > legend": { mt: 2 },
                      }}
                    >
                      <Rating
                        precision={0.5}
                        name="read-only"
                        value={value}
                        readOnly
                      />
                    </Box>
                  </Typography>
                  <Typography
                    sx={{
                      color: "#b4690e",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Tutorial rating
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4} xl={10}>
                <Item>xs=4</Item>
              </Grid>
              <Grid item xs={8}>
                <Item>xs=8</Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Reviews;
