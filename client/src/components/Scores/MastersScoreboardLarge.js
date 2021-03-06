import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../../context/GlobalState";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Hidden, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    width: "100%",
  },
  tableHead: {
    background: theme.palette.primary.main,
    color: "#ecfef6",
  },
}));

const MastersScoreboardLarge = () => {
  const { data } = useContext(GlobalContext);
  let scores = [];
  if (data.results) {
    scores = data.results.leaderboard;
  }

  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table size="small" className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell
                align="left"
                style={{ color: theme.palette.primary.light, fontWeight: 'bold' }}
              >
                Pos.
              </TableCell>
              <TableCell
                align="left"
                style={{ color: theme.palette.primary.light }}
              >
                Player
              </TableCell>
              <Hidden xsDown>
                <TableCell
                  align="right"
                  style={{ color: theme.palette.primary.light }}
                >
                  Played
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: theme.palette.primary.light }}
                >
                  Today
                </TableCell>
              </Hidden>
              <TableCell
                style={{ color: theme.palette.primary.light }}
                align="right"
              >
                Score
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.results &&
              scores
                .sort((a, b) => {
                  if (a.position > b.position) {
                    return 1;
                  } else return -1;
                })
                .map((row, index) => (
                  <TableRow
                    key={row.name}
                    style={
                      index % 2 !== 0
                        ? { background: "#ecfef6" }
                        : { background: "ffffff" }
                    }
                  >
                    <TableCell align="left" style={{ width: "10px" }}>
                       <b>{row.position}.</b> 
                      </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="left"
                      style={{ width: "10px" }}
                    ><b>
                      {`${row.last_name.toUpperCase()}, ${row.first_name.charAt(
                        0
                      )}`}</b>
                    </TableCell>
                    <Hidden xsDown>
                      <TableCell align="right" style={{ width: "10px" }}>
                       <b>{row.holes_played}</b> 
                      </TableCell>
                      <TableCell align="right" style={{ width: "10px" }}>
                       <b>{row.rounds[row.rounds.length - 1].total_to_par}</b> 
                      </TableCell>
                    </Hidden>
                    <TableCell align="right" style={{ width: "10px" }}>
                      <b>{row.total_to_par > 0
                        ? `+${row.total_to_par}`
                        : row.total_to_par}</b>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MastersScoreboardLarge;
