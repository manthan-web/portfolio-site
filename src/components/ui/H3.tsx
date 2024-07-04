import { cn } from "@/lib/utils"

export function H3(props: React.HTMLProps<HTMLHeadingElement>) {
    return <h1 

    {...props}
    className={cn("text-xl font-semibold tracking-tight", props.className)}


    />
}