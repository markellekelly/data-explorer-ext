import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the data-explorer extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'data-explorer:plugin',
  description: 'A JupyterLab extension for data exploration.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension data-explorer is activated!');
  }
};

export default plugin;
