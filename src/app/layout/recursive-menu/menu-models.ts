export interface IMenuItem {
    title: string;
    icon: string;
    route: string;
    children?: IMenuItem[];
}

export const MENU_ITEMS: IMenuItem[] = [
    {
        title: "Home",
        route: "",
        icon: "bi-house-fill",
    },
    {
        title: "Category 1",
        route: "category_1",
        icon: "bi-folder-fill",
        children: [
            {
                title: "Item 1_1",
                route: "category_1/item_1",
                icon: "bi-folder",
                children: [
                    {
                        title: "SubItem 1_1_1",
                        route: "category_1/item_1/subItem_1_1",
                        icon: "bi-arrow-return-right",
                    },
                    {
                        title: "VEEEERY DEEEEEP",
                        route: "item_1",
                        icon: "bi-sign-stop-fill",
                        children: [
                            {
                                title: "You've found it!",
                                route: "category_1/item_1/page1",
                                icon: "bi-gem",
                            },
                        ],
                    },
                ],
            },
            {
                title: "Item 1_2",
                route: "/category_1/item_2",
                icon: "bi-star",
            },
            {
                title: "Item 1_3",
                route: "/category_1/item_3",
                icon: "bi-flag",
            },
        ],
    },
    {
        title: "Category 2",
        route: "category_2",
        icon: "bi-folder-fill",
        children: [
            {
                title: "Item 2_1",
                route: "/category_2/item_1",
                icon: "bi-sign-stop",
            },
            {
                title: "Item 2_2",
                route: "/category_2/item_2",
                icon: "bi-sign-stop",
            },
        ],
    },
    {
        title: "Another Item",
        route: "/page1",
        icon: "bi-folder-fill",
        children: [
            {
                title: "SubItemPage1Title",
                route: "/page1",
                icon: "bi-sign-stop",
            },
        ],
    },
];
