import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Paper,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { NavigationItem } from '../../routes/navigationConfig';

const NavContainer = styled(Paper)(({ theme }) => ({
  width: 280,
  height: '100%',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: 0,
  overflow: 'auto',
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  '&.active': {
    '& .MuiListItemButton-root': {
      backgroundColor: theme.palette.action.selected,
    },
    '& .MuiListItemText-primary': {
      fontWeight: 'bold',
      color: theme.palette.primary.main,
    },
  },
}));

interface TreeNavigationProps {
  items: NavigationItem[];
}

interface TreeItemProps {
  item: NavigationItem;
  level: number;
}

const TreeItem: React.FC<TreeItemProps> = ({ item, level }) => {
  const location = useLocation();
  const [open, setOpen] = useState(location.pathname.startsWith(item.path));
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setOpen(!open);
    }
  };

  return (
    <>
      <StyledNavLink to={item.path} end={!hasChildren}>
        <ListItemButton
          onClick={handleClick}
          sx={{
            pl: level * 2,
            py: 1.5,
            borderRadius: '8px',
            mb: 0.5,
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          }}
        >
          {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
          <ListItemText primary={item.label} />
          {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
      </StyledNavLink>

      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item?.children?.map((child, index) => (
              <TreeItem key={index} item={child} level={level + 1} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const TreeNavigation: React.FC<TreeNavigationProps> = ({ items }) => {
  return (
    <NavContainer elevation={1}>
      <Box mb={3}>
        <Typography variant="h6" fontWeight="bold">
          Yash Patel
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Personal Website
        </Typography>
      </Box>
      <List
        component="nav"
        aria-labelledby="navigation-list"
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
        }}
      >
        {items.map((item, index) => (
          <TreeItem key={index} item={item} level={1} />
        ))}
      </List>
    </NavContainer>
  );
};

export default TreeNavigation;
