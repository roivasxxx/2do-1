import { createStackNavigator } from "@react-navigation/stack"
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export default function Navigator(){
    const navigator = createStackNavigator()

    return <ApplicationProvider {...eva} theme={eva.light}>
        <navigator/>
    </ApplicationProvider>
}