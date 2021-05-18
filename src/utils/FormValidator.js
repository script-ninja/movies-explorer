export default class FormValidator {
  constructor(settings, formElement) {
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    this._invalidInputClass = settings.invalidInputClass;
    this._submitButton = formElement.querySelector(settings.submitSelector);
    this._submitDisabledClass = settings.submitDisabledClass;
    this._errorMessageSelector = settings.errorMessageSelector;
  }

  _validateInput(input) {
    const inputError = this._formElement.querySelector(this._errorMessageSelector);
    input.classList[input.validity.valid ? "remove" : "add"](this._invalidInputClass);
    inputError.textContent = input.validationMessage;
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  _toggleSubmitState() {
    this._submitButton.classList[this._hasInvalidInput() ? 'add' : 'remove'](this._submitDisabledClass);
    this._submitButton.disabled = this._hasInvalidInput();
  }

  _setEventListeners() {
    this._toggleSubmitState();
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._validateInput(input);
        this._toggleSubmitState();
      });
    });
  }

  clearStatus() {
    // this._formElement.reset();
    this._inputList.forEach((input) => {
      input.classList.remove(this._invalidInputClass);
    });
    const inputError = this._formElement.querySelector(this._errorMessageSelector);
    inputError.textContent = '';
    this._submitButton.classList.add(this._submitDisabledClass);
    this._submitButton.disabled = true;
  }

  enable() {
    this._setEventListeners();
  }
}