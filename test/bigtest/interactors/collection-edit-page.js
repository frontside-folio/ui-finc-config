import {
  clickable,
  interactor,
  is,
  isPresent,
  value,
} from '@bigtest/interactor';

@interactor class ButtonInteractor {
  isButton = is('button');
}

@interactor class UsageRestrictedSelect {
  static defaultScope = 'select[name="usageRestricted"]';
  value = value();
}

@interactor class FreeContentSelect {
  static defaultScope = 'select[name="freeContent"]';
  value = value();
}

@interactor class DeleteCollectionConfirmation {
  static defaultScope = '#delete-collection-confirmation';
}

export default @interactor class EditCollectionPage {
  static defaultScope = '[data-test-collection-form-page]';
  isLoaded = isPresent('[class*=paneTitleLabel---]');

  whenLoaded() {
    return this.when(() => this.isLoaded);
  }

  usageRestrictedSelect = new UsageRestrictedSelect();
  freeContentSelect = new FreeContentSelect();
  deleteCollectionConfirmation = new DeleteCollectionConfirmation();
  clickDeleteCollection = clickable('#clickable-delete-collection');
  closePaneBtn = new ButtonInteractor('[icon=times]');
}
