import { ReactNode } from "react";


export interface RootLayoutProps {
    children: ReactNode
    params?: { id: string }
}