import * as React from "react";

import { Projects } from "../../enums";

export const TabsContext = React.createContext({
    changeSelected: (newSelected: Projects) => undefined,
    selected: Projects.ALL,
});

const [selected, changeSelectedFunc] = React.useState(Projects.ALL);
const state = {
    changeSelected: (newSelected: Projects) => {
        changeSelectedFunc(newSelected);
    },
    selected,
}
export const TabsProvider = ({ children }: { children: React.ReactElement }) => (
    <TabsContext.Provider value={state}>
        {children}
    </TabsContext.Provider>
);

export const TabsConsumer = TabsContext.Consumer;
