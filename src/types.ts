
export enum Platform {
    Twitch = 0,
    Youtube = 1
}

export enum EventType {
    Bits = 0,
    Donation = 1,
    Subscription = 2,
    GiftedSubscription = 3,
    ChannelPoints = 4
}

export interface ScrapData {
    UserId: string;
    DisplayName: string;
    Platform: Platform;
    ScrapTotal: number;
    ScrapCurrent: number;
}

export interface ItemData {
    DisplayName: string,
    UserPlatform: Platform,
    UserId: string,
    CreationTime: string,
    EventType: EventType,
    EventRedeemValue: number,
    CreationTick: number,
    TimeModifier: number,
    Address: string,
    PositionX: number,
    PositionY: number,
    PositionZ: number,
    RotationX: number,
    RotationY: number,
    RotationZ: number,
    ImageUrl: string,
}
