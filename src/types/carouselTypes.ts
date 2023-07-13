interface IClientFeedback {
    clientImg: any;
    clientResponse: string;
    clientName: string;
    clientDesignation: string;
    clientCompanyLogo?: any;
}

interface IClientCarouselData {
    data: IClientFeedback[]
}

export {
    IClientFeedback,
    IClientCarouselData,
}