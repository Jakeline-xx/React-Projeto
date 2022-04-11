import "./styles.css";
import { Link } from "react-router-dom";
import { fakeApi } from "../../services/fakeApi";
import { useEffect, useState } from "react";
import { Contato } from "../../components/Type/Type";

import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Fab,
  ListItem,
  ListItemIcon,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
} from "@mui/material";

export function ListaDeContatos() {
  const [contatos, setContato] = useState<Contato[]>([]);
  async function getContatos() {
    const response = await fakeApi.get("contatos");

    const fakeContatos = response.data;

    setContato(fakeContatos);
  }

  async function deleteContato(id: number) {
    if (window.confirm("Tem certeza que deseja exluir essse contato?")) {
      const response = await fakeApi.delete(`contatos/${id}`);
      const fakeContatos = response.data;
      setContato((previousState) => [
        ...previousState.filter((x) => x.id != id),
      ]);
    }
  }

  useEffect(() => {
    getContatos();
  }, []);

  return (
    <div className="container">
      <Link to="novo">
        <div className="novo-contato-btn">
          <Fab
            variant="extended"
            size="medium"
            color="default"
            aria-label="add"
          >
            <div className="novo-contato-btn-txt">
              <GroupAddOutlinedIcon />
              <p id="texto-criar">Criar novo contato</p>
            </div>
          </Fab>
        </div>
      </Link>
      <div className="lista-contatos">
        {contatos.map((contato) => (
          <div key={contato.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar src="image" />
              </ListItemAvatar>
              <ListItemText
                primary={contato.nome}
                secondary={contato.telefone}
              />
              <Link to={`editar/${contato.id}`}>
                <ListItemIcon>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </ListItemIcon>
              </Link>
              <ListItemIcon>
                <IconButton onClick={() => deleteContato(contato.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemIcon>
            </ListItem>
          </div>
        ))}
      </div>
    </div>
  );
}
