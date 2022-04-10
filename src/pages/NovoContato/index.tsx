import { Link } from "react-router-dom";
import "./styles.css";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { fakeApi } from "../../services/fakeApi";
import Avatar from "@mui/material/Avatar";
import { TextField, Box, Button, Typography } from "@mui/material";
import { Contato } from "../ListaDeContatos";
import { useState } from "react";
import "@fontsource/roboto/500.css";

type CriarContato = {
  id?: number;
  nome: string;
  telefone: string;
};

export function NovoContato() {
  const [contatos, setContatos] = useState<Contato[]>([]);
  const [contatoNomeInput, setContatoNomeInput] = useState("");
  const [contatoTelefoneInput, setContatoTelefoneInput] = useState("");

  async function criarContato(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data: CriarContato = {
      nome: contatoNomeInput,
      telefone: contatoTelefoneInput,
    };

    if (!data.nome) {
      alert("Nome inválido!");
      return;
    }
    if (!data.telefone) {
      alert("Telefone inválido!");
      return;
    }

    const response = await fakeApi.post("contatos", data);

    const fakeContatos = response.data;

    setContatos((previousState) => [...previousState, fakeContatos]);
    setContatoNomeInput("");
    setContatoTelefoneInput("");
    {
      window.location.href = "/";
    }
  }

  return (
    <div className="container">
      <Link to="/">
        <KeyboardReturnIcon />
      </Link>
      <div className="title">
        <Avatar sx={{ width: 200, height: 200 }} src="image" />
        <Typography variant="h5" gutterBottom component="div">
          Novo Contato
        </Typography>
      </div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={criarContato}
      >
        <div className="flex-form">
          <div className="flex-form-input">
            <TextField
              required
              label="Nome"
              type="search"
              value={contatoNomeInput}
              onChange={(event) => setContatoNomeInput(event.target.value)}
            />
          </div>
          <div className="flex-form-input">
            <TextField
              required
              label="Telefone"
              type="search"
              value={contatoTelefoneInput}
              onChange={(event) => setContatoTelefoneInput(event.target.value)}
            />
          </div>

          <Button type="submit" variant="outlined">
            Salvar
          </Button>
        </div>
      </Box>
    </div>
  );
}
