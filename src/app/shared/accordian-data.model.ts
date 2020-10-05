export interface Plugins {
    map(arg0: (childItem: any) => any): any;
    ComplianceType: string,
    ComplianceTypeID: number,
    BlockingEnabled: boolean,
    PluginDomain: string,
    cName: string,
    optOutExternalLink?: string,
    length: number
}

export interface Accordian {
    Localization: string,
    CategoyId: number,
    CategoyHeading: string,
    IsMandatory: boolean,
    BlockingEnabled: boolean,
    CategoyText: string,
    PluginList: Plugins,
    ExtraSettings: string,
    length: number
}

export interface Data {
    BannerId: number,
    accordian: Accordian,
    Created: string,
    LastUpdated: string

}