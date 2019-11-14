import {
  interactor,
  scoped,
  collection,
  clickable
} from '@bigtest/interactor';

export default @interactor class SourceInteractor {
  static defaultScope = '[data-test-source-instances]';
  clickActiveSOURCEsCheckbox = clickable('#clickable-filter-status-active');

  instances = collection('[role=group] div a');

  instance = scoped('#pane-sourcedetails');
}
