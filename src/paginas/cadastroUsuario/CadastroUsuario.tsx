import React from "react";
import "./CadastroUsuario.css";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function CadastroUsuario() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem2"></Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos2"
            >
              {" "}
              Cadastrar{" "}
            </Typography>
            <TextField
              id="nome"
              label="nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              id="usuario"
              label="usuario"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <TextField
              id="confirmarSenha"
              label="Confirmar senha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
            />
            <TextField
              id="foto"
              label="Foto"
              variant="outlined"
              name="foto"
              margin="normal"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Cadastrar
              </Button>
              <Link to="/login">
              <Button  variant="contained" color="secondary" className="botaoCancelar"> 
              Cancelar
              </Button>
              </Link>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
export default CadastroUsuario;
