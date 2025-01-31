import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'introduccion',
      label: 'Introducción',
    },
    {
      type: 'category',
      label: 'Clientes',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Adidas',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'v3.0',
              collapsible: true,
              collapsed: true,
              items: [
                'adidas/v3.0/proyecto-1',
                'adidas/v3.0/proyecto-2',
                'adidas/v3.0/recursos',
              ],
            },            
            {
              type: 'category',
              label: 'v2.0',
              collapsible: true,
              collapsed: true,
              items: [
                'adidas/v2.0/proyecto-1',
                'adidas/v2.0/proyecto-2',
                'adidas/v2.0/recursos',
              ],
            },
            {
              type: 'category',
              label: 'v1.0',
              collapsible: true,
              collapsed: true,
              items: [
                'adidas/v1.0/proyecto-1',
                'adidas/v1.0/proyecto-2',
                'adidas/v1.0/recursos',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Honda',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'v1.0',
              collapsible: true,
              collapsed: false,
              items: [
                'honda/v1.0/proyecto-1',
                'honda/v1.0/proyecto-2',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Coca Cola',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'v1.0',
              collapsible: true,
              collapsed: false,
              items: [
                'coca-cola/v1.0/optimizacion-db',
                'coca-cola/v1.0/proyecto-1',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Safetti',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'v1.0',
              collapsible: true,
              collapsed: false,
              items: [
                'safetti/v1.0/multitenant',
              ],
            },
          ],
        },                      
      ],
    },
  ],
};

export default sidebars;
