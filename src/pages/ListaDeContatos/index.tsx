import "./styles.css";
import { Link } from "react-router-dom";
import { fakeApi } from "../../services/fakeApi";
import { useEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Fab } from "@mui/material";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";

type Contato = {
  id: number;
  name: string;
  telefone: string;
};

export function ListaDeContatos() {
  const [contatos, setContato] = useState<Contato[]>([]);
  async function getContatos() {
    const response = await fakeApi.get("contatos");

    const fakeContatos = response.data;

    setContato(fakeContatos);
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
                primary={contato.name}
                secondary={contato.telefone}
              />
              <Link to="editar/">
                <ListItemIcon>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </ListItemIcon>
              </Link>
              <ListItemIcon>
                <IconButton>
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
