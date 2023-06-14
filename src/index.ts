import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { INotebookTracker } from '@jupyterlab/notebook';
import { DataExplorerPanel } from './DataExplorerPanel';

/**
* Initialization data for the Data Explorer extension.
*/
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'DataExplorer:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd, notebookTracker: INotebookTracker) => {
      const panel: DataExplorerPanel = new DataExplorerPanel();
      app.shell.add(panel, 'right', { rank: 1000 });

      // emitted when the user's notebook changes, null if all notebooks close
      notebookTracker.currentChanged.connect((_, widget) => {
          console.log(widget);
      });
  },
  requires: [INotebookTracker]
};

export default plugin;