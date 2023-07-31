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

export {
    IndustryPageCardProps,
    IndustryData,
    CustomSvgProps,
}