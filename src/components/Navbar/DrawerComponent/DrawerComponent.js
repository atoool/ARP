import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  menuIconContainer: {
    marginLeft: "auto",
  },
}));

export const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor="right"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <List>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>Membership</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        className={classes.menuIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};
