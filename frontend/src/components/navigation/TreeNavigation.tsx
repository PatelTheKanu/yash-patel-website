import React, { useEffect } from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { NavigationItem } from '../../routes/navigationConfig';
import { useLocation } from 'react-router-dom';
import { useActiveSection } from '../../context/ActiveSectionContext';

interface TreeNavigationProps {
  items: NavigationItem[];
}

const TreeNavigation: React.FC<TreeNavigationProps> = ({ items }) => {
  const [open, setOpen] = React.useState<{ [key: string]: boolean }>({});
  const location = useLocation();
  const { activeSection } = useActiveSection();

  console.log('TreeNavigation render - activeSection:', activeSection); // Debug log

  // Function to check if an item or any of its children are active
  const isItemActive = (item: NavigationItem): boolean => {
    if (item.scrollTo === activeSection) {
      console.log('Item is active:', item.label); // Debug log
      return true;
    }
    if (item.children) {
      return item.children.some((child) => isItemActive(child));
    }
    return false;
  };

  // Update open state whenever activeSection changes
  useEffect(() => {
    console.log('useEffect triggered - activeSection:', activeSection); // Debug log

    if (!activeSection) return;

    // Find all parent items that should be expanded
    const findAndExpandParents = (items: NavigationItem[], parentLabels: string[] = []) => {
      items.forEach((item) => {
        const currentPath = [...parentLabels, item.label];

        if (item.scrollTo === activeSection) {
          // Expand all parents when a section is active
          parentLabels.forEach((label) => {
            console.log('Expanding parent:', label); // Debug log
            setOpen((prev) => ({ ...prev, [label]: true }));
          });
        }

        if (item.children) {
          findAndExpandParents(item.children, currentPath);
        }
      });
    };

    findAndExpandParents(items);
  }, [activeSection, items]);

  const handleClick = (label: string, scrollTo?: string) => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const renderItems = (items: NavigationItem[], level = 0) => {
    return items.map((item) => {
      const hasChildren = item.children && item.children.length > 0;
      const isOpen = open[item.label] || false;
      const isActive = isItemActive(item);

      return (
        <React.Fragment key={item.label}>
          <ListItemButton
            onClick={() => handleClick(item.label, item.scrollTo)}
            sx={{
              pl: level * 2 + 2,
              '&:hover': {
                backgroundColor: 'action.hover',
              },
              backgroundColor: isActive ? 'action.selected' : 'transparent',
              '& .MuiListItemIcon-root': {
                color: isActive ? 'primary.main' : 'inherit',
                transition: 'color 0.2s ease',
              },
              '& .MuiListItemText-primary': {
                color: isActive ? 'primary.main' : 'inherit',
                fontWeight: isActive ? 600 : level === 0 ? 500 : 400,
                transition: 'color 0.2s ease, font-weight 0.2s ease',
              },
              transition: 'background-color 0.2s ease',
            }}
          >
            {item.icon && <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>}
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: level === 0 ? '1rem' : '0.875rem',
              }}
            />
            {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
          {hasChildren && (
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderItems(item.children || [], level + 1)}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'transparent',
        p: 2,
      }}
    >
      <List component="nav" aria-labelledby="nested-list-subheader">
        {renderItems(items)}
      </List>
    </Box>
  );
};

export default TreeNavigation;
