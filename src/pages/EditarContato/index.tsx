import { Link } from "react-router-dom";
import "./styles.css";
import { Contato } from "../../components/Type/Type";
import { fakeApi } from "../../services/fakeApi";
import { useEffect, useState } from "react";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { TextField, Box, Button, Typography, Avatar } from "@mui/material";
import "@fontsource/roboto/500.css";

export function EditarContato() {
  const [contatos, setContato] = useState<Contato[]>([]);
  const [contatoNomeInput, setContatoNomeInput] = useState("");
  const [contatoTelefoneInput, setContatoTelefoneInput] = useState("");
  const [contatoIdInput, setContatoIdInput] = useState("");

  async function getContato(id: string) {
    const response = await fakeApi.get("contatos");

    const fakeContatos = response.data;
    const parametro = Number(id);

    const contato = fakeContatos.find((x: Contato) => x.id == parametro);
    setContato(contato);

    setContatoNomeInput(contato.nome);
    setContatoTelefoneInput(contato.telefone);
    setContatoIdInput(contato.id);
  }

  async function editarContato(id: any) {
    if (window.confirm("Tem certeza que deseja alterar as informações?")) {
      const data: Contato = {
        nome: contatoNomeInput,
        telefone: contatoTelefoneInput,
        id: Number(contatoIdInput),
      };

      if (!data.nome) {
        alert("Nome inválido!");
        return;
      }
      if (!data.telefone) {
        alert("Telefone inválido!");
        return;
      }

      await fakeApi.put(`contatos/${id}`, data);

      {
        window.location.href = "/";
      }
    }
  }

  useEffect(() => {
    const url = window.location.href;
    const strs = url.split("/");
    const id = strs.at(-1);

    if (id != null) getContato(id);
  }, []);

  return (
    <div className="container">
      <Link to="/">
        <KeyboardReturnIcon />
      </Link>
      <div className="title">
        <Avatar sx={{ width: 200, height: 200 }} src="image" />
        <Typography variant="h5" gutterBottom component="div">
          Editar Contato
        </Typography>
      </div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={() => editarContato(contatoIdInput)}
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
          <div className="input-id">
            <TextField
              required
              disabled
              label="id"
              type="number"
              value={contatoIdInput}
              onChange={(event) => setContatoIdInput(event.target.value)}
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
