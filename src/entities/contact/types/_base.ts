export interface Contact {
    id: number;
    name: string;
    value: string;
    info: 'juridical' | 'contact';
}

export interface ContactProp {
    contacts: Contact[];
    label: string;
    info: 'juridical' | 'contact';
    action?: (value: string) => void;
}
