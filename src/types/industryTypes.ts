interface IndustryData {
    img: string;
    title: string;
    description: string;
}
interface IndustryPageCardProps {
    data: IndustryData
}

interface CustomSvgProps {
    fade?: boolean;
}
interface IJobDescripttionContext  {
    pageContext: Record<
        string,
        Record<string, string | string[]>
    >
}
export {
    IndustryPageCardProps,
    IndustryData,
    CustomSvgProps,
    IJobDescripttionContext,
}