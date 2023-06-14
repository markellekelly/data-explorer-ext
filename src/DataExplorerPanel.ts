import { StackedPanel } from '@lumino/widgets';
import type { Message } from '@lumino/messaging';
//import { LabIcon } from '@jupyterlab/ui-components';


export class DataExplorerPanel extends StackedPanel {
    constructor() {
        super();
        this.id = 'data-explorer-panel';
        this.title.caption = 'Data Explorer';
    }

    dispose(): void {
        super.dispose();
    }

    protected onCloseRequest(msg: Message): void {
        super.onCloseRequest(msg);
        this.dispose();
    }


    protected onBeforeShow(msg: Message): void {
       console.log("Data explorer panel activating...");
    }

}