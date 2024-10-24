import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Code, LucideIcon, StickyNote } from "lucide-react";
import { Section } from "./Section";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Side, fun project</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url={project.url}
                            />
                        ))}
                    </div>
                </Card>
            </div>

            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1">
                <p className="text-lg text-muted-foreground">Work</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work
                                key={index}
                                {...work}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1">
                <p className="text-lg text-muted-foreground">Contact me</p>
                <ContactCard 
                    name="Nico" image="https://www.format.com/wp-content/uploads/portrait_of_black_man.jpg" mediumImage="https://img.freepik.com/vecteurs-premium/linkedin-logo_578229-227.jpg" description="137 Folowers"/>
                </Card>
            </div>
        </Section>
    );
};

const ContactCard =(props:{
    image: string,
    mediumImage : string,
    name: string,
    description:string
})=>{
    return(
        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
            <div className="relative">
                <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
                <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.name}</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight size={16} className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"/>
        </Card>
    )

}

const SIDE_PROJECTS : SideProjectProps[]= [
    {
        Logo: StickyNote,
        title: "Ged Docuware",
        description: "Code is a fun project that I am working on",
        url: ''
    },
    {
        Logo: Code,
        title: "Social Scheduler",
        description: "Code is a fun project that I am working on",
        url: ''
    }
];

type SideProjectProps = {
    Logo: LucideIcon,
    title: string,
    description: string,
    url: string,
};

const SideProject = (props: SideProjectProps) => {
    return (
        <a href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo size={16} /> {/* Ajout de 'size' pour mieux contrôler la taille de l'icône */}
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </a>
    );
};

const WORKS: WorkProps[] = [
    {
        image:"data:image/png;base64,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",
        title:"SIMPAC",
        role:"Developpeur Informatique",
        date:"2020 - Présent",
        url: "https://www.simpac.fr/",
        freelance:true

    }
]

type WorkProps = {
    image: string
    title: string,
    role:string,
    date:string,
    url: string,
    freelance?:boolean

};

const Work = (props: WorkProps) => {
    return (
        <a href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
                <img 
                    src={props.image}
                    alt={props.title}
                    className="w-8 h-8 object-contain rounded-md"
                />
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.title}</p>
                    {props.freelance && <Badge variant="outline">Mission</Badge>}
                </div>
                <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
                <p className="text-xs text-end text-muted-foreground">{props.date}</p>
        </a>
    );
};