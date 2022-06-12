import { NavigationContainer } from '@react-navigation/native';

import { AppNavigation } from './navigation/TabNavigator';
import ThemesProvider from './theme-config/themesProvider';

export default function App() {
    return (
        <ThemesProvider>
            <NavigationContainer>
                <AppNavigation />
            </NavigationContainer>
        </ThemesProvider>
    );
}