interface Plugins {
    ComplianceType: string,
    ComplianceTypeID: number,
    BlockingEnabled: boolean,
    PluginDomain: string,
    cName: string,
    optOutExternalLink?: string
}

export interface Accordian {
    Localization: string,
    CategoyId: number,
    CategoyHeading: string,
    IsMandatory: boolean,
    CategoyText: string,
    PluginList: Plugins,
    ExtraSettings: string
}

export interface Data {
    BannerId: number,
    accordian: Accordian,
    Created: string,
    LastUpdated: string

}