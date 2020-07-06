import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'Paineis de Controle',
        isTitle: true
    },
    {
        id: 2,
        label: 'Visao Geral',
        icon: 'bx-home-circle',
        link: '/dashboard',
    },
    {
        id: 9,
        label: 'Vendas',
        icon: 'bx-chat',
        link: '/dashboards/saas',
    },
    {
        id: 10,
        label: 'Financeiro',
        icon: 'bx-store',
        link: '/dashboards/crypto',
    },
    {
        id: 6,
        isLayout: true
    },
    {
        id: 7,
        label: 'Funcionalidades',
        isTitle: true
    },
    {
        id: 19,
        label: 'Produtos',
        icon: 'bx-bitcoin',
        subItems: [
            {
                id: 20,
                label: 'Meus Produtos',
                link: '/product/my-products',
                parentId: 19
            },
            {
                id: 21,
                label: 'Meu estoque',
                link: '/product/my-stock',
                parentId: 19
            },
            {
                id: 22,
                label: 'Adicionar Produto',
                link: '/product/add-product',
                parentId: 19
            },
        ]
    },
    {
        id: 27,
        label: 'Pedidos',
        icon: 'bx-envelope',
        subItems: [
            {
                id: 20,
                label: 'Meus Pedidos',
                link: '/my-requests/my-orders',
                parentId: 19
            },
            {
                id: 21,
                label: 'Notas Fiscais e Etiqueta',
                link: '/my-requests/invoice',
                parentId: 19
            },
        ]
    },
    {
        id: 42,
        label: 'Fluxo de Caixa',
        icon: 'bxs-user-detail',
        subItems: [
            {
                id: 20,
                label: 'Entradas',
                link: '/cash/input',
                parentId: 19
            },
            {
                id: 21,
                label: 'Saidas',
                link: '/cash/output',
                parentId: 19
            },
        ]
    },
    {
        id: 42,
        label: 'Integração',
        icon: 'bxs-user-detail',
        link: '/integra',
    },
    {
        id: 42,
        label: 'Duvidas?',
        icon: 'bxs-user-detail',
        link: '/help/contact-us',
    },
];

