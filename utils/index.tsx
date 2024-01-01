export type ButtonProps = {
    type: 'button' | 'submit'
    label: string
    icon?: string
    variant?: string
    full?: boolean
}

export type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
}

export interface CampProps {
    backgroundImage?: string
    title?: string
    subtitle?: string
    poeple?: string
}

export interface FeatureItemProps {
    title: string;
    icon: string;
    variant: string;
    desc: string;
}
