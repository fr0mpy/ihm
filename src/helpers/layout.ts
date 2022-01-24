enum DeviceType {
    Mobile = 'MOBILE',
    Tablet = 'TABLET',
    Desktop = 'DESKTOP'
}

const deviceTypeIs = (deviceType: DeviceType) => {
    const windowWidth = window.innerWidth ?? screen.width;

    switch (deviceType) {
        case DeviceType.Mobile:
            return windowWidth < 600;
        case DeviceType.Tablet:
            return windowWidth > 600 && windowWidth < 1200;
        case DeviceType.Desktop:
            return windowWidth > 1200
        default:
            return;
    }
}

export const mobileDevice = deviceTypeIs(DeviceType.Mobile)
export const tabletDevice = deviceTypeIs(DeviceType.Tablet)
export const desktopDevice = deviceTypeIs(DeviceType.Desktop)

