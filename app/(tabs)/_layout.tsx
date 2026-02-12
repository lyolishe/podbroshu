import { Tabs } from "expo-router";

const TabsLayout = () => {
    return (<Tabs
        screenOptions={{
            headerShown: false,
        }}
    >
        <Tabs.Screen
            name="MyRidesScreen"
            options={{
                title: 'Я подброшу'
            }}
        />
        <Tabs.Screen
            name="MyOrdersScreen"
            options={{
                title: 'Подбросьте меня'
            }}
        />
    </Tabs>)
}

export default TabsLayout;