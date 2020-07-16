export interface Project {
    title: string;
    description: string;
    repo: string;
    site?: string;
    about?: string;
    tech?: ProjectTech;
}

interface ProjectTech {
    general?: Array<string>;
    frontend?: Array<string>;
    backend?: Array<string>;
}

export const openLink = (url: string):void => {
    const win = window.open(url, '_blank');
    win!.focus();
}