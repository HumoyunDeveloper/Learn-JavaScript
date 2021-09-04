const DeviceInfo = {
    check: () => {
        if ("navigator" in window) {
            if (window.navigator.userAgent) {
                return true;
            } else return false;
        } else return false;
    },
    Navigator: window.navigator.userAgent,
    getName: () => {
        if (DeviceInfo.check) {
            DeviceInfo.Navigator = window.navigator.userAgent;

            if (DeviceInfo.Navigator.match(/android/gi)) {
                return "Android";
            } else if (DeviceInfo.Navigator.match(/ios/gi)) {
                return "IOS Phone";
            } else if (DeviceInfo.Navigator.match(/windows/gi)) {
                if (DeviceInfo.Navigator.match("x64")) return "Windows x64";
                if (DeviceInfo.Navigator.match("x32")) return "Windows x32";
                return "Windows";
            } else return "Undefined";

        }
    },

    getBrowser: () => {
        if(DeviceInfo.check) return DeviceInfo.Navigator.match(/Chrome/gi) ? "Chrome Browser" : "Undefined";
    }
};
