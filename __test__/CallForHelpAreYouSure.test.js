import renderer from 'react-test-renderer';
import CallForHelpAreYouSure from "../src/screens/RequestHelpModule/CallForHelpAreYouSure";
import {NativeBaseProvider} from "native-base";
import {render, screen, fireEvent} from '@testing-library/react-native'
import {NavigationContainer} from "@react-navigation/native";

const component = (
    <NativeBaseProvider initialWindowMetrics={{
        frame: {
            width: 320,
            height: 640,
            x: 0,
            y: 0,
        },
        insets: {
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
        },
    }}>
        <NavigationContainer>
            <CallForHelpAreYouSure/>
        </NavigationContainer>
    </NativeBaseProvider>
)

describe('Call for help: are you sure screen', () => {
    it('renders correctly', () => {
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('goes back to main screen when go back button is clicked', () => {
        expect(() => {
            render(component)
            fireEvent.press(screen.getByText("GO BACK"))
        }).toThrowError("Not implemented") // TODO: expect to go to main screen
    })


})