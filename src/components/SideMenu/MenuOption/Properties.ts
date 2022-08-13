interface MenuOptionProperties {
    id: number;
    selected: number;

    gradientColors: [string, string];
    text: string;
    icon: any;

    onClick: (key: number) => void;
}

export default MenuOptionProperties;