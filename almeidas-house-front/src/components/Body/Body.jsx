import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default class Body extends Component {
  linha1 = () => {
    return (
      <Grid item xs={12}>
        <TextField style={{margin: 20}} id="outlined-basic" label="Campo 1" variant="outlined" />
      </Grid>
    );
  };

  textoLinha2(){
      return "Campo 2"
  }

  linha2 = () => {
    return (
      <Grid item xs={12}>
        <TextField  style={{margin: 20}} id="outlined-basic" label={this.textoLinha2()} variant="outlined" />
      </Grid>
    );
  };
  linha3 = () => {
    return (
      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Conferir
        </Button>
      </Grid>
    );
  };

  corpoFormulario = () => {
    return (
      <Grid container>
        {this.linha1()}
        {this.linha2()}
        {this.linha3()}
      </Grid>
    );
  };

  render() {
    return <div>{this.corpoFormulario()}</div>;
  }
}
