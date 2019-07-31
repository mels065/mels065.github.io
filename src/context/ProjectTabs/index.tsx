import * as React from "react";

import { ProjectTypes } from "../../enums";

export const TabsContext = React.createContext({
    changeSelected: (newSelected: ProjectTypes) => undefined,
    selected: ProjectTypes.ALL,
});

const [selected, changeSelectedFunc] = React.useState(ProjectTypes.ALL);
const state = {
    changeSelected: (newSelected: ProjectTypes) => {
        changeSelectedFunc(newSelected);
    },
    selected,
}
export const TabsProvider = ({ children }: { children: React.ReactElement }) => (
    <TabsContext.Provider value={state}>
        {children}
    </TabsContext.Provider>
);
