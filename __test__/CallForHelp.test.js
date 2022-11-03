import {NativeBaseProvider} from "native-base";
import {NavigationContainer} from "@react-navigation/native";
import CallForHelp from "../src/screens/RequestHelpModule/CallForHelp";
import {render, screen} from "@testing-library/react-native";

const component = (<NativeBaseProvider initialWindowMetrics={{
    frame: {
        width: 320, height: 640, x: 0, y: 0,
    }, insets: {
        left: 0, right: 0, bottom: 0, top: 0,
    },
}}>
    <NavigationContainer>
        <CallForHelp/>
    </NavigationContainer>
</NativeBaseProvider>)

const expectedValues = {
    explanationText: "You are currently requesting help. Below is a list of users who agreed to help you. They have constant access to your current location but, for privacy reasons, don't know your phone number. Be sure to contact them to discuss the details, or click the cross button to let them know you already expect help from someone else. DO NOT click cancel unless you are 100% sure you will get the help you need.",
    infoLabel: "Always prioritize your health!",

}

const content = {
    ribbonTitle: () => {
        return screen.queryByText("Requesting help")
    }, explanationText: () => {
        return screen.queryByText(expectedValues.explanationText)
    }, infoText: () => {
        return screen.queryByText(expectedValues.infoLabel)
    }, lastRefreshLabel: () => {
        return screen.queryByText(/Last refresh/)
    }, coordinatesLabel: () => {
        return screen.queryByText(/Latitude/)
    }, cancelButton: () => {
        return screen.queryByText("CANCEL")
    }, lastRefreshValue: () => {
        return screen.queryByText(/Last refresh/).props.children[1]
    }, latitudeValue: () => {
        return screen.queryByText(/Latitude/).props.children[1]
    }, longitudeValue: () => {
        return screen.queryByText(/Latitude/).props.children[4]
    }
}

describe("Call for help", () => {
    it('renders correctly', () => {
        render(component)
        for (let i = 0; i < Object.entries(content).length; i++) {
            if (Object.entries(content)[i][1]() == null) {
                fail("Could not find element '" + Object.entries(content)[i][0] + "'!")
            }
        }
    })

    it('does not leave the location empty', async () => {
        render(component)
        await new Promise(r => setTimeout(r, 5000));
        expect(content.longitudeValue()).not.toBe("")
        expect(content.latitudeValue()).not.toBe("")
    })
})


