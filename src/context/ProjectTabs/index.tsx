import * as React from "react";

import { ProjectTypes } from "../../enums";

export const TabsContext = React.createContext({
    changeSelected: (newSelected: ProjectTypes) => undefined,
    selected: ProjectTypes.ALL,
});

export function TabsProvider({ children }: { children: React.ReactElement }) {
    const [selected, changeSelectedFunc] = React.useState(ProjectTypes.ALL);
    const state = {
        changeSelected: (newSelected: ProjectTypes) => {
            changeSelectedFunc(newSelected);
        },
        selected,
    };

    return (
        <TabsContext.Provider value={state}>
            {children}
        </TabsContext.Provider>
    );
}
